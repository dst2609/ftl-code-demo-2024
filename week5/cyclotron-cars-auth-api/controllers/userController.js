const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  createUser,
  findUserByUsername,
  findUserById,
} = require("../models/userModel");

// REgister User
const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    // hash the password using bcrypt and salt factor 10
    const hashedPassword = await bcrypt.hash(password, 10);
    // user model to be saved using the hashedpassword
    const user = await createUser(username, hashedPassword);
  } catch (error) {
    res
      .status(400)
      .json({ error: "User register error, maybe the user exists" });
  }
};

// Login User

//export:
module.exports = { register };
