const router = require("express").Router();
const PetController = require("../controllers/PetController");

router.post("/create", PetController.createPet);

router.get("/list", PetController.getPetList);

router.get("/:id", PetController.getPetById);

router.delete("/delete/:id", PetController.deletePetById);

router.put("/update/:id", PetController.updatePetById);

module.exports = router;
