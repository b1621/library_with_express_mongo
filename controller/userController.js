const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");

exports.authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("user already exist");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});

exports.getAllUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "get all user",
  });
});
