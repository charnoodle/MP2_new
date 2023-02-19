$(document).ready(function () {
  let remember = localStorage.getItem("remember");
  if (remember) {
    window.location.href = "index.html";
  }
  $("#login_form").submit(function (x) {
    let username = $("#username").val();
    let password = $("#password").val();
    if (username == "admin" && password == "admin123") {
      let remember_me = $("#remember_me").prop("checked");
      if (remember_me) {
        localStorage.setItem("remember", remember_me);
      }
      window.location.href = "index.html";
    } else {
      alert("Incorrect credentials!");
    }
    x.preventDefault();
  });
});

$(document).ready(function() {
  const loginButton = $("#login-button");
  const loginForm = $("#login_form");
  loginForm.submit(function(event) {
    event.preventDefault();
    const username = $("#username").val();
    const password = $("#password").val();
    if (username === "admin" && password === "admin123") {
      loginButton.text("Logout");
      const loginModal = new bootstrap.Modal($("#exampleModal"));
      loginModal.hide();
    } else {
      alert("Incorrect username or password");
    }
  });

  loginButton.click(function() {
    if (loginButton.text() === "Logout") {
      loginButton.text("Login");
    } else {
      // Show login modal
      const loginModal = new bootstrap.Modal($("#exampleModal"));
      loginModal.show();
    }
  });
});

function logout() {
  localStorage.removeItem("remember");
  window.location.href = "index.html";
}























































// // get references to the HTML elements
// const loginForm = document.getElementById('submit');
// const loginButton = document.getElementById('login-nav');

// // add an event listener to the login form to handle submission
// loginForm.addEventListener('submit', (event) => {
//   event.preventDefault(); // prevent the form from submitting

//   // perform the login logic here (e.g., validate username and password)
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;
//   if (username === "admin" && password === "admin123") {
//     // if the login is successful, hide the login button
//     loginButton.style.display = 'none';
//     // also update the welcome message in the navigation bar
//     loginNav.innerHTML = `Welcome ${username}`;
//   } else {
//     alert("Invalid username or password. Please try again.");
//   }
// });

// // check if the user is already logged in
// const isLoggedIn = true; // you can replace this with your own logic
// if (isLoggedIn) {
//   const username = "admin"; // you can replace this with your own logic
//   loginButton.style.display = 'none';
//   loginNav.innerHTML = `Welcome ${username}`;
// }


// $(document).ready(function () {
//     let username = localStorage.getItem("userName");
//     let password = localStorage.getItem("password");
//     if (username) {
//       $("#userName").val(username);
//     }
//     if (password) {
//       $("#password").val(password);
//     }
//     let rememberMe = localStorage.getItem("rememberMe");
// if (rememberMe) {
//   $("#rememberMe").prop("checked", true);
// }
// $("#userForm").submit(function (event) {
//   event.preventDefault();
//   let username = $("#userName").val();
//   let password = $("#password").val();
//   rememberMe = $("#rememberMe").prop("checked");
//   if (username == "admin" && password == "admin123") {
//     if (rememberMe) {
//       localStorage.setItem("username", username);
//       localStorage.setItem("password", password);
//       localStorage.setItem("rememberMe", true);
//     } else {
//       localStorage.removeItem("username");
//       localStorage.removeItem("password");
//       localStorage.removeItem("rememberMe");
//     }
//     window.location.href = "./index.html";
//   }
// });
//   });


  