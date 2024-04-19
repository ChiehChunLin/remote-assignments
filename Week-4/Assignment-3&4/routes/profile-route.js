const router = require("express").Router();
const { findUser } = require("../db/user-model");
const {
  getArticlesByEmail,
  newArticle,
  findArticlesByIdRange,
} = require("../db/article-model");

//---------------------------------
//------      Routes --------------
//---------------------------------

router.get("/:username/myProfile", async (req, res) => {
  const email = req.cookies.user_account;
  if (email) {
    const user = await findUser(email);
    const message = req.flash("message");
    const posts = await getArticlesByEmail(email);
    res.render("profile", { user, posts, message });
  } else {
    req.flash("message", "User account has been expired!");
    res.redirect("/login");
  }
});

router.get("/myArticles", async (req, res) => {
  const email = req.cookies.user_account;
  console.log(email);
  if (email) {
    console.log("getPosts");
    const posts = await getArticlesByEmail(email);
    // console.log(posts);
    res.send({ posts, message: `${posts.length} post(s) up to date!` });
  } else {
    console.log("redirect login");
    req.flash("message", "User account has been expired!");
    res.redirect("/login");
  }
});
router.get("/myArticlesByRange", async (req, res) => {
  const email = req.cookies.user_account;
  if (email) {
    const posts = await findArticlesByIdRange(7, 12);
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
  const message = `[${article.title}] is posted successfully`;
  req.flash("message", message);
  res.redirect(`/${username}/myProfile`);
});

module.exports = router;
