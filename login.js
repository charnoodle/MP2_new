$(document).ready(function () {
    let username = localStorage.getItem("userName");
    let password = localStorage.getItem("password");
    if (username) {
      $("#userName").val(username);
    }
    if (password) {
      $("#password").val(password);
    }
    let rememberMe = localStorage.getItem("rememberMe");
if (rememberMe) {
  $("#rememberMe").prop("checked", true);
}
$("#userForm").submit(function (event) {
  event.preventDefault();
  let username = $("#userName").val();
  let password = $("#password").val();
  rememberMe = $("#rememberMe").prop("checked");
  if (username == "admin" && password == "admin123") {
    if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("rememberMe", true);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      localStorage.removeItem("rememberMe");
    }
    window.location.href = "./index.html";
  }
});
  });
  
  // add function so that by clicking signup it wont send you to the home page