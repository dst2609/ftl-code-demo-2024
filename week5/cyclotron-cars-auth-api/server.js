const express = require("express");
const PORT = 3000;
const cors = require("cors");
const morgan = require("morgan");

//import the carRoutes
const carRoutes = require("./routes/carRoutes");

// Middleware
const app = express();
app.use(cors()); // Enable CORS middleware to handle cross-origin requests
app.use(morgan("dev"));
app.use(express.json()); //Enable the use of JSON data

app.get("/", (req, res) => {
  res.send("Hello from the backend -- You are currently at the / route");
});

//add car routes here
app.use("/cars", carRoutes);

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT}`);
});
