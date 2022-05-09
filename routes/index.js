const express = require('express');
const router = express.Router();
console.log('Hi router')
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.post('/create-task', homeController.create_task)
router.post('/action-status', homeController.action_status)

module.exports = router;