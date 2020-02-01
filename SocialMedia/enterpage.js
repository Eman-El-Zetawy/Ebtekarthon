function socialM() {
	location.replace("../SocialMedia/socialmedia.html");
}

const my =new Headers();
my.append('Content-Type', 'application/json');

const name =  document.getElementById("name") ,
ero = document.getElementById('error') ;
const typeSocial=  document.getElementById("typeSocial") ;
let type ="";

const save = document.getElementById("save");

save.addEventListener("click" ,main) ; 

function main(){
console.log(name.value , typeSocial.value);
 let l = typeSocial.value ;
 if(l==1){ type = "facebook.png"} 
 if(l==2){ type = "youtube.jpeg"}  
 if(l==3){ type = "twitter.jpeg"}
 if(l==4){ type = "insta.jpeg"}

 if(!validator.isEmpty(name.value) && (l==1 || l==2 ||l==3 ||l==4)){
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
 socialM();
  
}); 
 }
 else {
  ero.innerHTML = "Please, Enter the information correctly . It is empty . " ;
 }

};