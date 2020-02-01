const idBreak = document.getElementById("Break!"),
	   idLunch = document.getElementById("Lunch Break!") ,
	   idEvent =document.getElementById("event"),
	   data=document.getElementById("data"),
	   save = document.getElementById('save');
const e1=document.getElementById("e1");

	   url = window.location.href ; 
	   console.log(getParameterByName("id",url));
	   function getParameterByName(name, url) {
		   name = name.replace(/[\[\]]/g, '\\$&');
		   var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			   results = regex.exec(url);
		   if (!results) return null;
		   if (!results[2]) return '';
		   return decodeURIComponent(results[2].replace(/\+/g, ' '));
	   }

	   const myheader = new Headers();
	   myheader.append('Content-Type', 'application/json');

idBreak.addEventListener("click",()=>{
data.innerHTML='<input class="input" type="text" placeholder="12:45 PM" id="datetime">'+
'<input type="button" value ="Break!" id="title" class="input">';
save.style ="display:block;";
console.log(document.getElementById("title").value);
});

idLunch.addEventListener("click",()=>{
	data.innerHTML='<input  type="text" placeholder="12:45 PM" id="datetime" class="input">'+
	'<input type="button" value ="Lunch Break!" id="title" class="input">';
	console.log(document.getElementById("title").value);
	save.style ="display:block;";
	});

	idEvent.addEventListener("click",()=>{
		data.innerHTML='<input type="text" placeholder="12:45 PM" id="datetime" class="input">'+
		'<input type="text" placeholder="Title" id="title" class="input">';
		save.style ="display:block;";
		});


       save.addEventListener('click', eventFactory);

function eventFactory(){
	const datetime = document.getElementById('datetime');
	const title = document.getElementById('title');


   let id = getParameterByName("id",url);
   console.log(id);
   if(!validator.isEmpty(datetime.value)&&!validator.isEmpty(title.value)){

   
	 fetch('http://localhost:3000/eventInf',{
	  method:'POST',
	  headers : myheader , 
	  body:JSON.stringify({
		  		time :  datetime.value,
				title :  title.value ,
			      day_id :  id

	   })
	}).then( response=>response.json())
	  .then((data) => {
		console.log(data); 
		window.location ="../Schedules/schedules.html";
	}); 
	}
	else {
e1.innerHTML = "Please, Enter the information correctly . It is empty . " ;
	}
	};