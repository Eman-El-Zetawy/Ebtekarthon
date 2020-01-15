let  rr ="" , arr =[]; 
 const add2  = document.getElementById("add2");
 const  card2 =  document.getElementById("newMain");

const my =new Headers();
my.append('Content-Type', 'application/json');

    fetch('http://localhost:3000/contact',{
        method:'GET', 
        headers : my })  .then( res => res.json())  .then((data) => { 
            arr = data ; 
            console.log(data) ; 
            arr.forEach(obj=> {
                 render(obj); 
            });
           
        });
    
function render (a){

    rr='<div class="maincard">' +
        '<img class="img2" src="../images/alcont.png" alt="Avatar">' +
        '<div class="container">' +
            '<h4><b>The Contact is </b></h4>' +
            '<p >'+ a.name +a.position  +a.mobile + a.email+'</p>' +
                '<button class="button"  id="'+ a.id +'"  onclick="del(event)"  ><strong>DELETE</strong></button>' +
            '<br></div><br></div>' ;
            card2.innerHTML += rr ; 
        }

        // document.getElementById("delete").addEventListener("click" , ()=>{

        function del (event){
            const i = event.target.getAttribute('id') ;

             fetch('http://localhost:3000/contact/'+i ,{
                method:'DELETE',
                headers : my 
                })
                .then( res => res.json())
                .then(data => {  
                console.log("done  delete"  );  
                // card2.innerHTML = "" ;
});
        }

// // // var a =[] ,c=[] ,  l="" , h ="";
//  const b = ["name" , "position" ,"mobile" , "email" ] ;





