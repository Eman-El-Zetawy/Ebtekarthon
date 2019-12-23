



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


const e4 =  document.getElementById('error4') ;
const e5 =  document.getElementById('error5') ;
const e6 =  document.getElementById('error6') ;
const e7 =  document.getElementById('error7') ;


const name =  document.getElementById("inputName") ;
const position =  document.getElementById("inputPosition") ;
const mobile =  document.getElementById("inputMobile") ;
const email2 =  document.getElementById("inputEmail2") ; 

const my =new Headers();
my.append('Content-Type', 'application/json');


	





