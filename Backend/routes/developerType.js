const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router();
const {
    createNewDeveloperType,
    getDeveloperType
    
}  = require('../controllers/developerType');
//Create New Developer Type => api/v1/createDeveloper

router.route('/createDeveloper').post(createNewDeveloperType);
router.route("/getDeveloperTypes").get(getDeveloperType);
module.exports = router;