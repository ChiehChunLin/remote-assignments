import express from "express";
import { config } from "dotenv";
config(); // and create a ".env" file in folder

const appPort = 8080;
const app = express();

// middlewares
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { user: req.user });
});

app.get("/*", (req, res) => {
  res.status(404).send("404 Error!");
});
//error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something is broken. We will fix it soon.");
});

app.listen(appPort, () => {
  console.log(`Server running on port ${appPort}.`);
});
