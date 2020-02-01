const inputfile = document.getElementById("fileInput"),
    imgInp = document.getElementById('imgInp'),
    done = document.getElementById("done")
    ;
let pathimg = "" , b64 = "";

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
let token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");;
console.log(token);
const myheader = new Headers();
myheader.append('Content-Type', 'application/json');
myheader.append('Authorization', `Bearer ${token}`);
fetch('http://localhost:3000/event', {
        method: 'GET',
        headers: myheader
    })
    .then(response => response.json())
    .then((data) => {
        console.log(data[0].headerlogo);
        pathimg = data[0].headerlogo;
        renderlogo(pathimg)
    });

document.getElementById('buttonSave').addEventListener('click', changelogo);
function changelogo() {
    const myheader = new Headers();
    myheader.append('Content-Type', 'application/json');
    myheader.append('Authorization', `Bearer ${token}`);
    fetch('http://localhost:3000/event', {
            method: 'PUT',
            headers: myheader,
            body: JSON.stringify({
                photo: b64
            })
        })
        .then(response => response)
        .then((data) => {
            done.innerHTML = "Successfully Done . ";

            // renderlogo(pathimg);
        })
};

function renderlogo(pathimg) {
    console.log(pathimg);
    document.getElementById('imgInp').src = 'http://localhost:3000'+pathimg;
};