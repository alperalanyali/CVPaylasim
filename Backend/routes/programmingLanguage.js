const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router();
const {
    createProgrammingLanguage,
    getLanguages
} = require('../controllers/programmingLanguages')

//Creating new Programming Language => api/v1/CreateNewLanguage
router.route("/createNewLanguage").post(createProgrammingLanguage);

router.route("/getLanguages").get(getLanguages);
module.exports = router;