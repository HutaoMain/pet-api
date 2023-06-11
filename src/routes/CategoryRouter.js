const router = require("express").Router();
const CategoryController = require("../controllers/CategoryController");

router.post("/create", CategoryController.createCategory);

router.get("/list", CategoryController.getCategoryList);

router.get("/:id", CategoryController.getCategoryById);

router.delete("/delete/:id", CategoryController.deleteCategoryById);

router.put("/update/:id", CategoryController.updateCategoryById);

module.exports = router;
