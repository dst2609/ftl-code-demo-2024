import React, { useEffect, useState } from "react";
import axios from "axios";
import CarForm from "../CarForm/CarForm";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [make, setMake] = useState("");
  const [sort, setSort] = useState("");

  const fetchCars = async (params = {}) => {
    try {
      const response = await axios.get("http://localhost:3000/cars", {
        params,
      });
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

  const handleApply = () => {
    const params = {};
    if (make) params.make = make;
    if (sort) params.sort = sort;
    fetchCars(params);
  };

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
      <div>
        <label>
          Filter by Make:
          <input
            type="text"
            value={make}
            onChange={(e) => setMake(e.target.value)}
          />
        </label>
        <label>
          Sort by Make:
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
        <button onClick={handleApply}>Apply</button>
      </div>
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
