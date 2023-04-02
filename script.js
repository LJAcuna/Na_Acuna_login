var usr , psd

function check() {
    var usr = document.getElementById("usr").value;
    var psd = document.getElementById("psd").value;
    if (usr == "" && psd != "" ) {
       document.getElementById("crt").innerHTML = "Please enter your username.";
       console.log("Login error.");
       return false;
    }else if (usr != "" && psd == "") {
        document.getElementById("crt").innerHTML = "Please enter your password.";
        console.log("Login error.");
        return false;
    }else if (usr == "" && psd == ""){
        document.getElementById("crt").innerHTML = "Please enter your username and password.";
        console.log("Login error.");
        return false;
    }
}