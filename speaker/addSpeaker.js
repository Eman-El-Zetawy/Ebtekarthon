 
    const myHeader =new Headers();
    myHeader.append('Content-Type', 'application/json');
    
    let n= document.getElementById("new");
    let arr = [];
    fetch('http://localhost:3000/speaker',{
      meathod:'GET', 
      headers : myHeader }).then( response=>response.json()).then(data=> { 

        // let arr = [];
          console.log(data) ; 
          arr=data ;
          arr.forEach(item=> {
               RenderingSpeaker(item); 
          });
         
      });
    
      let NewSpeaker= document.getElementById('newspeaker');
  
      function RenderingSpeaker(d){
          console.log(d);
          let add=`<div class="card">`+
          `<img src='../images/IMG12.jpg' alt="Avatar">`+
          `<div class="container">`+
              `<h4><b>`+d.name+`</b></h4>`+
              `<p>`+d.bio+`</p><br>`+
            `<button class="button"  onclick ="DeleteSpeaker(this.id)" id=` + d.id + `> <strong> DELETE </strong ></button>
            </div>
        </div>`;
      console.log(d.id);
  
      NewSpeaker.innerHTML+= add;
      
    }

    function DeleteSpeaker(id)
    {
      console.log(id);
      const myHeader = new Headers();
      myHeader.append('Content-Type', 'application/json');
   
      
        fetch('http://localhost:3000/speaker/',{
          method: 'DELETE',
          headers: myHeader,
          body: JSON.stringify({
            id: id
          })
        })
        .then(res => {
         console.log(res);
          if (res.status === 200) {
            
           console.log(res.status);
            arr.forEach((obj, index) => {
             
              if (obj.id == id) {
                
                arr.splice(index, 1);
             }
              }); 
              NewSpeaker.innerHTML = "";
             arr.forEach(obj => {
               RenderingSpeaker(obj); 
              });

            }  
           
         });
        }
