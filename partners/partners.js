function partners() {
	location.replace("../partners/partners.html");
}

document.getElementById('imgInp').addEventListener('click', () => {
	document.getElementById('fileInput').click()
})

function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			document.getElementById("imgInp").setAttribute('src', e.target.result);
		}
		reader.readAsDataURL(input.files[0]);
	}
}
document.getElementById("imgInp").addEventListener("change", function () {
	readURL(this);
});
const my = new Headers();
my.append('Content-Type', 'application/json');

var save = document.getElementById("save");
const wsite = document.getElementById("name");

save.addEventListener("keydown", function (e) {
	if (e.key === "Enter") {
		main();
	}
});


save.addEventListener("click" ,main) ; 

function main( ){
 fetch('http://localhost:3000/partners',{
  method:'POST',
  headers : my , 
  body:JSON.stringify({
            img : "test",
            wsite :  wsite.value
        
   })
}).then( response=>response.json()).then((data) => {
    console.log(data);
  partners() ;

});
}
