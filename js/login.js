let loginBtn = document.getElementById("login-Btn");
let emailField = document.getElementById("email");
let passwordField = document.getElementById("password");
let listUserRegister = JSON.parse(localStorage.getItem("listUserRegister"));
// console.log(listUserRegister);

loginBtn.addEventListener("click", (e) => {
  // kiem tra su hop le cua email
  // console.log(emailField);
  // console.log(passwordField);
  e.preventDefault();
  if (emailField.value == "") {
    console.warn("email khong duoc bo trong");
  } else if (emailField.value.length < 6) {
    console.warn("email can lon hon hoac bang 6 ky tu");
  } else if (emailField.value.length > 32) {
    console.error("email can nho hon hoac bang 32 ky tu");
  } else {
    if (passwordField.value == "") {
      console.warn("password khong duoc bo trong");
    } else {
      for (let i = 0; i < listUserRegister.length; i++) {
        if (emailField.value === listUserRegister[i].email) {
          console.log(1);
          if (passwordField.value == listUserRegister[i].password) {
            sessionStorage.setItem("username", emailField.value);

            window.location.href = "./index.html";
            break;
          } else {
            alert("Mật khẩu không đúng");
          }
        } else {
          // alert("email chưa được đăng ký");
        }
      }
    }
  }

  // kiem tra su hop le cua password
});
