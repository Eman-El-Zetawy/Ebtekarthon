
//     var fileTag = document.getElementById("fileInput");
//     preview = document.getElementById("imgInp"); 

//     fileTag.addEventListener("change", function() {
//         preview.addEventListener('click', () => 
//         {    fileTag.click()  ;
//      changeImage(this);
//     }
// )});
//     function changeImage(input) {
//      var reader;
//      console.log(input);
//      if (input.files && input.files[0]) {
//        reader = new FileReader();
      
//        reader.onload = function(e) {
//          preview.setAttribute('src', e.target.result);
//        }
//        reader.readAsDataURL(input.files[0]);
//      }
//     }
    
//      document.getElementById('save').addEventListener('click',add);
document.getElementById('imgInp').addEventListener('click', () => {
  document.getElementById('fileInput').click()
  
})
  function readURL(input) {
      console.log(input.files && input.files[0]);
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          
          reader.onload = function (e) {
              document.getElementById("imgInp").setAttribute('src', e.target.result);
          }
          reader.readAsDataURL(input.files[0]);
      }
  }
  document.getElementById("fileInput").addEventListener("change" , function(){
      readURL(this);
  });
    /////////
    input   = document.getElementById("fileInput");
    let b64 = "";
    input.onchange = function () {
      var file = input.files[0],
        img = new FileReader();
      img.onloadend = function () {
        b64 = img.result.replace(/^data:.+;base64,/, '');
        console.log(b64);
      };
      img.readAsDataURL(file);
    };

  

const save = document.getElementById("save");

save.addEventListener("keydown",function(e){
  if(e.key==="Enter"){
    add();
  } });

save.addEventListener("click" , add());
 
    function add(){
      let SpeakerName =document.getElementById("name").value ;
      let SpeakerPosition =document.getElementById("position").value ;
      let SpeakerEmail =document.getElementById("email").value ;
      let SpeakerBIO =document.getElementById("brif").value ;

      const myHeader =new Headers();
      myHeader.append('Content-Type', 'application/json');
  

      fetch('http://localhost:3000/speaker',{
      method:'POST',
      headers: myHeader,
      body:JSON.stringify({
      name : SpeakerName , 
      position : SpeakerPosition,
      email : SpeakerEmail,
      BIO : SpeakerBIO
   })
}).then( response=>response.json()).then(data=> console.log(data));
}
