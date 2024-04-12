const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const session = require("express-session");
const flash = require("connect-flash");
const app = express();
dotenv.config();

app.use(express.static("public"));
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());

function checkCalculationLimit(val) {
  // In JavaScript, the Number type represents all numeric values, including integers and floating-point numbers,
  // using double-precision floating-point format (64 bits).
  // If numbers are represented as 64-bit floating-point numbers, the result may lose precision if it exceeds the maximum safe integer value (Number.MAX_SAFE_INTEGER)
  // , which is 9,007,199,254,740,991.
  // This means that JavaScript can represent numbers with approximately 15-17 significant decimal digits of precision.
  //
  // For the 1+2+3+...+N formula is ((1 + n) * n) / 2), the maximun input n should be 10^7.
  const limit = Math.pow(10, 7);
  if (val > limit) return false;
  return true;
}

//---------------------------------
//------      Routes --------------
//---------------------------------
app.get("/", (req, res) => {
  const message = req.flash("message");
  res.render("index", { message });
});

app.get("/myName", (req, res) => {
  const { name } = req.cookies;
  const message = req.flash("message");
  res.render("myName", { name, message });
});

app.post("/trackName", (req, res) => {
  // const { name } = req.query;  //use fetch get url
  const { name } = req.body;
  console.log("post:" + name);
  if (name.trim() !== "") {
    res.cookie("name", name.trim());
  } else {
    req.flash("message", "New Name Error!");
  }
  res.redirect("/myName");
});

app.get("/data", (req, res) => {
  const { number } = req.query;
  if (number === undefined) {
    req.flash("message", "Lack of Parameter");
  } else if (Number.isNaN(parseInt(number))) {
    req.flash("message", "Wrong Parameter");
  } else if (Number(number) < 1) {
    req.flash("message", "Wrong Parameter");
  } else {
    const n = Number(number);
    //(Optional)Think about what will happen when N is very large
    if (!checkCalculationLimit(n)) {
      req.flash(
        "message",
        "The maximun input should less than 10^7 for precision"
      );
    } else {
      const result = (((1 + n) * n) / 2).toFixed(0);
      req.flash("message", `The result: ${result}`);
    }
  }
  res.redirect("/");
});

app.post("/data", (req, res) => {
  // let { number } = req.query;  // value from url
  let { number } = req.body; // value from post method
  let message = undefined;

  console.log("post:" + number);
  if (number === undefined) {
    message = "Lack of Parameter";
  } else if (Number.isNaN(parseInt(number))) {
    message = "Wrong Parameter";
  } else if (Number(number) < 1) {
    message = "Wrong Parameter";
  } else {
    const n = Number(number);
    //(Optional)Think about what will happen when N is very large
    if (!checkCalculationLimit(n)) {
      message = "The maximun input should less than 10^7 for precision";
    } else {
      const result = (((1 + n) * n) / 2).toFixed(0);
      message = `The result: ${result}`;
    }
  }
  res.send({ message });
});

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

//-----------------------------------
//----------- Assignment-5 ----------
//-----------------------------------
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
const result = twoSum([2, 7, 11, 15], 9);
console.log(result);
