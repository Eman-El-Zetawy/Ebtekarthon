document.getElementById('buttonSave').addEventListener('click', add);
renderabout();
 function add() {
     const description = document.getElementById('description').value,
     vidoe = document.getElementById('vidoe').value ;
     const myheader = new Headers();
     myheader.append('Content-Type', 'application/json');
     fetch('http://localhost:3000/about', {
             method: 'PUT',
             headers: myheader,
             body: JSON.stringify({
                 description, 
                 vidoe
             })
         })
         .then(response => response)
         .then((data) => {
             console.log(data);
             renderabout()
         })
 }

 function renderabout(){
    
        const myheader = new Headers();
        myheader.append('Content-Type', 'application/json');
        fetch('http://localhost:3000/about', {
                method: 'GET',
                headers: myheader
            })
            .then(response => response.json())
            .then((data) => {
            console.log(data[0]);
          document.getElementById('description').innerHTML = `${data[0].aboutdescr}`;
          document.getElementById('vidoe').value = data[0].aboutvidoe ;
            });
            
     }