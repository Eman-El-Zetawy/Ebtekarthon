const inputfile = document.getElementById("fileInput"),
    imgInp = document.getElementById('imgInp');
    var b64 = "";

function readURL(input) {
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

const name = document.getElementById("inputName"),
    position = document.getElementById("inputPosition"),
    mobile = document.getElementById("inputMobile"),
    email = document.getElementById("inputEmail2"),
    save = document.getElementById("savePage2") ,
    e1= document.getElementById('error1'),
    e2= document.getElementById('error2'),
    e3= document.getElementById('error3'),
    e4= document.getElementById('error4')
    ;

function contact (){
   location.replace("../contacts/contacts.html");
}

save.addEventListener("click", addcontact);

function addcontact() {
    const myheader = new Headers();
    myheader.append('Content-Type', 'application/json');

    if(!validator.isEmpty(name.value)&&!validator.isEmpty(position.value)&&!validator.isEmpty(mobile.value)&& validator.isEmail(email.value)){
     

    fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: myheader,
        body: JSON.stringify({
            name: name.value,
            position: position.value,
            mobile: mobile.value,
            photo:b64,
            email: email.value
        })
    }).then(response => response.json()).then((data) => {
        console.log(data);
   contact();

    });
 }
    else
if(validator.isEmpty(name.value)){ e1.innerHTML="Please, Enter the information correctly . It is empty . " ;}
if(validator.isEmpty(position.value)){ e2.innerHTML="Please, Enter the information correctly . It is empty . " ;}
if(validator.isEmpty(mobile.value)){ e3.innerHTML="Please, Enter the information correctly . It is empty . " ;}
if(!validator.isEmail(email.value)){ e4.innerHTML="Please, Enter the Email correctly ." ;}
};