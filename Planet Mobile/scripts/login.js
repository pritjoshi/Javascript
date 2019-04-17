//login
var maximum = 3;

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var err = document.getElementById("error").innerHTML;
    //empty field validation
    if (username == "") {
        alert("User Name Field is  empty");
    }
    if (password == "") {
        alert("Password field is empty");
    }
    //if name and password match
    if (username == "hello" && password == "mobile") {
        document.getElementById("error").innerHTML = "Log in sucessfull";
        window.location = "hello.html";
        alert("You have Logged into the Website");
        return false;
    }
    //code for try upto 3 chance then disable username and password field
    else {
        maximum--;
        document.getElementById("error").innerHTML = "<br>Invalid username and password" + "<br>Now You have remaining " + maximum + " attempt.";
        if (maximum == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
