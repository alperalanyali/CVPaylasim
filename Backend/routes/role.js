const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router();
const {
    createRole,
    getRoles,
    getRoleById
} = require('../controllers/roleController');
//Create new  role => api/v1/createRole
router.route('/createRole').post(createRole);
//Get Roles => api/v1/getRoles
router.route('/getRoles').get(getRoles);
router.route("/getRoleById/:roleId").get(getRoleById);
module.exports = router;