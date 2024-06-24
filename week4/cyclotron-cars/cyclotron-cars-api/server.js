const express = require("express");
const PORT = 3000;
const carRoutes = require("./routes/carRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the backend -- You are currently at the / route");
});

//add car routes here
app.use("/cars", carRoutes);

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT}`);
});
