 const myHeader = new Headers();
 myHeader.append('Content-Type', 'application/json');
 
 let juries = [];
 fetch('http://localhost:3000/juries', {
   meathod: 'GET',
   headers: myHeader
 }).then(response => response.json()).then(data => {
   console.log(data);
   juries = data;
  
     RenderingJuries(juries);
  

 });
console.log( juries);
 let addjuries = document.getElementById('newjuries');

 function RenderingJuries(juries) {
  let html = '';
   juries.forEach(item => {
   html += `<div class="card">
    <img src="http://localhost:3000${item.img}" alt="Avatar">
    <div class="container">
     <h4><b>${item.name}</b></h4>
     <p>${item.bio}</p><br>
     <button class="button"  onclick ="DeleteJuries(this.id)"
      id=${item.id}> <strong> DELETE </strong ></button>
          </div>
      </div>`;
    });
   addjuries.innerHTML = html;
   

 }

 function DeleteJuries(id) {

   console.log(id);
   const myHeader = new Headers();
   myHeader.append('Content-Type', 'application/json');

   fetch('http://localhost:3000/juries/', {
       method: 'DELETE',
       headers: myHeader,
       body: JSON.stringify({
         id: id
       })
     })
     .then(res => {
      console.log(res);
       if (res.status === 200) {
         
        console.log(res.status);
        juries.forEach((obj, index) => {
          
           if (obj.id == id) {
             
            juries.splice(index, 1);
          }
           }); 
           juries.innerHTML = "";
            RenderingJuries(juries);

        }  
       
     });
    }