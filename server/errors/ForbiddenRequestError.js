const { StatusCodes } = require("http-status-codes");
const CustomError = require("./CustomError");

class ForbiddenRequestError extends CustomError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.FORBIDDEN;
  }
}

module.exports = ForbiddenRequestError;
