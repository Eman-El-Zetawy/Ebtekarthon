document.getElementById('buttonSave').addEventListener('click', add);
renderabout();
 function add() {
     const description = document.getElementById('description').value,
     vidoe = document.getElementById('vidoe').value ;
     const myheader = new Headers();
     myheader.append('Content-Type', 'application/json');
     fetch('http://localhost:5000/about', {
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
        fetch('http://localhost:5000/about', {
                method: 'GET',
                headers: myheader
            })
            .then(response => response.json())
            .then((data) => {
            console.log(data[0]);
          document.getElementById('add').innerHTML = `<textarea class="Description"  cols="45" rows="10" placeholder="Description"   id="description" >${data[0].aboutdescr}</textarea>
          <div><input type="text" placeholder=" vidoe url" id="vidoe"  value="${data[0].aboutvidoe}" ></div>`
            });
            
     }