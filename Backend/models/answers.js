const mongoose = require('mongoose');


const answerSchema = mongoose.Schema({
    questionId:{
        type:mongoose.Schema.ObjectId,
        ref:'questions',
        required:true        
    },
    answer:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'Users',
        required:true
    },
    createdDate:{
        type:Date,
        default:Date.now()
    }
})
module.exports = mongoose.model('Answers',answerSchema)