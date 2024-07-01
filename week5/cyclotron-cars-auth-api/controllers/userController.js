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
  //   console.log("username", username, "password", password);
  try {
    // hash the password using bcrypt and salt factor 10
    const hashedPassword = await bcrypt.hash(password, 10);
    // user model to be saved using the hashedpassword
    const user = await createUser(username, hashedPassword);
    res.status(201).json(user);
  } catch (error) {
    res
      .status(400)
      .json({ error: "User register error, maybe the user exists" });
  }
};

// Login User
// user exists?
// password correct?
const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await findUserByUsername(username);
  if (user && (await bcrypt.compare(password, user.password))) {
    // create a json web token
    const token = jwt.sign(
      { userId: user.id, userName: user.username }, //as a token encode info and respond to the client
      "SECRET KEY" //setup env variable for secret key
    );
    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: "Invalid Credentials" });
  }
};

//export:
module.exports = { register, login };
