//rotas, modulos em arquivo separado, para que outros arquivos acessem esta rota
//contorla os metodos da aplicação
const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasksList = await Task.find();
    return res.render("index", { tasksList });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}; //função callback separado da rota

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    return res.redirect("/");
  }
  try {
    await Task.create(task);
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
};
