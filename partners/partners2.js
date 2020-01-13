
let  rr ="" , arr=[], i ; 
 const  create =  document.getElementById("create");


const my = new Headers();
my.append('Content-Type', 'application/json');

    fetch('http://localhost:3000/partners',{
        method:'GET', 
        headers : my })  .then( res => res.json())  .then((data) => { 
            console.log(data) ; 
            arr=data;
                render(); 
        });
     
           

function render (){ 
    rr="";
       arr.forEach((o,j)=>{ if( o.id == i){arr.splice(j,1); }});
    arr.forEach(a=> {
    rr +=' <div class="card"><img  src="../images/5.png" alt=""   class = "imgc"><div class="container">'+
           '<h4><b>'+a.wsite+'</b></h4><br>'+
                '<button class="button"  id="delete" onclick="del(event)"><strong id="'+a.id+'">DELETE</strong></button>'+
                '</div>' + '</div>' ; }); 
            create.innerHTML = rr ; 
        }



        function del (event){
            
            i = event.target.getAttribute('id') ;
         
             fetch('http://localhost:3000/partners/',{
                method:'DELETE',
                headers : my , 
                body:JSON.stringify({
                    id : i })
                })
                .then( res => res.json())
                .then(data => { 
                console.log("done delete"); 
                create.innerHTML = "" ;
                    render(); }); }