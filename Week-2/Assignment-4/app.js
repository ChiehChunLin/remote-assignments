const msgDiv = document.querySelector(".banner");
msgDiv.addEventListener("click", () => {
  console.log(msgDiv);

  if (msgDiv.children.length == 1) {
    msgDiv.innerHTML =
      "<h1>Hi! This is Cherry!</h1><span>Let's work hard, play hard together!</span>";
  } else {
    msgDiv.innerHTML = "<h1>Have a Good Time!</h1>";
  }
});

// row3.style.display = "none";

const showBtn = document.querySelector("#showBtn");
showBtn.addEventListener("click", () => {
  console.log(showBtn);
  const row3 = document.querySelector(".row3");
  if (row3.style.display === "flex") {
    row3.style.display = "none";
    showBtn.innerText = "Call to Action";
  } else {
    row3.style.display = "flex";
    showBtn.innerText = "Hide the Block";
  }
});
