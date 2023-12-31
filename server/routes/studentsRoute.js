const router = require("express").Router();
const {
  getAll,
  getOne,
  insertOne,
  updateOne,
  deleteOne,
  insertMany,
  updateMany,
  deleteMany,
} = require("../controllers/students");

router.route("/").get(getOne).post(insertOne);
router.route("/:id").put(updateOne).delete(deleteOne);

router.route("/all").get(getAll);
router.route("/many").post(insertMany).put(updateMany).delete(deleteMany);

module.exports = router;
