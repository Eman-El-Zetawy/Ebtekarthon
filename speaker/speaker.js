document.getElementById('imgInp').addEventListener('click', () => {
    document.getElementById('fileInput').click();
    
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
  
    

  let array=[];
   
      function add(){
        let SpeakerName =document.getElementById("name").value ;
        let SpeakerPosition =document.getElementById("position").value ;
        let SpeakerEmail =document.getElementById("email").value ;
        let SpeakerBIO =document.getElementById("brif").value ;
  
        const myHeader =new Headers();
        myHeader.append('Content-Type', 'application/json');
    
  
        fetch('http://localhost:3000/speaker',{
        method:'POST',
        headers: myHeader,
        body:JSON.stringify({
        name : SpeakerName , 
        position : SpeakerPosition,
        email : SpeakerEmail,
        BIO : SpeakerBIO,
        img :"test"
     })
  }).then( response=>response.json()).then(data=> console.log(data));
  
  }


  function create() {
    if (document.getElementById("name").value =="" && document.getElementById("position").value=="" && document.getElementById("email").value=="" && document.getElementById("brif").value == "" )
    {
      
      alert(" Forms must not be empty!")
    }
    else {
      add();
    document.getElementById("added").innerHTML="<b>"+" Added successfully, click here to show the result!" +"</b>";}
  }