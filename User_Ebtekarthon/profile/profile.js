url = window.location.href ; 
console.log(getParameterByName("id",url));
function getParameterByName(name, url) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
var s = document.getElementById('section');

let id = getParameterByName("id",url);
let name =getParameterByName("name",url);

console.log(id , name);
const my = new Headers();
my.append('Content-Type', 'application/json');
if(name=="speaker"){
fetch('http://localhost:3000/speaker/'+id, {
		method: 'GET',
		headers: my
	}).then(response => response.json())
	.then((data) => {
		days = data;
console.log(data);
		render(days);
    });
}
if(name=="juries"){
    fetch('http://localhost:3000/juries/'+id, {
		method: 'GET',
		headers: my
	}).then(response => response.json())
	.then((data) => {
		days = data;
console.log(data);
		render(days);
    });
}
   function render(arr){
        console.log(arr);
let html = "";
html = '<div class="img"><img src="http://localhost:3000'+arr[0].img+'">'+
'<p id="name">'+arr[0].name+'</p>'+
'<p id="position">'+arr[0].position+'</p></div>'+
'<div class="des">'+
'<p id="des">'+arr[0].bio+'</p><hr><p id="email"><a href="http://localhost:3000'+arr[0].email+'">'+arr[0].email+'</a></p></div>' ; 
s.innerHTML=html ; 
    }
