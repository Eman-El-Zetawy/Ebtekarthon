const myHeaders =new Headers();
myHeaders.append('Content-Type', 'application/json');

let array = [];
fetch('http://localhost:3000/speaker',{
  meathod:'GET', 
  headers : myHeaders }).then( response=>response.json()).then(data=> {
      console.log(data) ; 
      array=data ;
      array.forEach(item=> {
           RenderingSpeaker(item); 
      });
     
  });

  let NewSpeaker= document.getElementById('speaker');

  function RenderingSpeaker(data){
      console.log(data);
      let add = `<div class="col-lg-3 col-md-4 col-sm-6">`+
      `<div class="speaker-post">`+
          `<a href="http://www.ebtekarthon.net/jury1.html">`+data.img+`</a>`+
          `<div class="speaker-content">`+
             `<h2><a href="http://www.ebtekarthon.net/jury1.html">`+data.name+`</a></h2>`+
              `<span>`+data.position+`</span>`+
          `</div></div></div>`;
  console.log(data.id);

  NewSpeaker.innerHTML+= add;
  
}