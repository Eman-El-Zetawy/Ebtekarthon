function levelTwo() {
	location.replace("../justInCaseschadule/createDay.html");
}

function addEvent() {
	location.replace("../schedules/addEvent.html");
}
function removeDay() {
	 var day = document.getElementById('day');
    day.remove();
}
let array = {};
let str = "";
const day = document.getElementById('day');
const myheader = new Headers();
myheader.append('Content-Type', 'application/json');
///////////// GET METHOD ///////////
fetch('http://localhost:3000/day', {
		method: 'GET',
		headers: myheader
	}).then(response => response.json())
	.then((data) => {
		array = data;
		array.forEach(obj => {
			render(obj);
		});

	});

function render(key) {
	str = 
	    '<div class="row">'+
		'<div class="schedule-post">' +
		'<input type="button" onclick="removeDay(this)" id="deleteDay">' +
		'<input type="button" onclick="addEvent()" id="edit"><br>' +
		'<div class="schedule-content">' +
		'<h3 id="show">' + key.day_date + '</h3>' +
		'<hr>' +
		'<img src="" alt="" id="break">' +
		'<h5>' + key.time + '</h5>' +
		'<h6>' + key.title + '</h6>' +
		'<hr>'+
		'</div>' +
		'</div>' +
		'</div>';
	day.innerHTML += str;
}

function delet() {
	var day = document.getElementById('day');
	day.remove();
	fetch('http://localhost:3000/day', {
			method: 'DELETE',
			headers: myheader,
			body: JSON.stringify({
				id: day
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(`jhvjhv ${data}`);
		});
}
////////////////// event ////////
fetch('http://localhost:3000/eventInf', {
		method: 'GET',
		headers: myheader
	}).then(response => response.json())
	.then((data) => {
		arr = data;
		arr.forEach(yy => {
			render(yy)
		});
	});
