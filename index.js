const express = require("express");
const mustache = require("mustache-express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const app = express();
const loginRoutes = require("./routes/login");
const mapRoutes = require("./routes/map");
const adminRoutes = require("./routes/admin");

const PORT = process.env.PORT || 3030;
app.set("view engine", "html");
app.engine("html", mustache());
app.set("views", "views");
app.use(express.static(path.join(__dirname, "views", "client-app", "build")));
app.use(bodyParser.json());
app.use(loginRoutes);
app.use(mapRoutes);
app.use("/admin", adminRoutes);
app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});
