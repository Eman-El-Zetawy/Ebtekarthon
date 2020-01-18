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
		const eventsHtml = day.events.map((event,index) => {
//			var ti = event.time;
//			var il = event.title;
//				for(var i =0; i<ti.length; i++) {
//					if(ti[index] === null){
//						document.write = "ddddddd"
//					}
//				}
			return `
				<img src="../images/m1.jpg" alt="" id="break"> 
				<h5>${event.time}</h5> 
				<h6>${event.title}</h6><hr>
				<hr>
			`;
		});
		return `
			
				<div class="schedule-post"> 
					
					<input type="button"  class="deleteDay">
					<input type="button" onclick="addEvent()" id="edit"><br> 
					<div class="schedule-content"> 
						<h3 id="show"  data-id="'${day.id}'">${day.date}</h3> 
						<hr> 
						<div>
							${eventsHtml.join('')}
						</div>
					</div>  
			</div>
		`;
	});
	
			
	document.getElementById('schedule').innerHTML = html.join('');
	let dele=document.getElementsByClassName("deleteDay");
	for(let i=0;i<dele.length;i++){
  dele[i].addEventListener("click",e=>{
    deleteDay(e.target)
  })
}
}









function deleteDay(yy) {
	 let id =yy.parentElement.getAttribute("data-id");
  
 yy.parentElement.remove();
	const myheader = new Headers();
myheader.append('Content-Type', 'application/json');
		fetch('http://localhost:3000/day/:id',
  		{
    method:'DELETE',
     headers:myheader,
     body:JSON.stringify({
       id:id
     })
}).then(res =>
      res.text())
      .then( data =>{ console.log(data);

  })
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
