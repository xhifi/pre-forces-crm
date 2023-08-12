function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

module.exports = (app, port) => {
  return app.listen(normalizePort(port), (e) => {
    e
      ? console.log(e)
      : console.log(`Server is running on: http://localhost:${port}`);
  });
};
