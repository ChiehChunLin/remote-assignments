const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { newUser, findUser } = require("../db/user-model");

router.get("/login", (req, res) => {
  const message = req.flash("message");
  res.render("login", { message });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await findUser(email);
  if (!user) {
    req.flash("message", "User account doesn't exit!");
    res.redirect("/login");
  }
  const match = await bcrypt.compare(password, user.password);
  if (match) {
    res.cookie("user_account", user.email);
    res.redirect(`/${user.username}/myProfile`);
  } else {
    req.flash("message", "Wrong email or password!");
    res.redirect("/login");
  }
});

router.get("/signup", (req, res) => {
  const message = req.flash("message");
  res.render("signup", { message });
});

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await findUser(email);
  if (user === undefined) {
    const passwordHash = await bcrypt.hash(password, saltRounds); //length:60
    const user = await newUser(username, email, passwordHash);
    console.log(`${user.username} register successfully`);
    req.flash("message", "Registration succeeds. You can login now.");
    res.redirect("/login");
  } else {
    console.log("signup user duplicated:" + JSON.stringify(user));
    req.flash("message", "Email has already been registered.");
    res.redirect("/signup");
  }
});

router.get("logout", (req, res) => {
  res.clearCookie("user_account");
  req.flash("message", "Logout successfully!");
  res.redirect("/login");
});

module.exports = router;
