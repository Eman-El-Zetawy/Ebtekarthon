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
'<h4><b>'+ a.name + '</b></h4>' +
'<p ><b>'+ a.position+'</b></p><b>' +a.mobile + a.email+
'</b><button class="button"  onclick="del(event)"  ><strong  mm ="'+ a.id +'" >DELETE</strong></button>' +
'<br></div><br></div>' ;
            console.log(a.id);
            card2.innerHTML += rr ; 
        }

      //  document.getElementById("delete").addEventListener("click" , del);

        function del(event){
           let l =[];
            let i = event.target.getAttribute('mm') ;
            l.push(i);
             arr.forEach((o,j)=>{ if( o.id == i){arr.splice(j,1); }});
            console.log(i);
             fetch('http://localhost:3000/contact/' ,{
                method:'DELETE',
                headers : my ,
                body:JSON.stringify({
                    id : l })
                })
                .then( res => res.json())
                .then(data => {  
                console.log("done  delete"  );  
                card2.innerHTML = "" ;
                arr.forEach(obj=> {
                    render(obj); 
               });
                // 
});
        }





