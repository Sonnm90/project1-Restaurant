// var listSaleMenus = [
//   {
//     productSaleID: 1,
//     name: "[MB] FLASH SALE – DUY NHẤT 11.11 GIỜ VÀNG SALE SỐC – GIẬT NGAY VOUCHER 200K",
//     description: `Team mê đồ Thái miền Bắc đã sẵn sang chưa !!! Đã NGON lại còn Sale Sốc thì Thai Lovers phải lẹ tay chớp ngay Voucher giảm sốc 200k của […]`,

//     img: "images/km1.jpg",
//   },
//   {
//     productSaleID: 2,
//     name: "TẶNG NGAY MỰC SỐT HOÀNG KIM KHI CHECK – IN TẠI THÁI EXPRESS AEON BÌNH DƯƠNG",
//     description: `Chào đón sự trở lại của Thái Express Aeon Bình Dương với chương trình tặng món siêu hấp dẫn Từ 15/08 – 31/08/2022, nhà hàng mến tặng 01 MỰC SỐT […]`,

//     img: "images/km2.jpg",
//   },
//   {
//     productSaleID: 3,
//     name: "NHẬN NGAY VOUCHER 100K TỪ THAI EXPRESS",
//     description: `Tặng ngay voucher trị giá 100k (cả VAT) cho hóa đơn 500k (cả VAT). Điều kiện áp dụng: • Có áp dụng lũy kế tối đa 300.000đ • Có áp […]
//             `,

//     img: "images/km3.jpg",
//   },
//   {
//     productSaleID: 4,
//     name: "TẢI APP RINH QUÀ – NHẬN NGAY VOUCHER 100K",
//     description: `Ưu đãi bùng cháy – Tặng voucher 100k dành cho tất cả khách hàng cài đặt ứng dụng RedPlus và đăng ký tài khoản lần đầu. Khách hàng có thể […]`,

//     img: "images/km4.jpg",
//   },
//   {
//     productSaleID: 5,
//     name: "THAI EXPRESS CHÚC MỪNG NGÀY CỦA MẸ",
//     description: `💖 Nhân dịp Ngày của Mẹ, Thai Express xin gửi đến những ai đã, đang và sẽ làm mẹ những lời yêu thương ngọt ngào nhất.   Nhân Ngày của […].`,

//     img: "images/km5.jpg",
//   },
//   {
//     productSaleID: 6,
//     name: "ĂN CỰC ĐÃ – ĐỔI CGV CỰC PHÊ",
//     description: `VUI TẾT SONGKRAN – ĐẾN THAIEXPRESS ĐỔI VÉ XEM PHIM HAY Mừng ngày lễ té nước lớn nhất trong năm của người Thái, ThaiExpress trân trọng dành tặng bạn 1 […]`,

//     img: "images/km6.jpg",
//   },
// ];

// var saveMeals = JSON.stringify(listSaleMenus);
// localStorage.setItem("listSaleMenu", saveMeals);
var listSaleMenus = JSON.parse(localStorage.getItem("listSaleMenu"));

function showSaleMenu(listSaleMenus) {
  let data = "";
  for (i = 0; i < listSaleMenus.length; i++) {
    data += `
    <div class="box">
      <img src="${listSaleMenus[i].img}" alt="" />
      <div class="content">
        <h3> ${listSaleMenus[i].name}</h3>
        <p>
          ${listSaleMenus[i].description}
        </p>
        <a href="https://thaiexpress.vn/category/tin-tuc/" class="btn">
          XEM THÊM
        </a>
      </div>
    </div>;
    `;
  }
  document.getElementById("showGallery").innerHTML = data;
}
showSaleMenu(listSaleMenus);
