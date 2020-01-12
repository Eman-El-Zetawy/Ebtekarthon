<<<<<<< HEAD
let rr = "";
const add = document.getElementById("add");
const create = document.getElementById("create");
=======
let  rr ="" , arr=[]; 
 const add = document.getElementById("add");
 const  create =  document.getElementById("create");
>>>>>>> 7e1251974d1bfa82b78b652ced7a8d7a71934f80

const my = new Headers();
my.append('Content-Type', 'application/json');
<<<<<<< HEAD
fetch('http://localhost:3000/partners', {
	method: 'GET',
	headers: my
}).then(res => res.json()).then((data) => {
	console.log(data);
	render(data);
=======

    fetch('http://localhost:3000/partners',{
        method:'GET', 
        headers : my })  .then( res => res.json())  .then((data) => { 
            arr=[];
            console.log(data) ; 
            arr=data;
            arr.forEach(obj=> {
                render(obj); 
           });
        });
     
           

function render (a){
    rr=' <div class="card"><img  src="../images/5.png" alt=""   class = "imgc"><div class="container">'+
           '<h4><b>'+a.wsite+'</b></h4><br>'+
                '<button class="button"  id="delete" onclick="del(event)"><strong mm='+a.id+'>DELETE</strong></button>'+
                '</div>' + '</div>' ;
            create.innerHTML += rr ; 
        }


        // document.getElementById("delete").addEventListener("click" , ()=>{

        function del (event){
            // create.innerHTML ="";
            let l =[];
            const i = event.target.getAttribute('mm') ;
            l.push(i);
            arr.forEach((o,j)=>{ if( o.id == i){arr.splice(j,1); }});

             fetch('http://localhost:3000/partners/',{
                method:'DELETE',
                headers : my , 
                body:JSON.stringify({
                    id : l
                })
                })
                .then( res => res.json())
                .then(data => { 
                console.log("done delete"); 
                create.innerHTML = "" ;
                arr.forEach(obj=> {
                    render(obj); 
               }); 
>>>>>>> 7e1251974d1bfa82b78b652ced7a8d7a71934f80
});

render();

function render() {
	rr = ' <div class="card"><img  src="../images/5.png" alt=""   class = "imgc"><div class="container">' +
		'<h4><b>The Partner Name is</b></h4><br>' +
		'<button class="button"  id="delete" onclick="del(event)"><strong>DELETE</strong></button>' +
		'</div>' + '</div>';
	create.innerHTML += rr;
}


// document.getElementById("delete").addEventListener("click" , ()=>{

function del(event) {
	create.innerHTML = "";
	const i = event.target.getAttribute('');

	fetch('http://localhost:3000/partners/', {
			method: 'DELETE',
			headers: my,
			body: JSON.stringify({
				id: i
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log("done delete");
		});
}
