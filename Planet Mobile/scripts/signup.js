//signup
function checkFormEntry() {
    document.getElementById("errorMessage").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";

    var errors = "";
    if (document.getElementById("username").value.length < 5) {
        errors = "The username must be at least 5 Character.<br />";
    }

    if (document.getElementById("password").value.length < 8) {
        alert("Please Type Correct 8 digit Password");
    }
    if (document.getElementById("password").value.length < 8) {
        alert("Please Type Correct 8 digit Password");
    }
    if (document.getElementById("phone").value.length < 10) {
        alert("Please Provide Your 10 digit Phone number");
    }


    if (errors != "") {
        document.getElementById("errorMessage").innerHTML = errors;
    } else {
        window.location.href = "signupsuccess.html";
        alert("You have Signup to Planet Mobile")
    }
    return false;
}

document.getElementById("form1").onsubmit = checkFormEntry;