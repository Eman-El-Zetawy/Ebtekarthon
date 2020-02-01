const inputfile = document.getElementById("fileInput"),
  imgInp = document.getElementById('imgInp'),
  save = document.getElementById("save") , 
  e1 =document.getElementById("error1") ,
  e2 =document.getElementById("error2") ,
  e3 =document.getElementById("error3") ,
  e4 =document.getElementById("error4")  ;
  let b64 = "";

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

  
save.addEventListener("click" , add); 
      function add(){
        let Name =document.getElementById("name").value ;
        let Position =document.getElementById("position").value ;
        let Email =document.getElementById("email").value ;
        let JurisBIO =document.getElementById("brif").value ;
  e1.innerHTML=""; e2.innerHTML=""; e3.innerHTML=""; e4.innerHTML="";
        const myHeader =new Headers();
        myHeader.append('Content-Type', 'application/json');
    
        if(!validator.isEmpty(Name)&&!validator.isEmpty(Position)&&!validator.isEmpty(JurisBIO)&& validator.isEmail(Email)){
  
        fetch('http://localhost:3000/juries',{
        method:'POST',
        headers: myHeader,
        body:JSON.stringify({
        name : Name , 
        position : Position,
        email : Email,
        BIO : JurisBIO,
        photo :b64
     })
  }).then( response=>response.json()).then(data=>{Juries()});
}
else 
if(validator.isEmpty(Name)){ e1.innerHTML="Please, Enter the information correctly . It is empty . " ;}
if(validator.isEmpty(Position)){ e2.innerHTML="Please, Enter the information correctly . It is empty . " ;}
if(validator.isEmpty(JurisBIO)){ e4.innerHTML="Please, Enter the information correctly . It is empty . " ;}
if(!validator.isEmail(Email)){ e3.innerHTML="Please, Enter the Email correctly ." ;}

  }


  function Juries() {
    location.replace("../juries/juries.html")
}
