const express = require("express");
const path = require("path");
const hbs = require("hbs");
const methodOverride = require("method-override");

const indexRoutes = require("./app/Index/router");
const provinsiRoutes = require("./app/Provinsi/router");
const kabupatenRoutes = require("./app/Kabupaten/router");

const app = express();

// ambil req dari body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride("_method"));

// // ===================== SETTINGS ENGINE HBS ======================
app.set("view engine", "hbs");
// set partials
hbs.registerPartials(__dirname + "/views/partials");
// register folder public
app.use("/public", express.static(path.join(__dirname, "public")));
// // ===================== SETTINGS ENGINE HBS ======================

// // Middleware ===============================
app.use(indexRoutes);
app.use(provinsiRoutes);
app.use(kabupatenRoutes);

app.listen(5000, () => {
  console.log("Server runngint at 3000");
});
