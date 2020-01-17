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

let days = [];
const myheader = new Headers();
myheader.append('Content-Type', 'application/json');
///////////// GET METHOD ///////////
fetch('http://localhost:3000/day', {
		method: 'GET',
		headers: myheader
	}).then(response => response.json())
	  .then((data) => {
		days = data;
		
		render(days);
	});

function render(days) {
	const html = days.map(day => {
		const eventsHtml = day.events.map(event => {
			return `
				<img src="" alt="" id="break"> 
				<h5>${event.time}</h5> 
				<h6>${event.title}</h6>
			`;
		});

		return `
			<div class="row"> 
				<div class="schedule-post"> 
					<input type="button" onclick="removeDay(this)" id="deleteDay"> 
					<input type="button" onclick="addEvent()" id="edit"><br> 
					<div class="schedule-content"> 
						<h3 id="show">${day.date}</h3> 
						<hr> 
						<div>
							${eventsHtml.join('')}
						</div>
					</div> 
				</div> 
			</div>
		`;
	});

	document.getElementById('schedule').innerHTML = html.join('');
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







//let obj = {}
//fetch('http://localhost:3000/eventInf', {
//		method: 'GET',
//		headers: myheader
//	}).then(response => response.json())
//	.then((data) => {
//		obj = data;
//		obj.forEach(yy => {
//			render(yy)
//		});
//	});
