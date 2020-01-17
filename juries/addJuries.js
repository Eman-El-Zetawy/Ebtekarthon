 const myHeader = new Headers();
 myHeader.append('Content-Type', 'application/json');
 
 let arr = [];
 fetch('http://localhost:3000/juries', {
   meathod: 'GET',
   headers: myHeader
 }).then(response => response.json()).then(data => {

   // let arr = [];
   console.log(data);
   arr = data;
   arr.forEach(item => {
     RenderingJuries(item);
   });

 });
console.log(arr);
 let juries = document.getElementById('newjuries');

 function RenderingJuries(data) {
   console.log(data);
   let add = `<div class="card">` +
     `<img src="../images/IMG12.jpg" alt="Avatar">` +
     `<div class="container">` +
     `<h4><b>` + data.name + `</b></h4>` +
     `<p>` + data.bio + `</p><br>` +
     `<button class="button"  onclick ="DeleteJuries(this.id)" id=` + data.id + `> <strong> DELETE </strong ></button>
          </div>
      </div>`;
    console.log(data.id);
   juries.innerHTML += add;
   

 }

 function DeleteJuries(id) {
   //let id = this.onclick;
  //  let id = event.target.getAttribute('index');
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
         arr.forEach((obj, index) => {
          
           if (obj.id == id) {
             
             arr.splice(index, 1);
          }
           }); 
           juries.innerHTML = "";
          arr.forEach(obj => {
            RenderingJuries(obj);
          
         });

        }  
       
     });
    }