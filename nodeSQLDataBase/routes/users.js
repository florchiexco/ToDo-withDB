const express = require("express");
const usersController= require("../controller/user.js");
const router= express.Router();

/* getters */
router.get("/", usersController.viewAll);
router.get("/:id/tasks", usersController.getAssigned); //ve las tareas que una persona tiene asignadas
router.get("/:id([0-9]*)", usersController.viewById); // get by id


/* postters */
router.post("/", usersController.addNewData); // by body - parser


/* deletters */
router.delete("/:id", usersController.deleteById);

/* updatters */
router.put("/", usersController.upgrade); // by body - parser

module.exports = router;