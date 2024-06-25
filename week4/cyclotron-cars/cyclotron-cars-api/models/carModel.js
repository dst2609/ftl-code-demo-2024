const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function gets all the cars
const getAllCars = async (filter = {}, orderBy = {}) => {
  return prisma.car.findMany({
    where: filter,
    orderBy: orderBy,
  });
};

//Function to get car by ID
const getCarById = async (id) => {
  return prisma.car.findUnique({ where: { id: parseInt(id) } });
};

//Function to create a new car
const createCar = async (carData) => {
  return prisma.car.create({ data: carData });
};

//Function to update a car
const updateCar = async (id, carData) => {
  return prisma.car.update({
    where: { id: parseInt(id) },
    data: carData,
  });
};

//Function to delete a car
const deleteCar = async (id) => {
  return prisma.car.delete({ where: { id: parseInt(id) } });
};

//export the functions
module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
