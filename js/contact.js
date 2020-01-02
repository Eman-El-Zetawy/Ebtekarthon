let  rr =""; 
 const add2  = document.getElementById("add2");
 const  card2 =  document.getElementById("newMain");

const my =new Headers();
my.append('Content-Type', 'application/json');

    fetch('http://localhost:3000/contact',{
        method:'GET', 
        headers : my })  .then( res => res.json())  .then((data) => { 
            console.log(data) ; 
            render(data); });
    
function render (a){
    rr='<div class="maincard">' +
        '<img class="img2" src="../images/alcont.png" alt="Avatar">' +
        '<div class="container">' +
            '<h4><b>The Contact is </b></h4>' +
            '<p >'+ a.name +'</p>' +
                '<button class="button"  id="delete" onclick="del (event)"  ><strong>DELETE</strong></button>' +
            '<br></div><br></div>' ;
            card2.innerHTML += rr ; 
        }

        // document.getElementById("delete").addEventListener("click" , ()=>{

        function del (event){
            const i = event.target.getAttribute('') ;
            
             fetch('http://localhost:3000/contact/',{
                method:'DELETE',
                headers : my , 
                body:JSON.stringify({
                    id : i
                })
                })
                .then( res => res.json())
                .then(data => {  draw(z);
                console.log("done  delete"  );  
});
        }

// // // var a =[] ,c=[] ,  l="" , h ="";
//  const b = ["name" , "position" ,"mobile" , "email" ] ;





