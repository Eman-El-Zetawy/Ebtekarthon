const inputfile = document.getElementById("fileInput"),
    imgInp = document.getElementById('imgInp'),
    d64 = "";
    renderhome() ;
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
})

inputfile.onchange = function () {
    var file = inputfile.files[0],
        img = new FileReader();
    img.onloadend = function () {
        b64 = img.result.replace(/^data:.+;base64,/, '');
    };
    img.readAsDataURL(file);
};

document.getElementById('buttonSave').addEventListener('click', add);

function add() {
    console.log(b64);
    const title = document.getElementById('title').value,
        location = document.getElementById('location').value,
        date = document.getElementById('date').value;
    const myheader = new Headers();
    myheader.append('Content-Type', 'application/json');
    fetch('http://localhost:3000/home', {
            method: 'PUT',
            headers: myheader,
            body: JSON.stringify({
                photo: b64,
                title,
                location,
                date
            })
        })
        .then(response => response)
        .then((data) => {
            console.log(data);
            renderhome() 
        })
}

function renderhome() {
    const myheader = new Headers();
    myheader.append('Content-Type', 'application/json');
    fetch('http://localhost:3000/home', {
            method: 'GET',
            headers: myheader
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data[0]);
            document.getElementById('add').innerHTML = `<img class="imgform" src="${data[0].homeimg}" id="imgInp" alt="Avatar">
          <input type="text" placeholder="Title" id="title" value="${data[0].hometitle}">
          <input type="text" placeholder=" Location" id="location" value="${data[0].homelocation}">
          <input type="text" placeholder="Date" id="date" value="${data[0].homedate}">`
        });

}