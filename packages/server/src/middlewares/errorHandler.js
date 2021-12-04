function errorHandler(err, req, res, next) {

  res.json({ status: 500, message: err.message });
};

module.exports = errorHandler;
