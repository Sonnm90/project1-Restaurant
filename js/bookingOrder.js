// let inpName = document.getElementById("inpName");
// let inpPhone = document.getElementById("inpPhone");
// let inpPeople = document.getElementById("inpPeople");
// let inpDate = document.getElementById("inpDate");
// let inpTime = document.getElementById("inpTime");
// let inpNote = document.getElementById("inpNote");

let objUserAct = JSON.parse(
  localStorage.getItem(`${sessionStorage.getItem("username")}`)
);
console.log(objUserAct);
let listBooking = objUserAct[1];

console.log(listBooking);
function showBookingOrder(listBooking) {
  let data = "";
  for (let i = 1; i < listBooking.length; i++) {
    data += `
         <div class="cardOrder">
           <div>
                <label>Ngày đặt bàn: </label> <span>${listBooking[i].date}</span>
                <hr>
                <label>Email: </label> <span>${listBooking[i].id}</span>
                <hr>
                <label>Người đặt bàn:</label> <span>${listBooking[i].name}</span>
           </div>
                <hr>
           <div>
                <label>Số điện thoại:</label> <span>${listBooking[i].phone} </span>    
                <hr>           
                <label>Số người :</label> <span>${listBooking[i].people} </span>
                <hr>
                <label>Thời gian đặt:</label> <span>${listBooking[i].time} </span>
            </div>
            <input type="submit" class="btn" id="deleteBooking" value="HỦY" onclick="deleteBooking(${i})">
        </div>
     `;
  }
  document.getElementById("showBookingOrder").innerHTML = data;
}

showBookingOrder(listBooking);

function deleteBooking(id) {
  listBooking.splice(id, 1);
  console.log(listBooking);
  localStorage.setItem(
    `${sessionStorage.getItem("username")}`,
    JSON.stringify(objUserAct)
  );
  swal("Hủy đặt bàn thành công", "", "success");
  showBookingOrder(listBooking);
}
