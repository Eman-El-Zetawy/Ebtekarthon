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
  // save1.innerHTML = ' <a href ="../contacts/contacts.html">' + '<button class="save"  id="savePage1"> Save </button></a>' ; 
//   window.location.assign("../contacts/contacts.html") ;
  
});
