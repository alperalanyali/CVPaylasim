const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router();

const {
    createCV,
    getCVById,
    getCvsByUserId
} = require('../controllers/cv');

router.route('/createCv').post(createCV);
router.route('/getCvById').post(getCVById);
router.route("/getCvByUserId/:userId").get(getCvsByUserId);

module.exports = router;