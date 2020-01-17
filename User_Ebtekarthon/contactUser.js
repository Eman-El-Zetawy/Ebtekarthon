var  arrayData = []  ; 
 const  card =  document.getElementById("newMain") ;
const myH =new Headers();
my.append('Content-Type', 'application/json');

    fetch('http://localhost:3000/contact',{
        method:'GET', 
        headers : myH }) 
        .then( res => res.json())  .then((data) => { 
            arrayData = data ; 
            console.log(data) ; 
              rendercontact(); 
        });

        function rendercontact(){
            let r ="";
             console.log(arrayData);
             arrayData.forEach(a=> { 
        r +='<div class="col-lg-4 col-md-6">'+
        '<div class="contact-post"  >'+
         '<img src="./Ebtekarthon_files/mem1.jpg" alt="">' +
        '<div class="contact-post-content">'+
        '<h2>'+ a.name + '</h2><span>'+a.position+'</span><p>'+a.mobile+
        '<br>'+a.email+'</p></div></div></div>';
       });
                card.innerHTML = r ;
               }
								
							
									
									
									
									


    

