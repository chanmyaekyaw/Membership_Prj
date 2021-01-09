var username = document.getElementById("username");
username.addEventListener("keyup", username_validation);

function username_validation() {
  var usernameValue = document.getElementById("username").value;
  var name_warning = document.getElementById("name_warning");
  name_warning.innerHTML = "";
  var expr = /^[a-zA-Z0-9_]{6,20}$/;
  if (usernameValue == null || usernameValue == "") {
    name_warning.innerHTML = "";
    username.classList.remove("is-invalid");
    username.classList.remove("form-control");
  } else if (!expr.test(usernameValue)) {
    name_warning.innerHTML =
      "Only Alphabets, Numbers and Underscore and between 6 to 20 characters!";
    username.classList.add("form-control");
    username.classList.add("is-invalid");
    username.classList.remove("is-valid");
    username.style.boxShadow = "none";
  } else if (expr.test(usernameValue)) {
    username.classList.add("form-control");
    username.classList.add("is-valid");
    username.classList.remove("is-invalid");
  } else {
  }
}

var password = document.getElementById("password");
password.addEventListener("keyup", pw_validation);

function pw_validation() {
  var passwordValue = document.getElementById("password").value;
  var pw_warning = document.getElementById("pw_warning");
  pw_warning.innerHTML = "";
  var expr = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  if (passwordValue == null || passwordValue == "") {
    pw_warning.innerHTML = "";
    password.classList.remove("is-invalid");
    password.classList.remove("form-control");
  } else if (!expr.test(passwordValue)) {
    pw_warning.innerHTML =
      "Must be between 8 to 20 characters, must contains uppercase, lowercase & number!";
    password.classList.add("form-control");
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
    password.style.boxShadow = "none";
  } else if (expr.test(passwordValue)) {
    password.classList.add("form-control");
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
  } else {
  }
}

document.getElementById("login").onclick = function () {
  location.href = "member2.html";
};
