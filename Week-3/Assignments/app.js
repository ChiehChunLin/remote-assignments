const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const appPort = 3000;
const app = express();
app.use("/public", express.static("public"));
app.use(express.static("public"));
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

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
  res.render("index", { message: undefined });
});

app.get("/myName", (req, res) => {
  const { name } = req.cookies;
  res.render("myName", { name });
});

app.post("/trackName", (req, res) => {
  let { name } = req.query;
  console.log("post:" + name);

  if (name) {
    res.cookie("name", name);
    res.redirect("/myName");
  } else {
    res.send({ message: `newName: ${name} Error!` });
  }
});

app.get("/data", (req, res) => {
  const { number } = req.query;
  if (number === undefined) {
    res.render("index", { message: `Lack of Parameter` });
  } else {
    const n = Number(number);
    if (Number.isInteger(n) && n > 0) {
      //(Optional)Think about what will happen when N is very large
      if (!checkCalculationLimit(n)) {
        res.render("index", {
          message: `The maximun input should less than 10^7 for precision`,
        });
      }
      const result = (((1 + n) * n) / 2).toFixed(0);
      res.render("index", { message: `The result: ${result}` });
    } else {
      res.render("index", { message: `Wrong Parameter` });
    }
  }
});

app.post("/data", (req, res) => {
  let { number } = req.query;
  console.log("post:" + number);
  if (number === undefined) {
    res.send({ message: `Lack of Parameter` });
  } else {
    const n = Number(number);
    if (Number.isInteger(n) && n > 0) {
      //(Optional)Think about what will happen when N is very large
      if (!checkCalculationLimit(n)) {
        res.send({
          message: `The maximun input should less than 10^7 for precision`,
        });
      }
      const result = (((1 + n) * n) / 2).toFixed(0);
      res.send({ message: `The result: ${result}` });
    } else {
      res.send({ message: `Wrong Parameter` });
    }
  }
});

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  res.send({ message: `Oops!! Server Error !!!!` });
});

app.listen(appPort, () => {
  console.log(`Server running on port ${appPort}.`);
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
