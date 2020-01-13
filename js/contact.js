let  rr ="" , arr =[] , i ; 
 const  card2 =  document.getElementById("newMain");

const my =new Headers();
my.append('Content-Type', 'application/json');

    fetch('http://localhost:3000/contact',{
        method:'GET', 
        headers : my }) 
        .then( res => res.json())  .then((data) => { 
            arr = data ; 
            // console.log(data) ; 
                render(); 
        });
    
function render(){
      rr="";
      arr.forEach((o,j)=>{ if( o.id == i){arr.splice(j,1); }});

           arr.forEach(a=> {
rr +='<div class="maincard">' +
'<img class="img2" src="../images/alcont.png" alt="Avatar">' +
'<div class="container">' +
'<h4><b>'+ a.name + '</b></h4>' +
'<p ><b>'+ a.position+'</b></p><b>' +a.mobile + "/"+ a.email+
'</b><button class="button"  onclick="del(event)"  ><strong  id ="'+ a.id +'" >DELETE</strong></button>' +
'<br></div><br></div>' ;  });
            card2.innerHTML = rr ;
        
        }

        function del(event){
             i = event.target.getAttribute('id') ;
            console.log(i);

             fetch('http://localhost:3000/contact/' ,{
                method:'DELETE'
               , headers : my  
                , body:JSON.stringify({
                    id : i })
                 })
                .then( res => res.json())
                .then(data => {  
                    console.log("done");
               card2.innerHTML = "" ;
                render(); 
             });
                }  