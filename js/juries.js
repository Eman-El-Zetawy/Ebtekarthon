document.getElementById('imgInp').addEventListener('click', () => {
    document.getElementById('fileInput').click()
    
  })
    function readURL(input) {
        console.log(input.files && input.files[0]);
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                document.getElementById("imgInp").setAttribute('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    document.getElementById("fileInput").addEventListener("change" , function(){
        readURL(this);
    });
      /////////
      input   = document.getElementById("fileInput");
      let b64 = "";
      input.onchange = function () {
        var file = input.files[0],
          img = new FileReader();
        img.onloadend = function () {
          b64 = img.result.replace(/^data:.+;base64,/, '');
          console.log(b64);
        };
        img.readAsDataURL(file);
      };
  
    
  
  const save = document.getElementById("save");
  
  save.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
      add();
    } });
  
  save.addEventListener("click" , add);
  let array=[];
   
      function add(){
        let Name =document.getElementById("name").value ;
        let Position =document.getElementById("position").value ;
        let Email =document.getElementById("email").value ;
        let JurisBIO =document.getElementById("brif").value ;
  
        const myHeader =new Headers();
        myHeader.append('Content-Type', 'application/json');
    
  
        fetch('http://localhost:3000/juries',{
        method:'POST',
        headers: myHeader,
        body:JSON.stringify({
        name : Name , 
        position : Position,
        email : Email,
        BIO : JurisBIO,
        img :"test"
     })
  }).then( response=>response.json()).then(data=> console.log(data));
  
  }






function create() {
    location.replace("../juries/Juries2.html")
}