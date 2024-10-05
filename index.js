var submit_1 = document.getElementById("Submit1")
var image = document.getElementById("image")
var namefiled = document.getElementById("nametext")
var fathername = document.getElementById("fathernametext")
var emailinp = document.getElementById("emailtext")
var passwordinput = document.getElementById("passwordtext")
var imageinput = document.getElementById("imagefield")

var imagePath = "";

imageinput.addEventListener("change",function(event){
    var file = event.target.files[0]
    if(file){
        var reader = new FileReader()
        reader.onload = function(e){
            imagePath=e.target.result

        }
        reader.readAsDataURL(file)

    }

})



var imagepath = ""

function validatedata(){
    if(namefiled.value == "" ||  fathername.value == "" || emailinp.value == "" || passwordinput.value== "" ){
        return false
    }
    else{
        return true
    }
}
function inputvalue(){
    
    if(validatedata()==false){
        alert("Enter Your Correct Data")
        document.getElementById("Submit-1").style.display = 'none'
    }
     
    else{
        document.getElementById("Submit-1").style.display = 'block'
        document.getElementById("name1").innerText+=namefiled.value
        document.getElementById("Father1").innerText+=fathername.value
        document.getElementById("Email1").innerText+= emailinp.value
        document.getElementById("Password").innerText+=passwordinput.value
        document.getElementById("imag1").src=imagePath
}
}