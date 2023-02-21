const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    code:{
        type:String
    },
    name:{
        type:String
    },
    status:{
        type:Boolean,
        default:true
    },
    createdDate:{
        type:Date,
        default:Date.now()
    }

})
module.exports  = mongoose.model('roles',roleSchema);