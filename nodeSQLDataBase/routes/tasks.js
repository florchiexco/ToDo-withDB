const express = require("express");
const tasksController = require("../controller/task.js");
const router = express.Router();

/* getters */
router.get("/", tasksController.viewAll);
router.get("/:id([0-9]*)/user", tasksController.getUserAssigned); //devuelve el usuario asignado a cierta tarea
router.get("/:id([0-9]*)", tasksController.viewById); // get una tarea por id
router.get("/assigned/", tasksController.viewAllAssigned); // todas las tareas que tienen a alguien asignado junto a su dueño

/* postters */
router.post("/", tasksController.addNewData); // by body - parser
router.post("/assign/task=:id([0-9]*)&user=:userID([0-9]*)", tasksController.assign);
//no me deja poner el id adelante de assign
router.post("/unassign/task=:id([0-9]*)&user=:userID([0-9]*)", tasksController.unassign); //desasigna a un usuario de cierta tarea

/* deletters */
router.delete("/:id", tasksController.deleteById);

/* updatters */
router.put("/", tasksController.upgrade); // by body - parser

module.exports = router;
