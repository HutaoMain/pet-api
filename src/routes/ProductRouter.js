const router = require("express").Router();
const ProductController = require("../controllers/ProductController");

router.post("/create", ProductController.createProduct);

router.get("/list", ProductController.getProductList);

router.get("/:id", ProductController.getProductById);

router.delete("/delete/:id", ProductController.deleteProductById);

router.put("/update/:id", ProductController.updateProductById);

module.exports = router;
