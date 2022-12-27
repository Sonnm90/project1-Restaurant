let span = document.querySelectorAll("span");

if (sessionStorage.getItem("username") != null) {
  textLog.removeEventListener("click", login);
  span[0].lastChild.textContent = sessionStorage.getItem("username");
}
