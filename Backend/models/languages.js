const mongoose = require('mongoose');

const programmingLanguagesSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
        default:true
    }
})
module.exports = mongoose.model('Languages',programmingLanguagesSchema)