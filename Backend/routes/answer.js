const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router();

const {
    createAnswer,
    getAnswerByUserId,
    getAnswerByLanguageId
} = require('../controllers/answers.js');
//Creating new Answer => api/v1/createNewAnswer
router.route('/createNewAnswer').post(createAnswer);
router.route('/getAnswerByUserId/:UserId').get(getAnswerByUserId);
router.route('/getAnswerByLanguageId/:userId/:languageId').get(getAnswerByLanguageId);

module.exports = router;