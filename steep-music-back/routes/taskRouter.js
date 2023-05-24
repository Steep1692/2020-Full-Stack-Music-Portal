const express = require('express');
const taskController = require('../controllers/taskController');

const app = new express();

const taskRouter = express.Router();

taskRouter.post('/postTask', taskController.postTask);
taskRouter.get('/add', taskController.addTask);
taskRouter.get('/edit', taskController.editTask);
taskRouter.get('/delete', taskController.deleteTask);

module.exports = taskRouter;