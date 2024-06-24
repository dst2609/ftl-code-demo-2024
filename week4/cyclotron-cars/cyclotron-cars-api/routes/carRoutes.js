const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");

// get all the cars
router.get("/", carController.getAllCars);
//get car by ID
router.get("/:id", carController.getCarById);
//add a new car
router.post("/", carController.createCar);
//create a new car
router.put("/:id", carController.udpateCar);
//delete a car
router.delete("/:id", carController.deleteCar);

module.exports = router;
