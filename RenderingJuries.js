const myHeader = new Headers();
 myHeader.append('Content-Type', 'application/json');
 
 let arr = [];
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
;
console.log(arr);
 let juries = document.getElementById('jurie');
 function RenderingJuries(data) {
    console.log(data);
   
    let add = `<div class="col-lg-3 col-md-4 col-sm-6">`+
    `<div class="speaker-post">`+
        `<a href="http://www.ebtekarthon.net/jury1.html">`+data.img+`</a>`+
        `<div class="speaker-content">`+
           `<h2><a href="http://www.ebtekarthon.net/jury1.html">`+data.name+`</a></h2>`+
            `<span>`+data.position+`</span>`+
        `</div></div></div>`;
//    console.log(data);
//    let add = `<div class="card">` +
//      `<img src="../images/IMG12.jpg" alt="Avatar">` +
//      `<div class="container">` +
//      `<h4><b>` + data.name + `</b></h4>` +
//      `<p>` + data.bio + `</p><br>` +
//      `<button class="button"  onclick ="DeleteJuries(this.id)" id=` + data.id + `> <strong> DELETE </strong ></button>
//           </div>
//       </div>`;
    console.log(data.id);
    console.log(add);
   juries.innerHTML += add;

 }
