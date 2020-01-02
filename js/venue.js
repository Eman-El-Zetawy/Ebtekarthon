const venue =  document.getElementById("inputVenue" ) ;
const phone =  document.getElementById("inputPhone") ;
const email =  document.getElementById("inputEmail") ;
const save = document.getElementById("save");


const my =new Headers();
my.append('Content-Type', 'application/json');

save.addEventListener("click" , ()=>{
var obj = { }; 

const save1 = document.getElementById("savePage1");

save1.addEventListener("click" , ()=>{
console.log("hi");
var  v = venue.value  , 
   e= email.value , 
   p = phone.value  ; 

   obj = {
    venue : v , 
    phone : p  ,  
    email : e
} ; 
   console.log( obj ); 
   save1.innerHTML = ' <a href ="../contacts/contacts.html">' + '<button class="save"  id="savePage1"> Save </button></a>' ; 

});
//  function renderPage1 (){
//      r = '<div class="card">'+
//     '<img class="contact-img" src="../images/IMG12.jpg" alt="Avatar">' +
//      '<div class="container">'+
//          '<h4><b>Our Contacts</b></h4>'+
//          '<p>Num Phon</p>'+
//              '<button class="button"  id="delete1"><strong>DELETE</strong></button>'+
//      '</div><br></div>'; 

//      card1.innerHTML += r ; 
//  }\

const e1 =  document.getElementById('error1') ;
const e2 =  document.getElementById('error2') ;
const e3 =  document.getElementById('error3') ;
const venue =  document.getElementById("inputVenue" ) ;
const phone =  document.getElementById("inputPhone") ;
const email =  document.getElementById("inputEmail") ;


const my =new Headers();
my.append('Content-Type', 'application/json');

var obj = { }; 

const save1 = document.getElementById("savePage1");

save1.addEventListener("keydown",function(e){
  if(e.key==="Enter"){
    main();
  } });

save1.addEventListener("click" , main());


function main(){
console.log("hi");
var  v = venue.value  , 
   e= email.value , 
   p = phone.value  ; 

fetch('http://localhost:6500/contactPage1',{
  method:'POST',
  headers : my , 
  body:JSON.stringify({
    venue : v , 
    phone : p  ,  
    email : e 
   })
}).then( response=>response.json()) .then((data) => { obj = data ; console.log(data); });
   
   console.log( obj );
  // save1.innerHTML = ' <a href ="../contacts/contacts.html">' + '<button class="save"  id="savePage1"> Save </button></a>' ; 
//   window.location.assign("../contacts/contacts.html") ;
  
}
