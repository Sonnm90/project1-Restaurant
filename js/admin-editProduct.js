var getListMeals = JSON.parse(localStorage.getItem("listMeals"));
// console.log(getListMeals);
const addImgFood = document.getElementById("addImgFood");
const renderImgAdd = document.getElementById("renderImgAdd");
const addNameFood = document.getElementById("addNameFood");
const addDescriptionFood = document.getElementById("addDescriptionFood");
const addPriceFood = document.getElementById("addPriceFood");

const imgFoodBefore = document.getElementById("imgFoodBefore");
const editImgFood = document.getElementById("editImgFood");
const editNameFood = document.getElementById("editNameFood");
const editDescriptionFood = document.getElementById("editDescriptionFood");
const editPriceFood = document.getElementById("editPriceFood");

function renderTableOrder(getListMeals) {
  let renderTableOrder = "";

  for (let i = 0; i < getListMeals.length; i++) {
    renderTableOrder += `
                <tr>
                    <td>${getListMeals[i].id}</td>
                    <td>
                        <img src="${getListMeals[i].img}" style="width:100px; height:100px"/>
                    </td>
                    <td>${getListMeals[i].nameMeals}</td>
                    <td>${getListMeals[i].description}</td>

                    <td>
                        
                    </td>
                    <td class="btn-group w-100">
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEditFood" onclick="editMenu(${getListMeals[i].id})"><i class="fa-solid fa-pen-to-square"></i></button>

                        <button class="btn btn-danger" onclick="deleteMenu(${getListMeals[i].id})"><i class="fa-solid fa-trash"></i></button>
                     </td>
                </tr>
             `;
  }
  document.querySelector("tbody").innerHTML = renderTableOrder;
}
renderTableOrder(getListMeals);

// THÊM FILE ẢNH MỚI
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      // console.log("111", e.target.result);
      localStorage.setItem("image", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

///////////     THÊM MỚI   ___  CREATE     ///////////

function changeImgAdd() {
  setTimeout(() => {
    renderImgAdd.src = localStorage.getItem("image");
  }, 300);
}

function addNewProduct() {
  let objectProduct = {
    id: getListMeals[getListMeals.length - 1].id + 1,
    img: localStorage.getItem("image"),
    nameMeals: addNameFood.value,
    description: addDescriptionFood.value,
  };
  getListMeals.push(objectProduct);
  localStorage.setItem("listMeals", JSON.stringify(getListMeals));
  renderTableOrder(getListMeals);
  swal("Thêm món ăn thành công", "", "success");

  addImgFood.value = "";
  renderImgAdd.src = "";
  addNameFood.value = "";
  addDescriptionFood.value = "";

  localStorage.removeItem("image");
}

///////////      CHI TIẾT  ___ READ      ///////////
// function detailMenu(paramId) {
//   const detailName = document.getElementById("detail-name");
//   const detailImg = document.getElementById("detail-img");
//   const detailDescription = document.getElementById("detail-description");
//   const detailPrice = document.getElementById("detail-price");

//   for (let i = 0; i < getListMeals.length; i++) {
//     if (getListMeals[i].id == paramId) {
//       detailName.innerHTML = getListMeals[i].nameMeals;
//       detailImg.src = getListMeals[i].img;
//       detailDescription.innerHTML = getListMeals[i].description;
//     }
//   }
// }

///////////      SỬA  ___ EDIT      ///////////
var indexEdit = "";
//  Thêm dữ liệu vào modal
function editMenu(paramId) {
  for (let i = 0; i < getListMeals.length; i++) {
    if (getListMeals[i].id == paramId) {
      imgFoodBefore.src = getListMeals[i].img;
      //   editImgFood.src = localStorage.getItem("image");
      editNameFood.value = getListMeals[i].nameMeals;
      editDescriptionFood.value = getListMeals[i].description;
    }
  }
  indexEdit = paramId;
}

function changeImgEdit() {
  setTimeout(() => {
    imgFoodBefore.src = localStorage.getItem("image");
  }, 500);
}

//  Lưu dữ liệu lên localStorage và hiển thị lại bảng
function saveEditProduct() {
  console.log(indexEdit);
  for (let i = 0; i < getListMeals.length; i++) {
    if (getListMeals[i].id == indexEdit) {
      getListMeals[i].img = localStorage.getItem("image");
      // editImgFood.value =
      getListMeals[i].nameMeals = editNameFood.value;
      getListMeals[i].description = editDescriptionFood.value;

      localStorage.setItem("listMeals", JSON.stringify(getListMeals));
      renderTableOrder(getListMeals);

      swal("Sửa món ăn thành công", "", "success");
    }
  }
  //localStorage.removeItem("image");
}

///////////      XÓA  ___ DELETE        /////////////
function deleteMenu(paramId) {
  for (let i = 0; i < getListMeals.length; i++) {
    if (getListMeals[i].id == paramId) {
      getListMeals.splice(i, 1);
      localStorage.setItem("listMeals", JSON.stringify(getListMeals));
      renderTableOrder(getListMeals);
      swal("Xóa món ăn thành công", "", "success");
    }
  }
}
