// import asyncHandler from "express-async-handler";
const asyncHandler = require("express-async-handler");
exports.registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "register user",
  });
});

exports.getAllUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "get all user",
  });
});
