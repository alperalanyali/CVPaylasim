const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router();
const {
    registerUser,
    loginUser,
    getUserById,
    updateUser
} =require('../controllers/auth')
//Register User => api/v1/register
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/getUserById/:userId").get(getUserById);
router.route("/updateUser").post(updateUser);


module.exports = router;