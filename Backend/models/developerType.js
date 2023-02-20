const mongoose = require('mongoose');

const developerSchema = mongoose.Schema({
    name:{
        type:String
    },
    status:{
        type:Boolean,
        default:true
    }
})

module.exports = mongoose.model('DeveloperType',developerSchema);