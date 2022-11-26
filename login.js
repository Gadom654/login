//creating some variables to use later
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    //function to get user inputs and validate it
    //creating vars of user input
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    //checking if username and password is good print logged in info if not print alert about wrong login
    if (username === "lol" && password === "lol") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        alert("Wrong username or password");
	location.reload();
    }
})

