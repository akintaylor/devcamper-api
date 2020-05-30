const asyncHandler = require("../middlewares/async");
const ErrorResponse = require("../utils/ErrorResponse");
const User = require("../models/User");

/**
 * @description Get all users
 * @route GET /api/v1/users
 * @access private/admin
 */
exports.getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

/**
 * @description Get all users
 * @route GET /api/v1/users/:id
 * @access private/admin
 */
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

/**
 * @description Create user
 * @route POST /api/v1/users
 * @access private/admin
 */
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
});

/**
 * @description Update user
 * @route PUT /api/v1/users/:id
 * @access private/admin
 */
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

/**
 * @description Delete user
 * @route DELETE /api/v1/users/:id
 * @access private/admin
 */
exports.deleteUser = asyncHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
});
