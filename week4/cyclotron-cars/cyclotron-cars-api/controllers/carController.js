// import carModel
const carModel = require("../models/carModel");

// Function gets all the cars
const getAllCars = async (req, res) => {
  try {
    const cars = await carModel.getAllCars();
    res.status(200).json(cars);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to get car by ID
const getCarById = async (req, res) => {
  try {
    const car = await carModel.getCarById(req.params.id);
    if (car) {
      res.status(200).json(car);
    } else {
      res.status(404).json({ error: "Car not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to create a new car
const createCar = async (req, res) => {
  try {
    const newCar = await carModel.createCar(req.body);
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to update a car
const udpateCar = async (req, res) => {
  try {
    const updatedCar = await carModel.updateCar(req.params.id, req.body);
    if (updatedCar) {
      res.status(200).json(updatedCar);
    } else {
      res.status(404).json({ error: "Car not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to delete a car
const deleteCar = async (req, res) => {
  try {
    const deletedCar = await carModel.deleteCar(req.params.id);
    if (deletedCar) {
      res.status(200).json(deletedCar);
    } else {
      res.status(404).json({ error: "Car not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//export the functions
module.exports = {
  getAllCars,
  getCarById,
  createCar,
  udpateCar,
  deleteCar,
};
