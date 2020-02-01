const inputfile = document.getElementById("fileInput"),
    imgInp = document.getElementById('imgInp'),
    ero = document.getElementById("error");
    var b64 = "";

    function part() {
        location.replace("../partners/partners.html");
    }

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
const save = document.getElementById("save"),
 wsite = document.getElementById("name");
save.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addpartner();
    }
});

save.addEventListener("click", addpartner);

function addpartner() {
   
    const myheader = new Headers();
    myheader.append('Content-Type', 'application/json');

    if(!validator.isEmpty(wsite.value) && b64 !==''){
     
    fetch('http://localhost:3000/partners', {
        method: 'POST',
        headers: myheader,
        body: JSON.stringify({
            photo: b64,
            wsite: wsite.value
        })
    }).then(response => response.json()).then((data) => {
        //console.log(data);
    part();

    });}
    else{
ero.innerHTML= "Please, Enter the information correctly . It is empty . " ;
    }
};