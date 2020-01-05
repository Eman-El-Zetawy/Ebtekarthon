const venue =  document.getElementById("inputVenue" ) ;
const phone =  document.getElementById("inputPhone") ;
const email =  document.getElementById("inputEmail") ;
const save = document.getElementById("save");

const my =new Headers();
my.append('Content-Type', 'application/json');

save.addEventListener("keydown",function(e){
  if(e.key==="Enter"){
    main();
  } });

save.addEventListener("click" , main);

console.log( venue.value,phone.value ,email.value);
function main(){

fetch('http://localhost:3000/venue/1',{
  method:'PUT',
  headers : my , 
  body:JSON.stringify({
    venue : venue.value, 
    phone : phone.value , 
    email :email.value
   })
}).then( response=>response.json()) .then((data) => { obj = data ; console.log(data); });
}
