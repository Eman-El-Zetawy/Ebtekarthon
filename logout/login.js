
const users=[];

function header() {
			const email = document.getElementById('email').value,
			password = document.getElementById('password').value;
			const user = {
				email,
				password
			};
			console.log(user);
			const myHeaderS = new Headers();
			myHeaderS.append('Content-Type', 'application/json');
			if(!validator.isEmpty(email)&&!validator.isEmpty(password)){

			fetch('http://localhost:3000/users/login', {
				method: 'POST',
				headers: myHeaderS,
				body: JSON.stringify(user)
			})
			 .then (response => response.json())
			.then(data =>{
				console.log(data);
				if  (data == "400"){
					document.getElementById('error').innerHTML = `<p> Incorrect Username and/or Password!</p>`
				}else{
				document.cookie =`token=${data.token} ;path=/`;
				window.location.replace("http://127.0.0.1:5500/Ebtekarthon/headerLogo/headerlogo.html");
				}
		}); }
		else{
			document.getElementById('error').innerHTML =  "Please, Enter the information correctly . It is empty . ";
			
		}
		
		};
		


function adduser (){
	const username = document.getElementById('username').value,
	email = document.getElementById('email').value,
	password = document.getElementById('password').value;
	const user = {
		username ,
		email,
		password,
	};
	console.log(user);
	const myHeaderS = new Headers();
	myHeaderS.append('Content-Type', 'application/json');
	if(!validator.isEmpty(username)&&!validator.isEmpty(email)&&!validator.isEmpty(password)){
			
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: myHeaderS,
        body: JSON.stringify(user)
    })
     .then (response => response)
	.then(data => {console.log(data)
		document.getElementById('error').innerHTML =  "Successfully Done" ; 
	} );
}
else{
	document.getElementById('error').innerHTML =  "Please, Enter the information correctly . It is empty . ";
			
}
};

// function sendmasg(){
// 	const myHeaderS = new Headers();
// 	myHeaderS.append('Content-Type', 'application/json');
//     fetch('http://localhost:3000/api/sendemail/', {
//         method: 'POST',
//         headers: myHeaderS,
//         body: JSON.stringify({
// 			id :"hi"
// 		})
//     })
//      .then (response => response)
//     .then(data => console.log(data) );
// }
 
// Email.send({
//     Host : "http://127.0.0.1:5500/",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
