function levelTwo() {
			location.replace("../justInCaseschadule/createDay.html");
}

function addEvent() {
			location.replace("../schedules/addEvent.html");
}
// hamza trash>>> here for deleting the current day from shcedule, data base get and delete method.
function removeDay() {
	 var day = document.getElementById('day');
    day.remove();
}