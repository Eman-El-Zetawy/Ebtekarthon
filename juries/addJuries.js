 
    const myHeader =new Headers();
    myHeader.append('Content-Type', 'application/json');
    
    let n= document.getElementById("new");
    let arr = [];
    fetch('http://localhost:3000/juries',{
      meathod:'GET', 
      headers : myHeader }).then( response=>response.json()).then(data=> { 

        // let arr = [];
          console.log(data) ; 
          arr=data ;
          arr.forEach(item=> {
               RenderingJuries(item); 
          });
         
      });
    
      let juries= document.getElementById('newjuries');
  
      function RenderingJuries(d){
          console.log(d);
          let add=`<div class="card">`+
          `<img src=""../images/IMG12.jpg"" alt="Avatar">`+
          `<div class="container">`+
              `<h4><b>`+d.name+`</b></h4>`+
              `<p>`+d.bio+`</p><br>`+
            `<button class="button"  onclick ="DeleteJuries(event)" > <strong  mm="`+ d.id +`" > DELETE </strong ></button>
          </div>
      </div>`
  
      juries.innerHTML+= add;
      
    }

    function DeleteJuries(event)
    {
        let l=[];
        let id = event.target.getAttribute('mm') ;
        l.push(id);
        arr.forEach((obj, index )=>{
if(obj.id==id){
    arr.splice(index,1);
}
        })
        const myHeader =new Headers();
        myHeader.append('Content-Type', 'application/json');
        
        fetch('http://localhost:3000/juries/',{
           method:'DELETE',
           headers : myHeader , 
           body:JSON.stringify({
               id :l
           })
           })
           .then( res => res.json())
           .then(data => {  
           console.log(data);  
           juries.innerHTML ="";
           arr.forEach(obj=>{
               RenderingJuries(obj);           })
    }
           )}

