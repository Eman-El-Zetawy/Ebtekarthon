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

   obj = {
    venue : v , 
    phone : p  ,  
    email : e
} ; 

fetch('http://localhost:6600/contactp',{
    method:'GET', 
    headers : my })  .then( res => res.json())  .then((data) => {a=data;  draw(a) ; });

   console.log( obj );
  // save1.innerHTML = ' <a href ="../contacts/contacts.html">' + '<button class="save"  id="savePage1"> Save </button></a>' ; 
//   window.location.assign("../contacts/contacts.html") ;
  
}
