// var listMeals = [
//   {
//     id: 1,
//     nameMeals: "NHÓM GỎI",
//     img: "images/imgsMeals/hot1.jpg",
//     description:
//       "Gỏi lại xuất phát từ các nguyên liệu gần gũi, dễ tìm như ngó sen, hành tây, đậu phộng, xoài, cóc và các loại rau thơm khác như càng cua, tía tô, rau quế, ngò gai.",
//   },
//   {
//     id: 2,
//     nameMeals: "CƠM CHIÊN DỨA HẢI SẢN",
//     img: "images/imgsMeals/hot2.jpg",
//     description:
//       "Món cơm chiên kiểu Thái với những hạt cơm được rang giòn quyện đều với trứng đượm màu vàng, có mùi thơm mùi dứa, chua chua, ngọt ngọt, kết hợp với đậu hà lan, ...",
//   },
//   {
//     id: 3,
//     nameMeals: "CÀ RI ĐỎ HẢI SẢN",
//     img: "images/imgsMeals/hot3.jpg",
//     description:
//       "Hải sản và cà ri tưởng chừng như không liên quan với nhau, ấy vậy mà khi được nấu chung một nồi lại trở thành món mới có hương vị thơm ngon độc đáo.",
//   },
//   {
//     id: 4,
//     nameMeals: "MIẾN ÁP CHẢO HẢI SẢN",
//     img: "images/imgsMeals/hot4.jpg",
//     description:
//       "Miến áp chảo hải sản với nấm. Ngoài miến áp chảo hải sản với nấm, bạn có thể chọn miến xào tôm và trứng sốt cà chua đặc biệt. Đúng như tên ...",
//   },
//   {
//     id: 5,
//     nameMeals: "MASAMAN GÀ",
//     img: "images/imgsMeals/hot5.jpg",
//     description:
//       "Gỏi lại xuất phát từ các nguyên liệu gần gũi, dễ tìm như ngó sen, hành tây, đậu phộng, xoài, cóc và các loại rau thơm khác như càng cua, tía tô, rau quế, ngò gai.",
//   },
//   {
//     id: 6,
//     nameMeals: "HỦ TIẾU XÀO HẢI SẢN",
//     img: "images/imgsMeals/hot6.jpg",
//     description:
//       "Gỏi lại xuất phát từ các nguyên liệu gần gũi, dễ tìm như ngó sen, hành tây, đậu phộng, xoài, cóc và các loại rau thơm khác như càng cua, tía tô, rau quế, ngò gai.",
//   },
//   {
//     id: 7,
//     nameMeals: "MIẾN NƯỚC SUKIYAKI & HẢI SẢN",
//     img: "./images/imgsMeals/hot7.jpg",
//     description:
//       "Gỏi lại xuất phát từ các nguyên liệu gần gũi, dễ tìm như ngó sen, hành tây, đậu phộng, xoài, cóc và các loại rau thơm khác như càng cua, tía tô, rau quế, ngò gai.",
//   },
//   {
//     id: 8,
//     nameMeals: "LẨU THÁI",
//     img: "images/imgsMeals/hot8.jpg",
//     description:
//       "Gỏi lại xuất phát từ các nguyên liệu gần gũi, dễ tìm như ngó sen, hành tây, đậu phộng, xoài, cóc và các loại rau thơm khác như càng cua, tía tô, rau quế, ngò gai.",
//   },
// ];
// var saveMeals = JSON.stringify(listMeals);
// localStorage.setItem("listMeals", saveMeals);
let listMeals = JSON.parse(localStorage.getItem("listMeals"));

function renderProduct(listMeals) {
  let data = "";
  for (let i = 0; i < listMeals.length; i++) {
    data += `
      <div class="box product w3-third" >
        <img class="imgMeals" src="${listMeals[i].img}" name = "${i}" style="width:100%;cursor:pointer" onclick="onClick(this)" class="w3-hover-opacity" />
       
        <div class="content">
          <h3><i class="fas fa-map-marker-alt"></i> ${listMeals[i].nameMeals}</h3>
        </div>
         <div id="modal01" class="w3-modal" onclick="this.style.display='none'">
        <span class="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
        <div class="w3-modal-content w3-animate-zoom">
            <img id="img01" style="width:100%; height:90%"  >
        </div>
       
    </div>
      </div>
         
     `;
  }

  document.getElementById("showProduct").innerHTML = data;
}

renderProduct(listMeals);

function onClick(listMeals) {
  console.log(listMeals);
  document.getElementById("img01").src = listMeals.src;
  document.getElementById("modal01").style.display = "block";
}
