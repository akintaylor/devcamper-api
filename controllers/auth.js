const User = require("../models/User");
const ErrorResponse = require("../utils/ErrorResponse");
const asyncHandler = require("../middlewares/async");

/**
 * @description Register user
 * @route POST /api/v1/auth/register
 * @access public
 */
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Create user
  const user = await User.create({
    name,
    email,
    role,
    password,
  });

  // Create token
  const token = user.getSignedJwtToken();

  res.status(200).json({ success: true, token });
});
