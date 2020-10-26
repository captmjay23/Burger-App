const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

/* ROUTES Files */
const productRouteServices = require("./backend/routes/products");

/* Front-end */
app.set("views", path.join(__dirname, "frontend/views"));
app.set("view engine", "ejs");
/* Serve Static files */
app.use("/static", express.static(path.join(__dirname, "frontend/static")));

/* Set up the middleware */
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes App*/
app.use("/", productRouteServices);

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
  console.log(`Listening on port: ${PORT}`);
  // await create({ name: "Product THree", price: 200 });
  // await update({ id: 2, name: "New Product One", price: 330 });
  // await deleteProduct(2);
  // console.log("Result:", await retrieve());
});
