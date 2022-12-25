let inpName = document.getElementById("inpName");
let inpPhone = document.getElementById("inpPhone");
let inpPeople = document.getElementById("inpPeople");
let inpDate = document.getElementById("inpDate");
let inpTime = document.getElementById("inpTime");
let inpNote = document.getElementById("inpNote");

let bookSubmit = document.getElementById("bookSubmit");
bookSubmit.addEventListener("click", (e) => {
  e.preventDefault();
});

function booking() {
  if (checkForm() == true) {
    let objUserAct = JSON.parse(
      localStorage.getItem(`${sessionStorage.getItem("username")}`)
    );
    //   console.log(objUserAct);

    console.log(objUserAct[1]);

    let bookingOrder = {
      id: sessionStorage.getItem("username"),
      name: inpName.value,
      phone: inpPhone.value,
      people: inpPeople.value,
      date: inpDate.value,
      time: inpTime.value,
      note: inpNote.value,
    };
    console.log(bookingOrder);
    objUserAct[1].push(bookingOrder);
    console.log(objUserAct);

    localStorage.setItem(
      `${sessionStorage.getItem("username")}`,
      JSON.stringify(objUserAct)
    );
    swal("Đặt bàn thành công", "", "success");
  }
}

function checkForm() {
  if (
    inpName.value.trim() == "" ||
    inpPhone.value.trim() == "" ||
    inpPeople.value.trim() == "" ||
    inpDate.value.trim() == "" ||
    inpTime.value.trim() == ""
  ) {
    swal("Bạn chưa nhập đủ thông tin", "", "error");
    return false;
  }
  return true;
}
