const Questions = require("../models/questions");
var ObjectId = require('mongodb').ObjectId; 
exports.createNewQuest = async (req,res,next)=>{
    const {order,question,language} = req.body;
    
    console.log(req.body);
    let newQuestion = new Questions({
            order:order ,
            question:question,
            languageId:language
    })
    newQuestion = await Questions.create(newQuestion);

    res.status(200).json({
        success:true,
        message:"Sorunuz başarılı şekilde eklenmiştir.",
        data:newQuestion
    })
}

exports.getQuestionsByLanguageId = async (req,res,next) => {
    console.log("getQuestionsByLanguageId");
    let languageId = req.params.LanguageId  
    console.log(languageId)  
   let questions = await Questions.find({'languageId': new ObjectId(languageId)}).sort({"order":1});
    console.log(questions);
   res.status(200).json({
    success:true,
    results: questions.length,
    data:questions

   })
}