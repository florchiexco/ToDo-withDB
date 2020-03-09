const express = require("express");
const tasksXuserController = require("../controller/tasksXuser.js");
const router = express.Router();

/* getters */
router.get("/", tasksXuserController.viewAll);
router.get("/:id([0-9]*)", tasksXuserController.viewById);

module.exports = router;
