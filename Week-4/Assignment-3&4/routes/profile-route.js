const router = require("express").Router();
const { findUser } = require("../db/user-model");
const {
  getArticlesByAuthor,
  getArticlesByEmail,
  newArticle,
} = require("../db/article-model");

//---------------------------------
//------      Routes --------------
//---------------------------------

router.get("/:username/myProfile", async (req, res) => {
  const email = req.cookies.user_account;
  if (email) {
    const user = await findUser(email);
    const message = !!req.flash("message") ? req.flash("message") : undefined;
    res.render("profile", { user, message });
  } else {
    req.flash("message", "User account has been expired!");
    res.redirect("/login");
  }
});

router.get("/getArticles", async (req, res) => {
  const email = req.cookies.user_account;
  if (email) {
    // const posts = await getArticlesByEmail(email);
    const user = await findUser(email);
    const posts = await getArticlesByAuthor(user.username);
    res.send({ posts, message: `${posts.length} post(s) up to date!` });
  } else {
    req.flash("message", "User account has been expired!");
    res.redirect("/login");
  }
});

router.post("/:username/postText", async (req, res) => {
  const { title, content } = req.body;
  const { username } = req.params;
  const article = await newArticle(username, title, content);
  console.log(`${article.title} posts successfully`);
  req.flash("message", `[${article.title}] is posted successfully`);
  res.redirect(`/${username}/myProfile`);
});

module.exports = router;
