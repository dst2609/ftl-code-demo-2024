import React, { useState, useEffect } from "react";
import axios from "axios";

const CarForm = ({ car, fetchCars, setSelectedCar }) => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    condition: "",
    fuel: "",
  });

  useEffect(() => {
    if (car && car.id) {
      setFormData(car);
    }
  }, [car]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const carData = {
      ...formData,
      year: parseInt(formData.year, 10), // Ensure year is an integer
    };
    try {
      if (car && car.id) {
        await axios.put(`http://localhost:3000/cars/${car.id}`, carData);
      } else {
        await axios.post("http://localhost:3000/cars", carData);
      }
      fetchCars();
      setSelectedCar(null);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="make"
        value={formData.make}
        onChange={handleChange}
        placeholder="Make"
      />
      <input
        name="model"
        value={formData.model}
        onChange={handleChange}
        placeholder="Model"
      />
      <input
        name="year"
        value={formData.year}
        onChange={handleChange}
        placeholder="Year"
        type="number"
      />
      <input
        name="condition"
        value={formData.condition}
        onChange={handleChange}
        placeholder="Condition"
      />
      <input
        name="fuel"
        value={formData.fuel}
        onChange={handleChange}
        placeholder="Fuel"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CarForm;
