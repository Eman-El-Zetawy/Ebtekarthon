let  arr =[] , i ; 
const add = document.getElementById("add"); 
const  card =  document.getElementById("newMain") ;
const my =new Headers();
my.append('Content-Type', 'application/json');
    fetch('http://localhost:3000/socialMedia',{
        method:'GET', 
        headers : my }) 
        .then( res => res.json())  .then((data) => { 
            arr = data ; 
            console.log(data) ; 
              render(); 
        });


function render(){
     let r ="";
      arr.forEach((o,j)=>{ if( o.id == i){arr.splice(j,1); }});
      console.log(arr);
           arr.forEach(a=> { 
r +='<a href="#"><div class="card">' + '<img src = "../images/'+a.img+'" alt="logo" class="logo"></img>'+
'<div class="container">' +
// '<b> Social Media  : '+ a.img + '</b><br>' +
'<b> Website  : '+ a.wsite+'</b><br><b>'+
'</b><button class="button" id ="'+ a.id +'"  onclick="del(this.id)"  ><strong>DELETE</strong></button>' +
'<br></div></div></a>' ;  
});
         card.innerHTML = r;
        
        }


        function del(id){
           i=id;
            console.log(i);
             fetch('http://localhost:3000/socialMedia/' ,{
                method:'DELETE'
               , headers : my  
                , body:JSON.stringify({
                    id : i })
                 })
                .then( res => res.json())
                .then(data => {  
                    console.log("done");
               card.innerHTML = "" ;
                render(); 
             });
                }  