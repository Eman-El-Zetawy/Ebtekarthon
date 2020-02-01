document.getElementById('buttonSave').addEventListener('click', add);
let token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");;
console.log(token);
rendercontINF();
 const l = document.getElementById('location'),
            e = document.getElementById('email'),
            p= document.getElementById('phone')
            ero = document.getElementById('error') ;
 function add() {
    const location = l.value,
    email = e.value,
    phone = p.value ;
   

        
     const myheader = new Headers();
     myheader.append('Content-Type', 'application/json');
     myheader.append('Authorization', `Bearer ${token}`);
     
     if(!validator.isEmpty(location)&&validator.isEmail(email)&& !validator.isEmpty(phone)){
     fetch('http://localhost:3000/contINF', {
             method: 'PUT',
             headers: myheader,
             body: JSON.stringify({
                 location, 
                 phone,
                 email
             })
         })
         .then(response => response)
         .then((data) => {
             console.log(data);

     rendercontINF();
             ero.innerHTML = "Successfully Done";
             })
}else if(validator.isEmpty(location)|| validator.isEmpty(phone)){
    ero.innerHTML = "Please, Enter the information correctly . It is empty . " ; 
}else if(!validator.isEmail(email)){
    ero.innerHTML="Please, Enter the Email correctly .";
}
            
        
 }
 function rendercontINF(){
    
    const myheader = new Headers();
    myheader.append('Content-Type', 'application/json');
    myheader.append('Authorization', `Bearer ${token}`);
    fetch('http://localhost:3000/contINF', {
            method: 'GET',
            headers: myheader
        })
        .then(response => response.json())
        .then((data) => {
        console.log(data[0]);
        l.value = data[0].location ;
        console.log(data[0].location);
        p.value =data[0].numphone ;
        e.value =data[0].email ;
        

        });
        
 }