const router = require("express").Router();
const { findUser } = require("../db/user-model");
const {
  getArticlesByEmail,
  newArticle,
  findArticlesByIdRange,
} = require("../db/article-model");

//---------------------------------
//------      Middleware --------------
//---------------------------------
function authCheck(req, res, next) {
  // console.log("session user:" + req.session.user_account);
  // console.log("session id: " + req.sessionID);
  if (req.sessionID == req.cookies.user_id) {
    console.log("authenticated");
    next();
  } else {
    console.log("not authenticated");
    req.flash("message", "User account has been expired!");
    return res.redirect(`/login`);
  }
}

//---------------------------------
//------      Routes --------------
//---------------------------------
router.get("/", async (req, res) => {
  const email = req.session.user_account;
  const user = email ? await findUser(email) : undefined;
  res.render("index", { user });
});

router.get("/:username/myProfile", authCheck, async (req, res) => {
  const email = req.session.user_account;
  const user = await findUser(email);
  const message = req.flash("message");
  const posts = await getArticlesByEmail(email);
  res.render("profile", { user, posts, message });
});

router.post("/postText", authCheck, async (req, res) => {
  const { username, title, content } = req.body;
  const article = await newArticle(username, title, content);
  res.send({
    posts: [article],
    message: `[${article.title}] is posted successfully`,
  });
});

router.get("/myArticles", authCheck, async (req, res) => {
  const email = req.session.user_account;
  const posts = await getArticlesByEmail(email);
  res.send({ posts, message: `${posts.length} post(s) up to date!` });
});
router.get("/myArticlesByRange", authCheck, async (req, res) => {
  const posts = await findArticlesByIdRange(7, 12);
  res.send({ posts, message: `${posts.length} post(s) up to date!` });
});

module.exports = router;
