const Answers = require('../models/answers.js');
const User = require('../models/users.js');
const question = require('../models/questions');
const AnswerDto = require('../dtos/answerdto')
var ObjectId = require('mongodb').ObjectId; 
exports.createAnswer = async (req,res,next)=>{
    let {questionId,answer,userId} = req.body;
    
    let answerModel = new Answers({
        questionId: questionId,
        answer:answer,
        userId:userId
    });
    
    answerModel = await Answers.create(answerModel);
    console.log(answerModel);
    res.status(200).json({
        success:true,
        message:'Cevabınız başarılı şekilde kaydedilmişti'
    })
}

exports.getAnswerByUserId= async (req,res,next)=>{
    console.log("getAnswerByUserId")
    let userId = req.params.UserId;
    console.log(userId);
    let answers =  await Answers.find({userId:new ObjectId(userId)}).populate(['userId',"questionId"])
   
     res.status(200).json({
        success:true,
        results: answers.length,
        data:answers
     })
}

exports.getAnswerByLanguageId = async (req,res,next)=>{
    // let languageId = '63f10bf6adda262912626c1c';
    // let userId = '63f114e88ef148b440532c29'
    let {userId,languageId} = req.params
    console.log(userId,languageId)
    let answers = await (await Answers.find({userId:new ObjectId(userId)}).populate('questionId')).filter( item => {
            return item.questionId.languageId == languageId
    })
    
    res.status(200).json({
        success:true,
        results: answers.length,
        data:answers
    })
}

exports.getAnswerAvgRatingByLanguageIdandUserId = async (req,res,next) => {
    
    
}