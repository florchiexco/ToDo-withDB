const express = require("express");
const tasksXuserController = require("../controller/tasksXuser.js");
const router = express.Router();

/* getters */
router.get("/", tasksXuserController.viewAll);
router.get("/:id([0-9]*)", tasksXuserController.viewById);
router.get("/assigned/:userID([0-9]*)", tasksXuserController.getAssigned); //muestra las tareas que cierto usuario tiene asignadas
router.post("/assign/taskID=:taskID([0-9]*)&userID=:userID([0-9]*)", tasksXuserController.assign);
router.post("/unassign/taskID=:taskID([0-9]*)&userID=:userID([0-9]*)", tasksXuserController.unassign);

module.exports = router;
