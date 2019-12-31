let  rr =""; 


 const add2  = document.getElementById("add2");
 
 const  card2 =  document.getElementById("newMain");

 
 renderPage2();

//  function renderPage1 (){
//      r = '<div class="card">'+
//     '<img class="contact-img" src="../images/IMG12.jpg" alt="Avatar">' +
//      '<div class="container">'+
//          '<h4><b>Our Contacts</b></h4>'+
//          '<p>Num Phon</p>'+
//              '<button class="button"  id="delete1"><strong>DELETE</strong></button>'+
//      '</div><br></div>'; 

//      card1.innerHTML += r ; 
//  }

function renderPage2 (){
    rr='<div class="maincard">' +
        '<img class="img2" src="../images/alcont.png" alt="Avatar">' +
        '<div class="container">' +
            '<h4><b>Click here to add Contact</b></h4>' +
            '<p >kfhh lj</p>' +
                '<button class="button"  id="delete2" ><strong>DELETE</strong></button>' +
            '<br></div><br></div>' ;
            card2.innerHTML += rr ; 
        }

const my =new Headers();
my.append('Content-Type', 'application/json');
// // var a =[] ,c=[] ,  l="" , h ="";
 const b = ["name" , "position" ,"mobile" , "email" ] , 
// // 
// // fetch('http://localhost:6600/contactp',{
// //     method:'GET', 
// //     headers : my })  .then( res => res.json())  .then((data) => {a=data;  draw(a) ; });

// //     fetch('http://localhost:6600/contacts',{
// //         method:'GET', 
// //         headers : my })  .then( res => res.json())  .then((data) => {c=data;  draws(c) ; });
    

  // //  function draw (a){

// //         console.log(a);
// //         l +="<tr>" ;
// //   for(i=0 ; i< a.length ; i++){
// //       l += "<td>"+"<button >"+"<ul>" ;
// //       for(j=0 ; j<b.length ; j++){
// //        l += "<li>" +b[j] + " : " + a[i][b[j]]+ "</li>" ; };
// //       l += "</ul>"+"</button>"+"</td>";
// //       if((i+1)%3===0){
// //           l += " </tr>"+"<tr>";
// //       };
// //   };
// //   d.innerHTML += l+  "</tr>" ;
// //     }

// // // 

// //    function draws (c){

// //     console.log(c , z);
// //     h +="<tr>" ;
// // for(i=0 ; i< c.length ; i++){
// //   h += "<td>"+"<button >"+"<ul>" ;
// //   for(j=0 ; j <z.length ; j++){
// //    h += "<li>" +z[j] + " : " + a[i][z[j]]+ "</li>" ; };
// //   h += "</ul>"+"</button>"+"</td>";
// //   if((i+1)%2===0){
// //       h += " </tr>"+"<tr>";
// //   };
// // };
// // s.innerHTML += h+  "</tr>" ;
// // }




