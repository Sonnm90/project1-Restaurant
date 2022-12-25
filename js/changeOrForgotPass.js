let listUserRegister = JSON.parse(localStorage.getItem("listUserRegister"));
let inpEmail = document.getElementById("inp-email__form2");
let inpPassword = document.getElementById("inp-password__form2");
let changePass = document.getElementById("changePass-Btn");
let seccretCode = document.getElementById("seccret-Code__form2");

changePass.addEventListener("click", (e) => {
  e.preventDefault();

  for (let i = 0; i < listUserRegister.length; i++) {
    if (inpEmail.value == listUserRegister[i].email) {
      if (seccretCode.value == listUserRegister[i].seccretCode) {
        listUserRegister[i].password = inpPassword.value;
        localStorage.setItem(
          "listUserRegister",
          JSON.stringify(listUserRegister)
        );
        alert("Đổi mật khẩu thành công");
        break;
      } else {
        alert("Sai mã bảo mật");
        break;
      }
    } else {
      alert("Email chưa đc đăng ký");
    }
  }
});
