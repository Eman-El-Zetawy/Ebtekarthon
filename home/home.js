const inputfile = document.getElementById("fileInput"),
    imgInp = document.getElementById('imgInp'),
    title = document.getElementById('title'),
    location1 = document.getElementById('location'),
    date = document.getElementById('date'),
    d64 = "";
    renderhome() ;
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

document.getElementById('buttonSave').addEventListener('click', add);

function add() {
    console.log(b64);
    const myheader = new Headers();
    myheader.append('Content-Type', 'application/json');
    fetch('http://localhost:3000/home', {
            method: 'PUT',
            headers: myheader,
            body: JSON.stringify({
                photo: b64,
                title: title.value,
                location: location1.value,
                date: date.value
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
            imgInp.src = data[0].homeimg;
            title.value = data[0].hometitle;
            location1.value = data[0].homelocation;
            date.value = data[0].homedate;
       });

}