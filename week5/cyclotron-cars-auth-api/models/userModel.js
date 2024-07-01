const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function to Register user - (create - prisma)
const createUser = async (username, password) => {
  return await prisma.user.create({
    data: { username, password },
  });
};

// Function to Login user - (findUnique - prisma)
// find the user by id/username
const findUserByUsername = async (username) => {
  return await prisma.user.findUnique({
    where: { username },
  });
};

const findUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

module.exports = {
  createUser,
  findUserByUsername,
  findUserById,
};
