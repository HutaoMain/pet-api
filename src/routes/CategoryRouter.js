const router = require("express").Router();
const categoryController = require("../controllers/CategoryController");

router.post("/create", categoryController.createCategory);

router.get("/:id", categoryController.findCategoryById);

router.get("/list", categoryController.findAllCategories);

module.exports = router;
