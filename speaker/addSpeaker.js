const myHeader = new Headers();
myHeader.append('Content-Type', 'application/json');

let n = document.getElementById("new");
let speakers = [];
fetch('http://localhost:3000/speaker', {
  meathod: 'GET',
  headers: myHeader
}).then(response => response.json()).then(data => {
  console.log(data);
  speakers = data;
  RenderingSpeaker(speakers);
});

let NewSpeaker = document.getElementById('newspeaker');

function RenderingSpeaker(speakers) {
let html = '';
  speakers.forEach(item => {
    console.log(item);
    html += `<div class="card">
      <img src="http://localhost:3000${item.img}" alt="Avatar">
      <div class="container">
      <h4><b>${item.name}</b></h4>
      <p>${item.bio}</p><br>
      <button class="button" id='${item.id}' onclick 
      ="DeleteSpeaker(this.id)">
       <strong> DELETE </strong ></button></div></div>`;
  });
  NewSpeaker.innerHTML = html;

}

function DeleteSpeaker(id) {
  console.log(id);
  const myHeader = new Headers();
  myHeader.append('Content-Type', 'application/json');


  fetch('http://localhost:3000/speaker/', {
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
        speakers.forEach((item, index) => {

          if (item.id == id) {

            speakers.splice(index, 1);
          }
        });
        NewSpeaker.innerHTML = "";
        
          RenderingSpeaker(speakers);
        

      }

    });
}