function levelTwo() {
			location.replace("../justInCaseschadule/createDay.html");
}

function addEvent() {
			location.replace("../schedules/addEvent.html");
}
// function removeDay() {
// 	 var day = document.getElementById('day');
//     day.remove();
// }
let str = "";
const day = document.getElementById('day');
const myheader = new Headers();
myheader.append('Content-Type', 'application/json');
fetch('http://localhost:3000/day', {
	method: 'GET',
	headers: myheader
}).then(response => response.json())
  .then((data) => {
	console.log(data);
	render(data);
});

function render(ff) {
	str=
	'<div class="schedule-post">'+
				
				'<input type="button" onclick="delet()" id="deleteDay">'+
				'<input type="button" onclick="addEvent()" id="edit"><br>'+
				'<div class="schedule-content">'+
					'<h3 id="show">'+ff.day_date+'</h3>'+
					'<hr>'+
				'</div>'+
			
			'</div>'
	;
	day.innerHTML += str;
}

 function delet(){
	var day = document.getElementById('day');
	    day.remove();
             fetch('http://localhost:3000/day',{
                method:'DELETE',
                headers : myheader , 
                body:JSON.stringify({
                    id : day
                })
                })
                .then( res => res.json())
                .then(data => {  
                console.log(`jhvjhv ${data}`);  
});
        }




















//const add = document.getElementById('add').addEventListener('click', render);

//function levelTwo() {
//			location.replace("../justInCaseschadule/createDay.html");
//}
//
//function addEvent() {
//			location.replace("../schedules/addEvent.html");
//}
//function removeDay() {
//	 var day = document.getElementById('day');
//    day.remove();
//}
//const str = "";
//const day = document.getElementById('day')
////const myheader = new Headers();
////
////myheader.append('Content-Type', 'application/json');
////fetch('http://localhost:3000/day', {
////	method: 'GET',
////	headers: myheader
////}).then(res => res.json())
////  .then((data) => {
////	console.log(data);
////	render(data);
////});
//render();
////const add = document.getElementById('add').addEventListener('click', render);
//
//function render() {
//	`<div class="schedule-post" id="day">`+
//				`<input type="button" onclick="removeDay(this)" id="deleteDay">`+
//				`<input type="button" onclick="addEvent()" id="edit"><br>`+
//				`<div class="schedule-content">`+
//					`<h3 id="show">Wednesday 12/18</h3>`+
//					`<hr>`+
//					`<img src="../images/2.png" alt="" id="break">`+
//					`<h5>10:00 AM</h5>`+
//					`<h6>Sport</h6>`+
//					`<hr>`+
//					`<img src="../images/2.png" alt="" id="break">`+
//					`<h5>11:00 AM</h5>`+
//				`</div>`+
//			`</div>`;
//	day.innerHTML += str;
//}
//
