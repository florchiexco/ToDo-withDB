module.exports = routes = app => {
  app.use("/api/tasks", require("./tasks"));
  app.use("/api/users", require("./users"));
  app.use("/api/tasksXuser", require("./tasksXuser"));
};
