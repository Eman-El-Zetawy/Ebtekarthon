
 var d = document.getElementById("d");
 var s = document.getElementById("s");
const my =new Headers();
my.append('Content-Type', 'application/json');
var a =[] ,c=[] ,  l="" , h ="";
const b = ["name" , "position" ,"mobile" , "email" , "logo"] , 
z= ["logo" , "url" ] ;
fetch('http://localhost:6600/contactp',{
    method:'GET', 
    headers : my })  .then( res => res.json())  .then((data) => {a=data;  draw(a) ; });

    fetch('http://localhost:6600/contacts',{
        method:'GET', 
        headers : my })  .then( res => res.json())  .then((data) => {c=data;  draws(c) ; });
    

    function draw (a){

        console.log(a);
        l +="<tr>" ;
  for(i=0 ; i< a.length ; i++){
      l += "<td>"+"<button >"+"<ul>" ;
      for(j=0 ; j<b.length ; j++){
       l += "<li>" +b[j] + " : " + a[i][b[j]]+ "</li>" ; };
      l += "</ul>"+"</button>"+"</td>";
      if((i+1)%3===0){
          l += " </tr>"+"<tr>";
      };
  };
  d.innerHTML += l+  "</tr>" ;
    }

// 

   function draws (c){

    console.log(c , z);
    h +="<tr>" ;
for(i=0 ; i< c.length ; i++){
  h += "<td>"+"<button >"+"<ul>" ;
  for(j=0 ; j <z.length ; j++){
   h += "<li>" +z[j] + " : " + a[i][z[j]]+ "</li>" ; };
  h += "</ul>"+"</button>"+"</td>";
  if((i+1)%2===0){
      h += " </tr>"+"<tr>";
  };
};
s.innerHTML += h+  "</tr>" ;
}

document.getElementById('imgInp').addEventListener('click', () => {
    document.getElementById('fileInput').click()
  })
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                document.getElementById("imgInp").setAttribute('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    document.getElementById("imgInp").change(function(){
        readURL(this);
    }); 