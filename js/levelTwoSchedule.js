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

`<div class="row">

<div class="schedule-post" id="day">
	<input type="button" onclick="removeDay(this)" id="deleteDay">
	<input type="button" onclick="addEvent()" id="edit"><br>
	<div class="schedule-content">
		<h3 id="show">Wednesday 12/18</h3>
		<hr>
		<img src="../images/2.png" alt="" id="break">
		<h5>10:00 AM</h5>
		<h6>Sport</h6>
		<hr>
		<img src="../images/2.png" alt="" id="break">
		<h5>11:00 AM</h5>
		<h6>Flying</h6>
		<hr>
		<img src="../images/2.png" alt="" id="break">
		<h5>11:45 AM</h5>
		<h6>Braek</h6>
		<hr>
		<img src="../images/2.png" alt="" id="break">
		<h5>12:00 AM</h5>
		<h6>Break 4 ever</h6>
		<hr>

	</div>
</div>

`