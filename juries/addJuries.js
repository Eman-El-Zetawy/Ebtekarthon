 
   let arr = [] , add = "" ;        
 const juries = document.getElementById('newjuries');

const myHeader = new Headers();
 myHeader.append('Content-Type', 'application/json');

 fetch('http://localhost:3000/juries', {
   meathod: 'GET',
   headers: myHeader
 }).then(response => response.json()).then(data => {
   console.log(data);
   arr = data;
   arr.forEach(item => {
     RenderingJuries(item);
   });

 });



 function RenderingJuries(d) {
   console.log(d);
    add = '<div class="maincard">' +
     '<img src="../images/IMG12.jpg" alt="Avatar">' +
     '<div class="container">' +
     '<h4><b>' + d.name + '</b></h4>' +
     '<p>' + d.bio + '</p><br>' +
     '<button class="button"  onclick ="DeleteJuries(event)" ><strong  id="'+d.id+'" > DELETE </strong ></button>'+
          '</div></div>' ; 

   juries.innerHTML += add;

 }

 function DeleteJuries(event) {
  let  i= event.target.getAttribute('id');

   console.log(i);
    
   fetch('http://localhost:3000/juries/',{
       method: 'DELETE',
       headers: myHeader,
       body: JSON.stringify({
         id: i})
      })
      .then(response => response.json()).then(data => { 
       console.log(data);

       console.log("done delete ");

       arr.forEach((obj, index)=> {
           if (obj.id == i) {
             arr.splice(index, 1);
          } });
          
           juries.innerHTML = "";
          arr.forEach(obj => {
            RenderingJuries(obj);
          
         })
     });
    }
