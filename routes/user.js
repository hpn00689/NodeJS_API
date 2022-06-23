const express = require("express");

const {createUser, getUsers, deleteUser, updateUser, getUser} =  require('../controllers/user.js');

const router = express.Router();


router.get('/', getUsers)
router.post('/', createUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser)

module.exports = router;
