var listUsers = JSON.parse(localStorage.getItem("listUserRegister"));
// console.log(listUsers);
var listCancels = JSON.parse(localStorage.getItem("listCancels"));

var listBookings = [];

for (let i = 0; i < listUsers.length; i++) {
  //   console.log(listUsers[i]);
  let objUserAct = JSON.parse(localStorage.getItem(`${listUsers[i].email}`));
  // console.log(objUserAct);
  let list = objUserAct[1];
  for (let index = 1; index < list.length; index++) {
    listBookings.push(list[index]);
  }
}

// console.log(listBookings);

// var getListBooking = JSON.parse(localStorage.getItem("listBooking"));

const orderDetailId = document.getElementById("orderDetailId");
const orderDetailName = document.getElementById("orderDetailName");
const orderDetailEmail = document.getElementById("orderDetailEmail");
const orderDetailPhone = document.getElementById("orderDetailPhone");
const orderDetailDate = document.getElementById("orderDetailDate");
const orderDetailTime = document.getElementById("orderDetailTime");
const orderDetailPeople = document.getElementById("orderDetailPeople");
const orderDetailCreateDate = document.getElementById("orderDetailCreateDate");
const orderDetailNote = document.getElementById("orderDetailNote");

function renderTableOrder(listBookings) {
  let renderTableOrder = "";

  for (let i = 0; i < listBookings.length; i++) {
    renderTableOrder += `
                <tr>
                    <td>${i + 1}</td>
                
                    <td>${listBookings[i].name}</td>
                    <td>${listBookings[i].id}</td>
                    <td>${listBookings[i].phone}</td>
                    <td>${listBookings[i].date}</td>
                    <td>${listBookings[i].time}</td>
                    <td>${listBookings[i].people} người</td>
                    <td>${listBookings[i].note} </td>

                    <td>
                   </td>
                    <td>
                        <button class="btn btn-danger w-100" onclick="deleteOrder(${i})"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
             `;
  }
  document.getElementById("listOrder").innerHTML = renderTableOrder;
}
renderTableOrder(listBookings);

function renderCancelOrder(listCancels) {
  let renderTableOrder = "";

  for (let i = 0; i < listCancels.length; i++) {
    renderTableOrder += `
                <tr>
                    <td>${i + 1}</td>
                
                    <td>${listCancels[i].name}</td>
                    <td>${listCancels[i].id}</td>
                    <td>${listCancels[i].phone}</td>
                    <td>${listCancels[i].date}</td>
                    <td>${listCancels[i].time}</td>
                    <td>${listCancels[i].people} người</td>
                    <td>${listCancels[i].note} </td>

                    <td>
                   </td>
                    <td>
                        <button class="btn btn-danger w-100" onclick="deleteCancelOrder(${i})"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
             `;
  }
  document.getElementById("listCancelOrder").innerHTML = renderTableOrder;
}
renderCancelOrder(listCancels);

// function detailOrder(paramId) {
//   for (let i = 0; i < listBookings.length; i++) {
//     if (listBookings[i].id == paramId) {
//       orderDetailName.innerHTML = listBookings[i].name;
//       orderDetailId.innerHTML = listBookings[i].id;
//       orderDetailPhone.innerHTML = listBookings[i].phone;
//       orderDetailDate.innerHTML = listBookings[i].date;
//       orderDetailTime.innerHTML = listBookings[i].time;
//       orderDetailPeople.innerHTML = listBookings[i].people;
//       orderDetailNote.innerHTML = listBookings[i].note;
//     }
//   }
// }

// function deleteCancelOrder(paramId) {
//   for (let i = 0; i < listCancels.length; i++) {
//     if (listCancels[i].id == paramId) {
//       listCancels.splice(i, 1);
//       localStorage.setItem("listCancels", JSON.stringify(listCancels));
//       renderCancelOrder(listCancels);
//     }
//   }
// }
