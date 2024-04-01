//==========================//
//         jQuery           //
//==========================//
const $msgDiv = $(".banner");
$msgDiv.on("click", function () {
  if (this.children.length == 1) {
    this.innerHTML =
      "<h1>Hi! This is Cherry!</h1><span>Let's work hard, play hard together!</span>";
  } else {
    this.innerHTML = "<h1>Have a Good Time!</h1>";
  }
});

const $showBtn = $("#showBtn");
$showBtn.on("click", function () {
  const $row3 = $(".row3");
  if ($row3.is(":hidden")) {
    $row3.show();
    this.innerText = "Hide the Block";
  } else {
    $row3.hide();
    this.innerText = "Call to Action";
  }
});

// const msgDiv = document.querySelector(".banner");
// msgDiv.addEventListener("click", () => {
//   if (msgDiv.children.length == 1) {
//     msgDiv.innerHTML =
//       "<h1>Hi! This is Cherry!</h1><span>Let's work hard, play hard together!</span>";
//   } else {
//     msgDiv.innerHTML = "<h1>Have a Good Time!</h1>";
//   }
// });

// const showBtn = document.querySelector("#showBtn");
// showBtn.addEventListener("click", () => {
//   const row3 = document.querySelector(".row3");
//   if (row3.style.display === "flex") {
//     row3.style.display = "none";
//     showBtn.innerText = "Call to Action";
//   } else {
//     row3.style.display = "flex";
//     showBtn.innerText = "Hide the Block";
//   }
// });
