// var users = [
//   {
//     email: "abcd@gmail.com",
//     fullname: "Lê Hoàng",
//   },
//   {
//     email: "abc@gmail.com",
//     fullname: "Sơn Nguyễn",
//   },
//   {
//     email: "abc123@gmail.com",
//     fullname: "Nguyễn Vượng",
//   },
// ];

// var comments = [
//   {
//     id: 0,
//     user_Email: "abc@gmail.com",
//     content: "Chất lượng tuyệt vời!",
//   },
//   {
//     id: 1,
//     user_Email: "abcd@gmail.com",
//     content: "Không gian quán rất đẹp!",
//   },
//   {
//     id: 2,
//     user_Email: "abc123@gmail.com",
//     content: "Mình chắc chắn sẽ quay lại",
//   },
// ];
function renderMarquee() {
  return `
                <marquee direction="left">
                <div class="swiper-wrapper" id="reviewUser"
                    style="color:black;height:30rem;font-size: 1rem;padding: 0 1rem;">

                </div>
            </marquee>
        `;
}
document.getElementById("marquee").innerHTML = renderMarquee();
let users = JSON.parse(localStorage.getItem("listUserRegister"));
console.log(users);

// var saveComments = JSON.stringify(comments);
// localStorage.setItem("listComments", saveComments);

// Lấy commnent --> userID-->user

function getComments() {
  var listComments = JSON.parse(localStorage.getItem("listComments"));
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(listComments);
    }, 1000);
  });
}

function getUsersByIds(userIds) {
  return new Promise(function (resolve) {
    var result = users.filter(function (user) {
      return userIds.includes(user.email);
    });
    setTimeout(function () {
      resolve(result);
    }, 1000);
  });
}

getComments()
  .then(function (comments) {
    //   console.log(comments);
    var userEmails = comments.map(function (comment) {
      return comment.user_Email;
    });
    return getUsersByIds(userEmails).then(function (users) {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    var reviewUser = document.querySelector("#reviewUser");
    var html = "";
    data.comments.forEach((comment) => {
      var user = data.users.find(function (user) {
        return user.email === comment.user_Email;
      });
      html += ` <div class="box review">
                        <img src="..." alt="">
                        <h3>${user.fullname}</h3>
                        <p>${comment.content}</p>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>`;
    });
    reviewUser.innerHTML = html;
  });

function upReview() {
  if (sessionStorage.getItem("username") != null) {
    let listComments = JSON.parse(localStorage.getItem("listComments"));
    if (listComments != null) {
      console.log(listComments);
      let inpReview = document.getElementById("inpReview");
      let comment = {
        user_Email: sessionStorage.getItem("username"),
        content: inpReview.value,
        date: "",
        time: "",
      };
      inpReview.value = "";
      listComments.push(comment);
      localStorage.setItem("listComments", JSON.stringify(listComments));
      getComments();
      document.getElementById("marquee").innerHTML = renderMarquee();
    } else {
      listComments = [];
      let inpReview = document.getElementById("inpReview");

      let comment = {
        user_Email: sessionStorage.getItem("username"),
        content: inpReview.value,
        date: "",
        time: "",
      };
      inpReview.value = "";
      listComments.push(comment);
      localStorage.setItem("listComments", JSON.stringify(listComments));
      getComments();
      document.getElementById("marquee").innerHTML = renderMarquee();
    }
  }
}
