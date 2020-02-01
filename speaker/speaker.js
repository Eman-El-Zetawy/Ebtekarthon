const inputfile = document.getElementById("fileInput"),
  imgInp = document.getElementById('imgInp') , 
  save = document.getElementById("save") , 
  e1 =document.getElementById("error1") ,
  e2 =document.getElementById("error2") ,
  e3 =document.getElementById("error3") ,
  e4 =document.getElementById("error4")  ;
 let  b64 = "";

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

inputfile.addEventListener("change", function () {
  readURL(this);
});
imgInp.addEventListener('click', () => {
  inputfile.click()
});

inputfile.onchange = function () {
  var file = inputfile.files[0],
    img = new FileReader();
  img.onloadend = function () {
    b64 = img.result.replace(/^data:.+;base64,/, '');
};
  img.readAsDataURL(file);
};

function speak (){
  location.replace("../speaker/speaker.html");
}

let array = [];
save.addEventListener("click" , add); 

function add() {
  let SpeakerName = document.getElementById("name").value;
  let SpeakerPosition = document.getElementById("position").value;
  let SpeakerEmail = document.getElementById("email").value;
  let SpeakerBIO = document.getElementById("brif").value; 
  const myHeader = new Headers();
  myHeader.append('Content-Type', 'application/json');
  e1.innerHTML=""; e2.innerHTML=""; e3.innerHTML=""; e4.innerHTML="";
  

  if(!validator.isEmpty(SpeakerName)&&!validator.isEmpty(SpeakerPosition)&&!validator.isEmpty(SpeakerBIO)&& validator.isEmail(SpeakerEmail)){
    
  fetch('http://localhost:3000/speaker', {
    method: 'POST',
    headers: myHeader,
    body: JSON.stringify({
      name: SpeakerName,
      position: SpeakerPosition,
      email: SpeakerEmail,
      BIO: SpeakerBIO,
      photo: b64
    })
  }).then(response => response.json())
  .then(data => speak() );
  }
else 
if(validator.isEmpty(SpeakerName)){ e1.innerHTML="Please, Enter the information correctly . It is empty . " ;}
if(validator.isEmpty(SpeakerPosition)){ e2.innerHTML="Please, Enter the information correctly . It is empty . " ;}
if(validator.isEmpty(SpeakerBIO)){ e4.innerHTML="Please, Enter the information correctly . It is empty . " ;}
if(!validator.isEmail(SpeakerEmail)){ e3.innerHTML="Please, Enter the Email correctly ." ;}

}