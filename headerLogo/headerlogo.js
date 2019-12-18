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


