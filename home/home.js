const inputfile = document.getElementById("fileInput"),
    imgInp = document.getElementById('imgInp'),
    title = document.getElementById('title'),
    location1 = document.getElementById('location'),
    date = document.getElementById('date'),
    e1=document.getElementById("error1"),
    e2=document.getElementById("error2"),
    e3=document.getElementById("error3"),
    ero =document.getElementById('done');
  var   b64 = "";
let  home = {};
// // myheader.append('Authorization', `Bearer ${token}`);

function readURL(input) {
    console.log(input.files && input.files[0]);
    
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            imgInp.setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}


inputfile.addEventListener("change", function () {
    readURL(this);
});
imgInp.addEventListener('click', () => {
    inputfile.click()
})

inputfile.onchange = function () {
    var file = inputfile.files[0],
        img = new FileReader();
    img.onloadend = function () {
        b64 = img.result.replace(/^data:.+;base64,/, '');
    };
    img.readAsDataURL(file);
};
const myheader = new Headers();
    myheader.append('Content-Type', 'application/json');

fetch('http://localhost:3000/home', {
        method: 'GET',
        headers: myheader
    }) .then(response => response.json())
    .then((data) => {
        home = data[0];
     console.log(home);
        renderhome(home);
    });

// let token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");;
// console.log(token);

document.getElementById('buttonSave').addEventListener('click', add);

function add() {
    // console.log(b64);
    if(!validator.isEmpty(title.value)&&!validator.isEmpty(location1.value)&&!validator.isEmpty(date.value)){
  
    fetch('http://localhost:3000/home', {
            method: 'PUT',
            headers: myheader,
            body: JSON.stringify({
                photo:b64 ,
                title: title.value,
                location: location1.value,
                date: date.value
            })
        }).then(response => response.json())
        .then((data) => {
            ero.innerHTML = "Successfully Done" ; 
        })
}else 
{
    ero.innerHTML = "Please, Enter the information correctly . It is empty . "
}
}

function renderhome(home) {
            console.log(home);
            imgInp.src ='http://localhost:3000'+home.homeimg;
            title.value = home.hometitle;
            location1.value = home.homelocation;
            date.value = home.homedate;
}