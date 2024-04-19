//-------------------------------------
//------   DOM Event Handler ----------
//--------------------------------------
// document.addEventListener("DOMContentLoaded", function () {
//   $(document).ready(function () {});
// });

const $msgDiv = $(".banner");
$msgDiv.on("click", function () {
  if (this.children.length == 1) {
    this.innerHTML =
      "<h1>Hi! This is Cherry!</h1><span>Let's work hard, play hard together!</span>";
  } else {
    this.innerHTML = "<h1>Have a Good Day!</h1>";
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
// $(".arrowBtn").each(function (index) {
//   $(this).on("click", function (e) {
//     const $arrowBtn = $(e.target);
//     const $postContentDiv = $(e.target.parentNode.parentNode.children[1]);
//     if ($postContentDiv.is(":hidden")) {
//       $postContentDiv.show();
//       $arrowBtn.attr("src", "/public/icons/angle-small-up.svg");
//     } else {
//       $postContentDiv.hide();
//       $arrowBtn.attr("src", "/public/icons/angle-small-down.svg");
//     }
//   });
// });

//-------------------------------------
//------       Functions     ----------
//--------------------------------------
$("#getPosts").on("click", getArticles);
function getArticles(e) {
  e.preventDefault();
  //   const articleUrl = `http://localhost:3000/${user.username}/myArticles`;
  const articleUrl = `http://localhost:3000/myArticles`;
  console.log("fetch:" + articleUrl);

  fetch(articleUrl)
    .then(checkStatus)
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        const { posts, message } = data;
        if (posts) {
          posts.map((post) => {
            renderPost(post);
          });
        }
        if (message) {
          $(".message").text(message);
        }
      }
    })
    .then(() => {
      $(".arrowBtn").each(function (index) {
        $(this).on("click", function (e) {
          const $arrowBtn = $(e.target);
          const $postContentDiv = $(e.target.parentNode.parentNode.children[1]);
          if ($postContentDiv.is(":hidden")) {
            $postContentDiv.show();
            $arrowBtn.attr("src", "/public/icons/angle-small-up.svg");
          } else {
            $postContentDiv.hide();
            $arrowBtn.attr("src", "/public/icons/angle-small-down.svg");
          }
        });
      });
    })
    .catch((err) => {
      $(".message").text(err);
      console.error("fetch error:", err);
    });
}
function renderPost(post) {
  const containerDiv = document.querySelector(".postContainer");
  const postDiv = document.createElement("div");
  $(postDiv).addClass("postText");
  postDiv.innerHTML = `
      <div class="postRow">
          <h4>${post.title}</h4>
          <img class="arrowBtn" src="/public/icons/angle-small-down.svg" style="height:23px;width:23px" alt="down">
      </div>
      <div class="postRow postContent" style="display: none;">
          <p>${post.content}</p>
     </div>            
     <div class="postRow">
          <span>by ${post.author}</span>
          <span>${post.timestamp}</span>
     </div>
    `;
  containerDiv.appendChild(postDiv);
}
function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

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
