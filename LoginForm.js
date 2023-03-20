function validate() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var email = document.getElementById("email").value
    if (username == "playboi" && password == "user" && email == "abcdefg@gmail.com") {
        alert("You Logged in Successfully");
        return false;
    }
    else {
        alert("You Fail Login");
    }
}