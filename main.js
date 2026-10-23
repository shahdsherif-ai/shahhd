function validateVaule(){

    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var result = document.getElementById("result");

    if(user=="" && email =="" && pass=="" && confirm =="")
      if(user=="" && email=="" && pass=="" && confirm==""){
        result.innerHTML = "Enter Data";
        return false;
    }else if(user.length < 5 || user.length > 15){
        result.innerHTML = "Enter 5-15 character in Name";
        return false;
    }else if(email.indexOf("@", 1) == -1 || email.indexOf(".com", 3) == -1){
        result.innerHTML = "Enter Valid Email";
        return false;
    }else if(pass.length < 8){
        result.innerHTML = "Week Password";
        return false;
    }else if ( pass != confirm) {
        result.innerHTML = "Matched Password";
        return false;
    }

        
        }
    
      