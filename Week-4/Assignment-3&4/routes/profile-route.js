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
    const message = !req.flash("message") ? req.flash("message") : undefined;
    console.log("flash:" + req.flash("message")[0]);
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
    // console.log(posts);
    res.send({ posts, message: `${posts.length} post(s) up to date!` });
  } else {
    req.flash("message", "User account has been expired!");
    res.redirect("/login");
  }
});
router.get("/myArticlesByRange", async (req, res) => {
  const email = req.cookies.user_account;
  if (email) {
    const posts = await findArticlesByIdRange(7, 12);
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
  const message = `[${article.title}] is posted successfully`;
  console.log(message); //well done
  req.flash("message", message);
  res.redirect(`/${username}/myProfile`);
});

module.exports = router;
