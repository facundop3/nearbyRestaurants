const express = require("express");
const mustache = require("mustache-express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const app = express();
const loginRoutes = require("./server-routes/login");
const mapRoutes = require("./server-routes/map");
const adminRoutes = require("./server-routes/admin");

const PORT = process.env.PORT || 3030;
app.set("view engine", "html");
app.engine("html", mustache());
app.set("views", "build");
app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());
app.use(loginRoutes);
app.use(mapRoutes);
app.use("/admin", adminRoutes);
app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});
