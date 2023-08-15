const db = require("../../utils/pg");
const BadRequestError = require("../../errors/BadRequestError");
const { StatusCodes } = require("http-status-codes");

module.exports = async (req, res) => {
  const { params: id } = req;
  // Sanitize the input
  if (!id) {
    throw new BadRequestError(
      "No ID sent along request, please provide ID as a request parameter"
    );
  }
  // check in db if doesnt exist send notfound error
  const userFound = await db.query(`SELECT * FROM students WHERE id = $1`, [
    id,
  ]);

  if (userFound.rowCount === 0) {
    throw new NotFoundError(`No user with ${id} found in system`);
  }

  // if user is found, send the data back to the user in a response i.e. user information from the db
  userData = userFound.rows[0];

  res.status(StatusCodes.ACCEPTED).send({ msg: userData });
};
