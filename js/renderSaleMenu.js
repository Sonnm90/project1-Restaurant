var listSaleMenus = JSON.parse(localStorage.getItem("listSaleMenu"));
console.log(listSaleMenus);
function renderSaleMenu(listSaleMenus) {
  let data = "";
  for (i = 0; i < listSaleMenus.length; i++) {
    data += `
   
   
    <div class="box">
      <img src="${listSaleMenus[i].img}" alt="" />
      
    </div>
 <div class="">
        <h3> ${listSaleMenus[i].name}</h3>
                <p>
          ${listSaleMenus[i].description}
        </p>
      </div>
    `;
  }
  document.getElementById("showGallery").innerHTML = data;
}
renderSaleMenu(listSaleMenus);
