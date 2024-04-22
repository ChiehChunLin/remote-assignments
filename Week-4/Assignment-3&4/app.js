const express = require("express");
const authRoute = require("./routes/auth-route");
const profileRoute = require("./routes/profile-route");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.set("view engine", "ejs");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false, // false to store anything before user logs in.
    cookie: {
      httpOnly: true,
      sameSite: "none",
      // secure: true, //secure makes flash doesn't work
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);
app.use(flash());
app.use(authRoute);
app.use(profileRoute);
app.use("/public", express.static("public"));

//---------------------------------
//------      Routes --------------
//---------------------------------

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status).send({ message: `Oops!! ${err}` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
app.on("close", () => {
  res.clearCookie("user_account");
});
