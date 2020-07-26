const express = require("express");
const mustache = require("mustache-express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const app = express();
const loginRoutes = require("./routes/login");
const userRoutes = require("./routes/user");
const mapRoutes = require("./routes/map");

const PORT = process.env.PORT || 3030;
app.set("view engine", "html");
app.engine("html", mustache());
app.set("views", "views");
app.use(express.static(path.join(__dirname, "views", "client-app", "build")));
// TODO: check if not needed
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("hello there");
});

app.use(loginRoutes);
app.use(userRoutes);
app.use(mapRoutes);
app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});
