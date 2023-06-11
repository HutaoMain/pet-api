const router = require("express").Router();
const StaffController = require("../controllers/StaffController");

router.post("/create", StaffController.createStaff);

router.get("/list", StaffController.getStaffList);

router.get("/:id", StaffController.getStaffById);

router.delete("/delete/:id", StaffController.deleteStaffById);

router.put("/update/:id", StaffController.updateStaffById);

module.exports = router;
