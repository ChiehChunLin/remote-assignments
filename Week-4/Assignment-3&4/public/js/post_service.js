const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

//-------------------------------------
//------   DOM Event Handler ----------
//--------------------------------------
$(".arrowBtn").each(function (index) {
  $(this).on("click", function (e) {
    const $arrowBtn = $(e.target);
    const $postContentDiv = $(e.target.parentNode.parentNode.children[1]);
    console.log($postContentDiv);
    if ($postContentDiv.is(":hidden")) {
      $postContentDiv.show();
      $arrowBtn.attr("src", "/public/icons/angle-small-up.svg");
    } else {
      $postContentDiv.hide();
      $arrowBtn.attr("src", "/public/icons/angle-small-down.svg");
    }
  });
});
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
    .catch((err) => {
      $(".message").text(err);
      console.error("fetch error:", err);
    });
}
function renderPost(post) {
  const containerDiv = document.querySelector(".postContainer");
  const postDiv = document.createElement("div");
  $(postDiv).addClass("postText");
  contentDiv.appendChild(postDiv);
  containerDiv.innerHTML = `
      <div class="postRow">
          <h4>${post.title}</h4>
          <img class="arrowBtn" src="/public/icons/angle-small-down.svg" style="height:23px;width:23px" alt="down">
      </div>
      <div class="postRow postContent" hidden>
          <p>${post.content}</p>
     </div>            
     <div class="postRow">
          <span>by ${post.author}</span>
          <span>${post.timestamp}</span>
     </div>
    `;
}
function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}
