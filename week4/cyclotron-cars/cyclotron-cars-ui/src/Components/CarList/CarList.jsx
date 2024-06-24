import React, { useEffect, useState } from "react";
import axios from "axios";
import CarForm from "../CarForm/CarForm";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  const fetchCars = async () => {
    try {
      const response = await axios.get("http://localhost:3000/cars");
      console.log("Fetched cars:", response.data); // Log the response data
      setCars(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching cars:", error);
      setCars([]); // Set to empty array on error
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/cars/${id}`);
      fetchCars();
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  return (
    <div>
      <h1>Car List</h1>
      <button onClick={() => setSelectedCar({})}>Add Car</button>
      {selectedCar && (
        <CarForm
          car={selectedCar}
          fetchCars={fetchCars}
          setSelectedCar={setSelectedCar}
        />
      )}
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.make} {car.model} ({car.year}) - {car.condition} - {car.fuel}
            <button onClick={() => setSelectedCar(car)}>Edit</button>
            <button onClick={() => handleDelete(car.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
