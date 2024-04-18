const router = require("express").Router();
const { findUser } = require("../db/user-model");
const {
  getArticlesByAuthor,
  getArticleById,
  newArticle,
} = require("../db/article-model");

//---------------------------------
//------      Functions -----------
//---------------------------------
function refreshArticles() {}
//---------------------------------
//------      Routes --------------
//---------------------------------
router.get("/:username/myProfile", async (req, res) => {
  const email = req.cookies.user_account;
  const user = await findUser(email);
  if (user == undefined) {
    req.flash("message", "User account has been expired!");
    res.redirect("/login");
  } else {
    res.render("profile", {
      user,
      message: undefined,
    });
  }
});

router.post("/postText", async (req, res) => {
  const { title, content } = req.body;
  const email = req.cookies.user_account;
  const user = await findUser(email);
  const article = await newArticle(user.username, title, content);
  console.log(`${article.title} posts successfully`);
  req.flash("message", `${article.title} posts successfully`);
  res.redirect(`/:username/myProfile`);
});

module.exports = router;
