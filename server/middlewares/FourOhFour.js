module.exports = (_req, res, _next) => {
  return res.status(404).send({ error: "Path not found" });
};
