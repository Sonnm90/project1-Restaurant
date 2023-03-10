let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let textLog = document.querySelector("#textLog");
let hideMenu = document.querySelector(".myMenu");
// let dropdown = document.querySelector(".dropdown");
let logOut = document.querySelector("#logout-Btn");
let zoomImg = document.querySelectorAll("#blur-product");
let activeBox = document.querySelectorAll("#box-product");
let dropdown = document.getElementById("dropdownMenu");
let userBtn = document.getElementById("user-btn");
let span = document.querySelectorAll("span");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

// formBtn.addEventListener('click', () =>{
//     loginForm.classList.add('active');
// });
function login() {
  loginForm.classList.add("active");
}
textLog.addEventListener("click", login);

formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

if (sessionStorage.getItem("username") != null) {
  textLog.removeEventListener("click", login);
  // Thay đổi hiển thị tên User
  span[0].lastChild.textContent = sessionStorage.getItem("username");

  userBtn.addEventListener("click", () => {
    document.querySelector(".noidung_dropdown").classList.toggle("hienThi");
  });
  logOut.addEventListener("click", () => {
    sessionStorage.removeItem("username");
    window.location.href = "./index.html";
  });
}
