const e1 =  document.getElementById('error1') ;
const e2 =  document.getElementById('error2') ;
const e3 =  document.getElementById('error3') ;

const title =  document.getElementById("inputTitle") ;
const text =  document.getElementById("textarea") ;
const vidoe =  document.getElementById("inputVidoe") ;

const save = document.getElementById("save");

const my =new Headers();
my.append('Content-Type', 'application/json');

var a =[];

fetch('http://localhost:3000/about',{
    method:'GET', 
    headers : my })  .then( res => res.json())  .then((data) => {a=data;  draw(a) ;});

    function draw (a){
 
        title.value = a[0].Title ;
        text.value = a[0].Text ;
        vidoe.value = a[0].url ;

    }
save.addEventListener("click" , ()=>{

    if(validator.isEmpty(title.value)){
      
        e1.innerHTML = "The Title is empty";
          a=false ;
    }
    else { a= true ;
    e1.innerHTML="";
}

    if(validator.isEmpty(text.value)){
        e2.innerHTML = "The Description is empty";
        b=false ;
    }
    else{
        b=true ;
        e2.innerHTML ="";
    }
    

    if(validator.isEmpty(vidoe.value)){
        e3.innerHTML = "The Vidoe is empty";
        c=false ;
    }
    else{
        c=true ; 
        e3.innerHTML ="";
    }

if(a&&b&&c){
    fetch('http://localhost:3000/about' ,{
        method:'PUT',
        headers : my , 
        body: JSON.stringify({
            id : 1 , 
            Title : title.value  ,
            Text :text.value ,
            url: vidoe.value 
        })
    }).then( response=>response.json()).then((data) => {
        console.log(data);
      console.log("done put") ;
     
    });
 }
});