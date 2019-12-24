document.getElementById('imgInp').addEventListener('click', () => {
    document.getElementById('fileInput').click()
  })
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                document.getElementById("imgInp").setAttribute('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    document.getElementById("imgInp").addEventListener("change" ,function(){
                readURL(this);
            });
    // document.getElementById("imgInp").change(function(){
    //     readURL(this);
    // }); 

const my =new Headers();
my.append('Content-Type', 'application/json');

var obj = { };
const e4 =  document.getElementById('error4') ;
const e5 =  document.getElementById('error5') ;
const e6 =  document.getElementById('error6') ;
const e7 =  document.getElementById('error7') ;


const name =  document.getElementById("inputName") ;
const position =  document.getElementById("inputPosition") ;
const mobile =  document.getElementById("inputMobile") ;
const email2 =  document.getElementById("inputEmail2") ; 


const save2 = document.getElementById("savePage2");

save2.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
      main();
    } });

save2.addEventListener("click" ,main()) ; 

function main( ){
    console.log("hi");
    var n = name.value , 
       p= position.value ,
       m = mobile.value , 
       em = email2.value ; 



 fetch('http://localhost:6600/contactPage2',{
  method:'POST',
  headers : my , 
  body:JSON.stringify({
            name : n , 
           position : p  , 
           mobile : m , 
           email : em 
   })
}).then( response=>response.json()) .then((data) => { obj.push(data) ; console.log(data); });
   
       console.log( obj ) ; 
      // save2.innerHTML = ' <a href ="../contacts/contacts.html">' + '<button class="save"  id="savePage2"> Save </button></a>' ; 
      // window.location.assign("../contacts/contacts.html") ;
};

	





