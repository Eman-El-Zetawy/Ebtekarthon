function levelTwo() {
	location.replace("../justInCaseschadule/createDay.html");
}

function addEvent() {
	location.replace("../schedules/addEvent.html");
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
		const eventsHtml = day.events.map((event, index) => {
			return `
				<div class="i" event-id="${event.id}">
				<img src="../images/m1.jpg" alt="" id="break"> 
				<input type="button"  class="deleteEvent">
				<h5>${event.hour}</h5> 
				<h6>${event.title}</h6><hr>
				<hr>
				</div>
			`;
		});
		return `
			
				<div class="schedule-post" data-id="${day.id}"> 
					
					<input type="button"  class="deleteDay">
					<input type="button" onclick="addEvent()" id="edit"><br> 
					<div class="schedule-content"> 
						<h3 id="show"  >${day.date}</h3> 
						<hr> 
						<div>
							${eventsHtml.join('')}
						</div>
					</div>  
			</div>
		`;

	});


	document.getElementById('schedule').innerHTML = html.join('');
	let dele = document.getElementsByClassName("deleteDay");
	for (let i = 0; i < dele.length; i++) {
		dele[i].addEventListener("click", e => {
			deleteDay(e.target)
		})
	}
	let deleteEvent = document.getElementsByClassName("deleteEvent");
	for (let i = 0; i < deleteEvent.length; i++) {
		deleteEvent[i].addEventListener("click", z => {
					removeEvent(z.target)
			})}
	}
										
				function deleteDay(yy) {
					let id = yy.parentElement.getAttribute("data-id");
					const myheader = new Headers();
					myheader.append('Content-Type', 'application/json');
					fetch('http://localhost:3000/day', {
							method: 'DELETE',
							headers: myheader,
							body: JSON.stringify({
								id: id
							})
						}).then(res =>
							res.json())
						.then(data => {
							console.log(data);
							yy.parentElement.remove();
						})
				}
		
		
		
		
		
		function removeEvent(eve) {
					let id = eve.parentElement.getAttribute("event-id");
					const myheader = new Headers();
					myheader.append('Content-Type', 'application/json');
					fetch('http://localhost:3000/eventInf', {
							method: 'DELETE',
							headers: myheader,
							body: JSON.stringify({
								id: id
							})
						}).then(res =>
							res.json())
						.then(data => {
							eve.parentElement.remove();

						})
				}
