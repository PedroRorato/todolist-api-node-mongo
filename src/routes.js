const express= require('express');
const routes = express.Router();

const TaskController = require('./controllers/TaskController');
const UserController = require('./controllers/UserController');

//User
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

//Tasks
routes.get('/users/:userId/tasks', TaskController.index);
routes.get('/users/:userId/tasks/:taskId', TaskController.show);
routes.post('/users/:userId/tasks', TaskController.store);
routes.put('/users/:userId/tasks/:taskId', TaskController.update);
routes.delete('/users/:userId/tasks/:taskId', TaskController.destroy);

module.exports = routes;