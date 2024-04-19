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
    console.log("flash:" + req.flash("message"));
    const message = !req.flash("message") ? req.flash("message") : undefined;
    res.render("profile", { user, message });
  } else {
    req.flash("message", "User account has been expired!");
    res.redirect("/login");
  }
});

router.get("/myArticles", async (req, res) => {
  const email = req.cookies.user_account;
  if (email) {
    const posts = await getArticlesByEmail(email);
    // const user = await findUser(email);
    // const posts = await getArticlesByAuthor(user.username);
    // console.log(posts);
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
  const message = `[${article.title}] is posted successfully`;
  req.flash("message", message);
  res.redirect(`/${username}/myProfile`);
  // res.render(`/${username}/myProfile`, { message });
  // res.send({ message });
});

module.exports = router;
