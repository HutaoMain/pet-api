const router = require("express").Router();
const MedicalHistoryController = require("../controllers/MedicalHistoryController");

router.post("/create", MedicalHistoryController.createMedicalHistory);

router.get("/list", MedicalHistoryController.getMedicalHistoryList);

router.get("/:id", MedicalHistoryController.getMedicalHistoryById);

router.delete("/delete/:id", MedicalHistoryController.deleteMedicalHistoryById);

router.put("/update/:id", MedicalHistoryController.updateMedicalHistoryById);

router.get("/petId/:id", MedicalHistoryController.getMedicalHistoryListByPetId);

module.exports = router;
