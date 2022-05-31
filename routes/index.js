const express = require('express');
const router = express.Router();
console.log('Hi router')
const homeController = require('../controllers/home_controller');
const taskController = require('../controllers/task_controller');
const actionController = require('../controllers/action_controller');

// FOR HOME CONTROLLER
router.get('/', homeController.home);
router.get('/details/:id', homeController.details);


// FOR TASK/Habit CONTROLLER
router.post('/create-task', taskController.create)
router.get('/delete-task/:id', taskController.destroy)

// FOR ACTION CONTROLLER
router.post('/action-status', actionController.create)

module.exports = router;