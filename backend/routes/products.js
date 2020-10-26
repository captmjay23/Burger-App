const express = require("express");
const router = express.Router();

/* Services */
const useProductService = require("../services/products");
const { create, retrieve, update, delete: deleteProduct } = useProductService();

router.get("/", async (req, res) => {
  try {
    const productList = await retrieve();

    res.render("index", productList);
  } catch (error) {
    console.log("GET/products:", error);
    res.status(500).json({
      status: "GET/products failed",
    });
  }
});

router.post("/products", async (req, res) => {
  const { name, price } = req.body;

  try {
    const isCreated = await create({ name, price });
    if (isCreated) {
      res.status(200).json({
        message: "Product Successfuly Created",
        data: true,
      });
    } else {
      res.status(500).json({
        message: "Product Not Successfuly Created",
        data: false,
      });
    }
  } catch (error) {
    console.log("POST/products:", error);
    res.status(500).json({
      status: "Create Error",
    });
  }
});
router.put("/products", async (req, res) => {
  const { id, name, price } = req.body;

  try {
    const isUpdated = await update({ id, name, price });
    if (isUpdated) {
      res.status(200).json({
        message: "Product Successfuly Updated",
        data: isUpdated,
      });
    } else {
      res.status(500).json({
        message: "Product Not Successfuly Updated",
        data: isUpdated,
      });
    }
  } catch (error) {
    console.log("PUT/products:", error);
    res.status(500).json({
      status: "Updating the products error",
    });
  }
});
router.delete("/products", async (req, res) => {
  const { id } = req.body;

  try {
    const isDeleted = await deleteProduct(id);
    if (isDeleted) {
      res.status(200).json({
        message: "Product Successfuly Deleted",
        data: isDeleted,
      });
    } else {
      res.status(500).json({
        message: "Product Not Successfuly Deleted",
        data: isDeleted,
      });
    }
  } catch (error) {
    console.log("DELETE/products:", error);
    res.status(500).json({
      status: "Deleting the products error",
    });
  }
});

module.exports = router;
