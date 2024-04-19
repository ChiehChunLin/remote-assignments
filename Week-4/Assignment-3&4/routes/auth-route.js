const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { newUser, findUser } = require("../db/user-model");

//---------------------------------
//------      Routes --------------
//---------------------------------
router.get("/", async (req, res) => {
  const email = req.cookies.user_account;
  const user = email ? await findUser(email) : undefined;
  res.render("index", { user });
});

router.get("/login", async (req, res) => {
  console.log("flash:" + !req.flash("message"));
  const message = !req.flash("message") ? req.flash("message") : undefined;
  res.render("login", { user: undefined, message });
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
  const message = !!req.flash("message") ? undefined : req.flash("message");
  res.render("signup", { user: undefined, message });
});

router.post("/signup", async (req, res, next) => {
  const { username, email, password } = req.body;
  const messagePW = verificationOfPassword(password);
  if (messagePW != undefined) {
    req.flash("message", messagePW);
    return res.redirect("/signup");
  }
  const messageEmail = verificationOfEmail(email);
  if (messageEmail != undefined) {
    req.flash("message", messageEmail);
    return res.redirect("/signup");
  }
  try {
    const user = await findUser(email);
    if (user != undefined) {
      console.log("signup user duplicated:" + JSON.stringify(user));
      req.flash("message", "Email has already been registered.");
      res.redirect("/signup");
    } else {
      const passwordHash = await bcrypt.hash(password, saltRounds); //length:60
      const user = await newUser(username, email, passwordHash);
      console.log(`${user.username} register successfully`);
      req.flash("message", "Registration succeeds. You can login now.");
      res.redirect("/login");
    }
  } catch (err) {
    req.flash("message", err.message);
    res.redirect("/signup");
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("user_account");
  req.flash("message", "Logout successfully!");
  res.redirect("/login");
});

//---------------------------------
//------      Functions -----------
//---------------------------------
function verificationOfPassword(password) {
  //Check Complexity Of Password
  if (password.length < 8) {
    return "password should be at least 8 characters.";
  } else if (!/[A-Z]/.test(password)) {
    return "password should be at least one UpperCase";
  } else if (!/[a-z]/.test(password)) {
    return "password should be at least one LowerCase";
  } else if (!/\d/.test(password)) {
    return "password should be at least one Number";
  } else {
    return undefined;
  }
  // } else if (!/\W/.test(password)) {
  //   return "password should be at least non-alphas"; //特殊符號
  // }
}
function verificationOfEmail(email) {
  if (!/[@.]/.test(email)) {
    return "email without domain address.";
  } else {
    return undefined;
  }
}

module.exports = router;
