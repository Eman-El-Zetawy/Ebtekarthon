var a1 = document.getElementById("a1") ;
var a2 = document.getElementById("a2") ;
var a3 = document.getElementById("a3") ;
var a4 = document.getElementById("a4") ;
var a5 = document.getElementById("a5") ;
var a6 = document.getElementById("a6") ;
var o1 = document.getElementById("o1") ;
var o2 = document.getElementById("o2") ;
var e1 = document.getElementById("e1") ;
var e2 = document.getElementById("e2") ;
var e3 = document.getElementById("e3") ;
var e4 = document.getElementById("e4") ;
var e5 = document.getElementById("e5") ;
var e6 = document.getElementById("e6") ;
var b1 = document.getElementById("b1") ;
var b2 = document.getElementById("b2") ;
var b3 = document.getElementById("b3") ;
var b4 = document.getElementById("b4") ;


o1.addEventListener("input" , function (){

    console.log(o1.value); 
})
b1.addEventListener( "click" , ()=>{
if(a1.value==''){
    e1.innerHTML = "the title  is empty "; 
}
if(a2.value==''){
    e2.innerHTML = " the month is empty "; 
}
if(a3.value==''){
    e3.innerHTML = " the time is empty "; 
}
if(a4.value==''){
    e4.innerHTML = " the title is empty "; 
}
if(a5.value==''){
    e5.innerHTML = " the icon is empty "; 
}



})
b2.addEventListener( "click" , ()=>{
    
})

b3.addEventListener( "click" , ()=>{
    
})
b4.addEventListener( "click" , ()=>{
    
})