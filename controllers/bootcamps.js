/**
 * @description get all bootcamps
 * @route GET /api/v1/bootcamps
 * @access public
 */
exports.getBootCamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "show all bootcamps" });
};

/**
 * @description get single bootcamp
 * @route GET /api/v1/bootcamps/:id
 * @access public
 */
exports.getBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `show bootcamp ${req.params.id}` });
};

/**
 * @description create new bootcamp
 * @route POST /api/v1/bootcamps
 * @access private
 */
exports.createBootCamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "create new bootcamp" });
};

/**
 * @description update bootcamp
 * @route PUT /api/v1/bootcamps/:id
 * @access private
 */
exports.updateBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update bootcamp ${req.params.id}` });
};

/**
 * @description delete bootcamp
 * @route DELETE /api/v1/bootcamps/:id
 * @access private
 */
exports.deleteBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `delete bootcamp ${req.params.id}` });
};
