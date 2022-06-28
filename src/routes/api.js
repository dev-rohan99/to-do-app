const express = require('express');
const { ToDoCreate, ToDoGet } = require('../controllers/toDoController');
const router = express.Router();


router.get('/', ToDoGet);
router.post('/create', ToDoCreate);



 module.exports = router;
