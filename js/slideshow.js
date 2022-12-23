var slidesImg = [
  "images/sl1.jpg",
  "images/sl2.jpg",
  "images/sl3.jpg",
  "images/sl4.jpg",
  "images/sl5.jpg",
];
var saveSlidesImg = JSON.stringify(slidesImg);
localStorage.setItem("slideshow", saveSlidesImg);
var slidesListImg = JSON.parse(localStorage.getItem("slideshow"));
// console.log(slidesListImg);
function renderSlides(slidesImg) {
  let data = "";

  for (let i = 0; i < slidesImg.length; i++) {
    data += ` <div class="mySlides">
            <img src="${slidesImg[i]}" style="width: 100%">
      </div>
     `;
  }
  document.getElementById("showslide").innerHTML = data;
}

renderSlides(slidesListImg);

// slidesListImg.forEach((index) => {
//    data += ` <div class="mySlides">
//             <img src="${slidesImg[index]}" style="width: 100%">
//       </div>
//      `;
// });

let a = 1;
let slideIndex = "";
function random() {
  let a = Math.floor(Math.random() * 5);
  // console.log(a);

  slideIndex = a;
  showSlides(slideIndex);
}

setInterval(random, 5000);
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
