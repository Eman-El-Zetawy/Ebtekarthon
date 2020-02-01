
let days = [];
const myheader = new Headers();
myheader.append('Content-Type', 'application/json');

///////////// GET METHOD ///////////
get();
function get (){
	fetch('http://localhost:3000/day', {
		method: 'GET',
		headers: myheader
	}).then(response => response.json())
	.then((data) => {
		days = data;
console.log(data);
		render(days);
	});}

function render(arr) {
console.log(arr);
let z=0, day="" ;

   arr.map((obj,i)=>{
	   if(obj.event_id==null){
		console.log(obj.id);
        removeday(obj.id);
	}
     else  if(obj.event_id !==null){
	 
	if(z !==obj.id){
		if(z !==0){day +='</div></div></div>';}
		day +='<div class="post" data-id="'+obj.id+'">'+
		'<input type="button" id="edit"  onclick="addEventOfDay(event.target)">'+
		'<div class="schedule-content"><h3 id="show"  >'+obj.day_date+'</h3><hr><div>';
			z = obj.id ;
	
}	if(obj.title ==="Break!" || obj.title=="Lunch Break!"){
	day +='<div class="i" event-id="'+obj.event_id +'">'+
	'<img src="../images/green.jpeg" alt="" id="break" style="width: 40px;"><input type="button" id="'+obj.event_id +'" class="deleteEvent" onclick="removeEvent(this.id)" ><h5>'+
	obj.time +'</h5><h6 class="h6">'+obj.title +'</h6><hr></div>' ;
}
else {

		day +='<div class="i" event-id="'+obj.event_id +'">'+
		'<img src="../images/m1.jpg" alt="" id="break" ><input type="button" id="'+obj.event_id +'" class="deleteEvent" onclick="removeEvent(this.id)" ><h5>'+
		obj.time +'</h5><h6 class="h6">'+obj.title +'</h6><hr></div>' ;
	
}
	}	
});
day +='</div></div></div>';

	document.getElementById('schedule').innerHTML = day;
	
}


function removeEvent(id) {
	let i = id;
	const myheader = new Headers();
myheader.append('Content-Type', 'application/json');
	fetch('http://localhost:3000/eventInf/', {
			method: 'DELETE',
			headers: myheader,
			body: JSON.stringify({
				id: i
			})
		}).then(res =>res.json())
		.then(data => {
			console.log("done  delete");
		get();
 
		})
}

function removeday(id) {
	let i = id;
	const myheader = new Headers();
     myheader.append('Content-Type', 'application/json');
	fetch('http://localhost:3000/day/', {
			method: 'DELETE',
			headers: myheader,
			body: JSON.stringify({
				id: i
			})
		}).then(res =>res.json())
		.then(data => {
console.log(data);
console.log("done  delete");
days.map((item, index) => {
	if (item.id == id) {
		days.splice(index, 1);
	}
});
render(days);
		})
}
function addEventOfDay(trg){
	console.log(trg);
	let id=trg.parentElement.getAttribute("data-id");
	console.log(id);
	window.location = "../Schedules/addEvent.html?id="+id;
  }
