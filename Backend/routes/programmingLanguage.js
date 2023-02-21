const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router();
const {
    createProgrammingLanguage,
    getLanguages,
    getLanguageById
} = require('../controllers/programmingLanguages')

//Creating new Programming Language => api/v1/CreateNewLanguage
router.route("/createNewLanguage").post(createProgrammingLanguage);

router.route("/getLanguages").get(getLanguages);
router.route("getLanguageById/:languageId").get(getLanguageById);
module.exports = router;