let  rr =""; 
 const add = document.getElementById("add");
 const  create =  document.getElementById("create");

const my =new Headers();
my.append('Content-Type', 'application/json');

    fetch('http://localhost:3000/partners',{
        method:'GET', 
        headers : my })  .then( res => res.json())  .then((data) => { 
            console.log(data) ; 
            render(data); });
     
            render() ; 

function render (){
    rr=' <div class="card"><img  src="../images/5.png" alt=""   class = "imgc"><div class="container">'+
           '<h4><b>The Partner Name is</b></h4><br>'+
                '<button class="button"  id="delete" onclick="del(event)"><strong>DELETE</strong></button>'+
                '</div>' + '</div>' ;
            create.innerHTML += rr ; 
        }


        // document.getElementById("delete").addEventListener("click" , ()=>{

        function del (event){
            create.innerHTML ="";
            const i = event.target.getAttribute('') ;
            
             fetch('http://localhost:3000/partners/',{
                method:'DELETE',
                headers : my , 
                body:JSON.stringify({
                    id : i
                })
                })
                .then( res => res.json())
                .then(data => { 
                console.log("done delete");  
});
        }






