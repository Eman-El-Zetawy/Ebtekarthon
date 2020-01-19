function levelTwo() {
	location.replace("../schedules/schedules.html");
	}

function saveDay() {
		location.replace("../schedules/schedules.html");
	}
const myHeader =new Headers();
myHeader.append('Content-Type', 'application/json');
const save = document.getElementById('save').addEventListener('click', dayFactory);

function dayFactory(){
	const title = document.getElementById('title');
	const season = document.getElementById('season');

	 fetch('http://localhost:3000/day',{
	  method:'POST',
	  headers : myHeader , 
	  body:JSON.stringify({
				day_date :  title.value, 
				ebt_id :  season.value 

	   })
	}).then( response=>response.json())
	  .then((data) => {
		console.log(data); 
	}); 
	};