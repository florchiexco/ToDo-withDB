const express = require("express");
const usersController= require("../controller/user.js");
const router= express.Router();

/* getters */
router.get("/", usersController.viewAll);
router.get("/:id([0-9]*)", usersController.viewById); // get by id
//router.get("/tasksXuser/", usersController.viewTasksUser); // get tasks and users

/* postters */
router.post("/", usersController.addNewData); // by body - parser

/* deletters */
router.delete("/:id", usersController.deleteById);

/* updatters */
router.put("/", usersController.upgrade); // by body - parser

module.exports = router;