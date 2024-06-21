const express = require("express");
const app = express();
const port = 3000;

// In-memory array of cars
let cars = [
  { id: 1, make: "Tesla", model: "Model 3", year: 2023 },
  { id: 2, make: "Honda", model: "Civic", year: 2020 },
  { id: 3, make: "Acura", model: "Integra", year: 2000 },
  { id: 4, make: "Honda", model: "Civic", year: 2021 },
  { id: 5, make: "Acura", model: "Integra", year: 1999 },
];

//lets you send json responses and also accept requests in json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Happy International Yoga Day");
});

app.get("/cars", (req, res) => {
  let filteredCars = cars;
  //   const { make } = req.query;
  //   console.log(make);

  //   const { query } = req.query;
  //   console.log(query.make);

  //checking if the query has a make
  if (req.query.make) {
    console.log("In the if statement", req.query.make);
    //filter the cars
    filteredCars = filteredCars.filter(
      (car) => car.make.toLowerCase() === req.query.make.toLowerCase()
    );
  }

  //checking if the query has a year

  if (req.query.year) {
    filteredCars = filteredCars.filter(
      (car) => car.year === parseInt(req.query.year)
    );
  }

  //send response for filteredCars
  res.json(filteredCars);
});

// Handle 404 - Not Found
app.use((req, res, next) => {
  res.status(404).send("Sorry! Page not found.... :(");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
