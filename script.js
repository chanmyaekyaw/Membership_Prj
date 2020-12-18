function username_validation() {
  var username = document.getElementById("username").value;
  var name_warning = document.getElementById("name_warning");
  name_warning.innerHTML = "";
  var expr = /^[a-zA-Z0-9_]{6,20}$/;
  if (username == null || username == "" || expr.test(username)) {
    name_warning.innerHTML = "";
  } else {
    name_warning.innerHTML =
      "Only Alphabets, Numbers and Underscore and between 6 to 20 characters.";
  }
}
document
  .getElementById("username")
  .addEventListener("keyup", username_validation);

function pw_validation() {
  var password = document.getElementById("password").value;
  var pw_warning = document.getElementById("pw_warning");
  pw_warning.innerHTML = "";
  var expr = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  if (password == null || password == "") {
    pw_warning.innerHTML = "";
  } else if (!expr.test(password)) {
    pw_warning.innerHTML =
      "Must be between 8 to 20 characters, must contains uppercase, lowercase, and number";
  } else {
  }
}
document.getElementById("password").addEventListener("keyup", pw_validation);

document.getElementById("login").onclick = function () {
  location.href = "member.html";
};
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,20}$/

// if (!expr.test(username)) {
//   name_warning.innerHTML =
//     "Only Alphabets, Numbers and Underscore and between 6 to 20 characters.";
// } else if (username.value == null || username.value == "") {
//   name_warning.style.display = "none";
// } else {
//   return true;
// }

// if (!expr.test(password)) {
//   pw_warning.innerHTML =
//     "Must be between 8 to 20 characters, must contains uppercase, lowercase, and number";
// } else if (password.value == null || password.value == "") {
//   pw_warning.style.display = "none";
// } else {
//   return true;
// }
