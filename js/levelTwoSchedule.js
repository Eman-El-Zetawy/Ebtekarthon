function levelTwo() {
	location.replace("../schedules/schedules.html");
	}

function saveDay() {
		location.replace("../schedules/schedules.html");
	}

function day() {
	var str="";
	var createday = document.getElementById('dateDay').value;
   var show = document.getElementById('show');
	var newl= document.createElement('li');
	//if statement
	createday==''
	? alert('input is empty'):
	createday!==''
	 str= createday;
	 newl.textContent= str;
	 show.appendChild(newl);
}
const myHeader =new Headers();
myHeader.append('Content-Type', 'application/json');
const save = document.getElementById('save').addEventListener('click', dayFactory);

function dayFactory( ){
	const title = document.getElementById('title');
	const datetime = document.getElementById('datetime');
	 fetch('http://localhost:3000/addDay',{
	  method:'POST',
	  headers : myHeader , 
	  body:JSON.stringify({
				title :  title.value, 
				datetime: datetime.value
	   })
	}).then( response=>response.json())
	  .then((data) => {
		console.log(data); 
	}); 
	};

