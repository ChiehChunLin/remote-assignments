const router = require("express").Router();
const { findUser } = require("../db/user-model");
const { getArticlesByAuthor, getArticleById } = require("../db/article-model");

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

module.exports = router;
