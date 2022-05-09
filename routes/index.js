const express = require('express');
const router = express.Router();
console.log('Hi router')
const homeController = require('../controllers/home_controller');
const taskController = require('../controllers/task_controller');
const actionController = require('../controllers/action_controller');


router.get('/', homeController.home);
router.post('/create-task', taskController.create)
router.post('/action-status', actionController.create)

module.exports = router;