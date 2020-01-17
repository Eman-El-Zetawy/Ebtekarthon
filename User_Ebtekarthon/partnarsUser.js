<<<<<<< HEAD
   let  htmlr  ="" ,  ArrayD=[], arrayData = [] ; 
    const  create =  document.getElementById("create");
 const  card =  document.getElementById("newMain") ;
   const my = new Headers();
my.append('Content-Type', 'application/json');

    fetch('http://localhost:3000/partners',{
        method:'GET', 
        headers : my }) .then( res => res.json()) .then((data) => { 
            console.log(data) ; 
            ArrayD=data;
            render(); 
        });


function render(){ 
htmlr ="";
ArrayD.forEach(a=> {
htmlr +='<li><a href="'+a.wsite + '" id="'+a.id+'"><img src="./Ebtekarthon_files/4.png" alt=""></a></li>'; 
     }); 
    create.innerHTML = htmlr  ; 
    }


    fetch('http://localhost:3000/contact',{
        method:'GET', 
        headers : my }) 
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
					
=======
const my = new Headers();
my.append('Content-Type', 'application/json');
    fetch('http://localhost:3000/partners',{
        method:'GET', 
        headers : my })  .then( res => res.json())  .then((data) => { 
            console.log(data) ; 
            arr=data;
                render(); 
        });
>>>>>>> 7a577dcabbcc4ca4d07e2bef9378aac970c5f7fd
