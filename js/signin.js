let loginEmailInput = document.getElementById("signEmail");
let loginPasswordInput = document.getElementById("signPass");
let loginBtn = document.getElementById("siginBtt");
let signupAnchor = document.getElementById("signupAnchor");

let users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}
function signIn() {
    let loginEmail = loginEmailInput.value;
    let loginPassword = loginPasswordInput.value;
  
    if (loginEmailInput.value === "" || loginPasswordInput.value === "") {
      swal({
        text: "Please fill out all fields for login.",
      });
      return;
    }
  
    if (isCorrectEmailAndPassword(loginEmail, loginPassword)) {
      window.location.href = "home.html";
    } else {
      swal({
        text: "Incorrect email or password",
      });
    }
  }
  
  function isCorrectEmailAndPassword(email, password) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        localStorage.setItem("userName", users[i].name);
        return true;
      }
    }
    return false;
  }
  
  loginBtn.addEventListener("click", function () {
    signIn();
  });
  
  signupAnchor.addEventListener("click", function () {
    window.location.href = "signUp.html";
  });
  
