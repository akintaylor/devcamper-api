const Bootcamp = require("../models/Bootcamp");

/**
 * @description get all bootcamps
 * @route GET /api/v1/bootcamps
 * @access public
 */
exports.getBootCamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();

    res.status(200).json({
      success: true,
      data: bootcamps
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

/**
 * @description get single bootcamp
 * @route GET /api/v1/bootcamps/:id
 * @access public
 */
exports.getBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

/**
 * @description create new bootcamp
 * @route POST /api/v1/bootcamps
 * @access private
 */
exports.createBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: bootcamp
    });
  } catch (error) {
    res.status(400).json({
      success: false
    });
  }
};

/**
 * @description update bootcamp
 * @route PUT /api/v1/bootcamps/:id
 * @access private
 */
exports.updateBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: bootcamp
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

/**
 * @description delete bootcamp
 * @route DELETE /api/v1/bootcamps/:id
 * @access private
 */
exports.deleteBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
