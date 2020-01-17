function socialM() {
	location.replace("../SocialMedia/socialmedia.html");
}

const my =new Headers();
my.append('Content-Type', 'application/json');

const name =  document.getElementById("name") ;
const typeSocial=  document.getElementById("typeSocial") ;
let type ="";

const save = document.getElementById("save");

save.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
      main();
    } });
save.addEventListener("click" ,main) ; 

function main(){
console.log(name.value , typeSocial.value);
 let l = typeSocial.value ;

 if(l==0){ type = "null"}
 if(l==1){ type = "Facebook"}
 if(l==2){ type = "YouTube"}
 if(l==3){ type = "Twitter"}
 if(l==4){ type = "Instagram"}


 fetch('http://localhost:3000/socialMedia',{
  method:'POST',
  headers : my , 
  body:JSON.stringify({
         wsite :  name.value, 
         idEbte : "1" ,
           img : type
   })
}).then( response=>response.json()).then((data) => {
    console.log(data); 
// socialM();
  
});  
};