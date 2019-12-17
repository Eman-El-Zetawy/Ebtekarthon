var e1 = document.getElementById('error1');
var e2 = document.getElementById('error2');
var e3 = document.getElementById('error3');
var e4 = document.getElementById('error4');

var title = document.getElementById ("inputTitle");
var location = document.getElementById ('inputLocation');
var date = document.getElementById ('inputDate');
 
var img = document.getElementById('img');

var buttonSave = document.getElementById("buttonSave");

const my =new Headers();
my.append('Content-Type', 'application/json');
var a =[];


fetch('http://localhost:6600/home',{
    method:'GET', 
    headers : my })  .then( res => res.json())  .then((data) => {a=data; console.log(a) ; draw(a) ;});

    function draw (a){
        title.value = a[0].title ;
        location.value = a[0].location ;
        date.value = a[0].date ;

    }
    
    buttonSave.addEventListener("click" , ()=>{
        alert("You sure "); 
    if(validator.isEmpty(title.value)){
        e2.innerHTML = "The Title is empty";
    }
    

    if(validator.isEmpty(location.value)){
        e3.innerHTML = "The location is empty";
    }
    

    if(validator.isEmpty(date.value)){
        e4.innerHTML = "The date is empty";
    }


    fetch('http://localhost:6600/home' ,{
        method:'PUT',
        headers : my , 
        body: JSON.stringify({
            id : 1 , 
            imge : 1 , 
            title : title.value  ,
            location:location.value ,
            date: date.value 
        })
    }).then( response=>response.json()).then((data) => {
        console.log(data);
      console.log("done put") ;
     
    });
});