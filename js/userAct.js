let span = document.querySelectorAll("span");
// let dropdown = document.querySelector(".dropdown");
// console.log(dropdown);
let username = sessionStorage.getItem("username");

if (sessionStorage.getItem("username") != null) {
  textLog.removeEventListener("click", login);
  // Thay đổi hiển thị tên User
  span[0].lastChild.textContent = sessionStorage.getItem("username");
}
