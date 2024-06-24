// In-memory array of cars
let cars = [
  {
    id: 1,
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    condition: "new",
    fuel: "electric",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2020,
    condition: "new",
    fuel: "gasoline",
  },
  {
    id: 3,
    make: "Acura",
    model: "Integra",
    year: 2000,
    condition: "new",
    fuel: "gasoline",
  },
  {
    id: 4,
    make: "Honda",
    model: "Civic",
    year: 2021,
    condition: "used",
    fuel: "gasoline",
  },
  {
    id: 5,
    make: "Acura",
    model: "Integra",
    year: 1999,
    condition: "used",
    fuel: "gasoline",
  },
];

// Function gets all the cars
const getAllCars = async () => {
  return cars;
};

//Function to get car by ID
const getCarById = async (id) => {
  return cars.find((car) => car.id === parseInt(id));
};

//Function to create a new car
const createCar = async (newCar) => {
  const newId = cars.length ? cars[cars.length - 1].id + 1 : 1;
  newCar.id = newId;
  cars.push(newCar);
  return newCar;
};

//Function to update a car
const updateCar = async (id, updatedCar) => {
  const index = cars.findIndex((car) => car.id === parseInt(id));
  if (index !== -1) {
    cars[index] = { ...cars[index], ...updatedCar };
    return cars[index];
  }
  return null;
};

//Function to delete a car
const deleteCar = async (id) => {
  const index = cars.findIndex((car) => car.id === parseInt(id));
  if (index !== -1) {
    const deletedCar = cars.splice(index, 1);
    return deletedCar[0];
  }
  return null;
};

//export the functions
module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
