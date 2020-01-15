function levelTwo() {
	location.replace("../schedules/schedules.html");
	}

function saveDay() {
		location.replace("../schedules/schedules.html");
	}
// hamza trash>>here after we set up the data base,& method post, the main page of schedule we get the result from here.
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

