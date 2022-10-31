//conjunto de codigos separado do codigo principal

const routes = require("express").Router();
const controlador = require("../controller/TaskController.js");

routes.get("/", controlador.getAllTasks);
routes.post("/create", controlador.createTask);

module.exports = routes;
