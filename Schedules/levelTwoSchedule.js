const myHeader =new Headers();
myHeader.append('Content-Type', 'application/json');

const save = document.getElementById('save').addEventListener('click', dayFactory);
const ero =document.getElementById("error");

function dayFactory(){
	const title = document.getElementById('title'); 
if(!validator.isEmpty(title.value)){


	 fetch('http://localhost:3000/day',{
	  method:'POST',
	  headers : myHeader , 
	  body:JSON.stringify({
				day_date :  title.value, 
				ebt_id :    "1"

	   })
	}).then( response=>response.json())
	  .then((data) => {
		console.log(data); 
window.location = "../Schedules/addEvent.html?id="+data.id;
	}); }
	else {
		ero.innerHTML="Please, Enter the information correctly . It is empty . " ;

	}
	};
	