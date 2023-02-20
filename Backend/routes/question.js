const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router();

const {
    createNewQuest,
    getQuestionsByLanguageId
    
} = require("../controllers/question")

// Create New Question => api/v1/createNewQuestion
router.route("/createNewQuestion").post(createNewQuest);
//Get Question by Language Id => api/v1/getQuestionsByLanguageId/{}
router.route("/getQuestionsByLangId/:LanguageId").get(getQuestionsByLanguageId);
module.exports = router;
