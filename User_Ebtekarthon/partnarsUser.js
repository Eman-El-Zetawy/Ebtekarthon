const my = new Headers();
my.append('Content-Type', 'application/json');
    fetch('http://localhost:3000/partners',{
        method:'GET', 
        headers : my })  .then( res => res.json())  .then((data) => { 
            console.log(data) ; 
            arr=data;
                render(); 
        });