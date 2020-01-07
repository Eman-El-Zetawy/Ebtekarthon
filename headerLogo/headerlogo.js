 const inputfile = document.getElementById("fileInput"),
     imgInp = document.getElementById('imgInp'),
     d64 = "";
     renderlogo();
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


 //
 document.getElementById('buttonSave').addEventListener('click', add);

 function add() {
     console.log(b64);
     const myheader = new Headers();
     myheader.append('Content-Type', 'application/json');
     fetch('http://localhost:3000/event', {
             method: 'PUT',
             headers: myheader,
             body: JSON.stringify({
                 photo: b64
             })
         })
         .then(response => response)
         .then((data) => {
             console.log(data);
             renderlogo();
         })
 };



 function renderlogo(){
const pathimg =[]; 
    const myheader = new Headers();
    myheader.append('Content-Type', 'application/json');
    fetch('http://localhost:3000/event', {
            method: 'GET',
            headers: myheader
        })
        .then(response => response.json())
        .then((data) => {
        pathimg.push(data[0]);

        document.getElementById('imgInp').src = data[0].headerlogo;
    //   document.getElementById('add').innerHTML = `<input id="fileInput" type="file" /><img class="imgform" src="${data[0].headerlogo}" id="imgInp" alt="Avatar">`
        });
        
 };