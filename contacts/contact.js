let  arr =[] , i ; 
 const  card2 =  document.getElementById("newMain") ;
const my =new Headers();
my.append('Content-Type', 'application/json');
    fetch('http://localhost:3000/contact',{
        method:'GET', 
        headers : my }) 
        .then( res => res.json())  .then((data) => { 
            arr = data ; 
            console.log(data) ; 
              render(); 
        });
    
function render(){
     let rr ="";
      arr.forEach((o,j)=>{ if( o.id == i){arr.splice(j,1); }});
      console.log(arr);
           arr.forEach(a=> { 
rr +='<a href="#"><div class="maincard">' +
'<img class="img2" src="../images/alcont.png" alt="Avatar">' +
'<div class="container">' +
'<b> Name : '+ a.name + '</b><br>' +
'<b> Position : '+ a.position+'</b><br><b> Mobile : ' +a.mobile + "</b><br><b>Email : "+ a.email+
'</b><button class="button" id ="'+ a.id +'"  onclick="del(this.id)"  ><strong>DELETE</strong></button>' +
'<br></div><br></div></a>' ;  
});
         card2.innerHTML = rr ;
        
        }
        function del(id){
           i=id;
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