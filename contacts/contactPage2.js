function contact(){
    location.replace("../contacts/contacts.html");
}
var b64 ="";
const inputfile = document.getElementById("fileInput");

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
 inputfile.addEventListener("change", function () {
                readURL(this);
            });
    document.getElementById("imgInp").addEventListener("change" ,function(){
                // readURL(this);
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



const my =new Headers();
my.append('Content-Type', 'application/json');

const name =  document.getElementById("inputName") ;
const position =  document.getElementById("inputPosition") ;
const mobile =  document.getElementById("inputMobile") ;
const email =  document.getElementById("inputEmail2") ; 




const save = document.getElementById("savePage2");

save.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
      main();
    } });



save.addEventListener("click" ,main) ; 

function main( ){
console.log("isrun");
 fetch('http://localhost:3000/contact',{
  method:'POST',
  headers : my , 
  body:JSON.stringify({
            name :  name.value, 
           position : position.value , 
           mobile : mobile.value  , 
           email :  email.value , 
           img : b64 
   })
}).then( response=>response.json()).then((data) => {
    console.log(data); 

  //contact(); 
});
   
   
};

	





