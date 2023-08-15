const { StatusCodes } = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
  console.log(err);

  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong on the server",
  };

  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

module.exports = errorHandler;
