

const myHeader =new Headers();
myHeader.append('Content-Type', 'application/json');
const save = document.getElementById('save').addEventListener('click', eventFactory);

function eventFactory(){
	const title = document.getElementById('datetime');
	const time = document.getElementById('title');
	const dayId = document.getElementById('dayId');

	 fetch('http://localhost:3000/eventInf',{
	  method:'POST',
	  headers : myHeader , 
	  body:JSON.stringify({
		  		time :  time.value,
				title :  title.value, 
				day_id :  dayId.value

	   })
	}).then( response=>response.json())
	  .then((data) => {
		console.log(data); 
	}); 
	};