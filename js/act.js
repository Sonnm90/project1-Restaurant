let objUserActs = [];

let objFvt = [
  {
    id: "",
    name: "",
    description: "",
    img: "",
  },
];

let listBooking = [
  {
    id: "",
    name: "",
    phone: "",
    people: "",
    date: "",
    time: "",
    note: "",
  },
];

objUserActs.push(objFvt);
objUserActs.push(listBooking);
let key = sessionStorage.getItem("username");
var saveUserAct = JSON.stringify(objUserActs);

if (sessionStorage.getItem("username") != null) {
  if (localStorage.getItem(`${key}`) != null) {
    let objUserAct = JSON.parse(localStorage.getItem(`${key}`));
  } else {
    localStorage.setItem(`${key}`, saveUserAct);
    let objUserAct = JSON.parse(localStorage.getItem(`${key}`));
  }
} else {
}

