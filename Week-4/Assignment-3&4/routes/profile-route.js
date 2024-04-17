const router = require("express").Router();
const { findUser } = require("../db/user-model");
const { getArticlesByAuthor, getArticleById } = require("../db/article-model");

router.get("/myProfile", async (req, res) => {
  const username = ""; //req.params.username;
  const email = req.cookies.user_account;
  console.log(`username myProfile: ${username} / ${email}`);
  const user = await findUser(email);
  if (user == undefined) {
    req.flash("message", "User account has been expired!");
    res.redirect("/login");
  } else {
    res.render("profile", { user, message: undefined });
  }
});

module.exports = router;
