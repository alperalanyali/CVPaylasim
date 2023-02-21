const mongoose = require('mongoose');
const schemaOptions = {
    
}

const cvSchema = mongoose.Schema({
    cvPath:{
        type:String,
        required:true,
    },
    cvTemplate:{
        type:String,
        required:true
    },
    userId:{
            type: mongoose.Schema.ObjectId,
            ref:"Users",
            required:true,
    },
    createdDate:{
        type:Date,
        default:Date.now(),
    },
    name:{
        type:String
    }

});

module.exports = mongoose.model('CV',cvSchema);