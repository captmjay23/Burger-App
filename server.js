const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

/* Front-end */
app.set("views", path.join(__dirname, "frontend/views"));
app.set("view engine", "ejs");
/* Serve Static files */
app.use("/static", express.static(path.join(__dirname, "frontend/static")));

/* Set up the middleware */
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* ROUTES */
const frontAppRoute = require("./backend/routes/app");

app.use("/", frontAppRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
