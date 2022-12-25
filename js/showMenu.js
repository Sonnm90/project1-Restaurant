

// var setlunchMenus = [
//   "images/menu/Menu-Lunch/11.jpg",
//   "images/menu/Menu-Lunch/12.jpg",
//   "images/menu/Menu-Lunch/13.jpg",
//   "images/menu/Menu-Lunch/14.jpg",
//   "images/menu/Menu-Lunch/15.jpg",
//   "images/menu/Menu-Lunch/16.jpg",
// ];

// var setcomboMenus = [
//   "images/menu/Combo/1.png",
//   "images/menu/Combo/2.png",
//   "images/menu/Combo/3.png",
//   "images/menu/Combo/4.png",
//   "images/menu/Combo/5.png",
//   "images/menu/Combo/9.png",
// ];

// var lunchMenus = JSON.stringify(setlunchMenus);
// localStorage.setItem("lunchMenus", lunchMenus);
// var comboMenus = JSON.stringify(setcomboMenus);
// localStorage.setItem("setcomboMenus", comboMenus);

var setlunchMenus = JSON.parse(localStorage.getItem("lunchMenus"));
console.log(setlunchMenus);
var setcomboMenus = JSON.parse(localStorage.getItem("setcomboMenus"));
console.log(setcomboMenus);

let listMenu = document.getElementById("listMenu");
console.log(listMenu);
let listRestaurant = document.getElementById("listRestaurant");
console.log(listRestaurant);

function showMenu(menu) {
  let data = "";
  for (i = 0; i < menu.length; i++) {
    if (i == 0) {
      data += `
        <div class="carousel-item active">
                    <img src="${menu[i]}" class="d-block w-100" alt="...">
                </div>
        `;
      //   document.getElementById("menu").innerHTML = data;
    } else {
      data += `
                       <div class="carousel-item ">
                        <img src="${menu[i]}" class="d-block w-100" alt="...">
                    </div>
                   
                  `;
    }
    document.getElementById("menu").innerHTML = data;
  }
}

// showMenu(setlunchMenus);

function selectMenu() {
  if (listRestaurant.value != "0") {
    if (listMenu.value == "1") {
      showMenu(setlunchMenus);
    }
    if (listMenu.value == "2") {
      showMenu(setcomboMenus);
    }
  }
}
