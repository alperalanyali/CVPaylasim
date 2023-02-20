const mongoose = require('mongoose');


const questionSchema = mongoose.Schema({
    languageId:{
        type: mongoose.Schema.ObjectId,
        ref:"languages",
        required:[true,"Lütfen yazılım dili seçiniz"]
    },
    order:{
        type:Number,
        required:["Sıra numarasınızı giriniz"]
    },
    question:{
        type:String,
        required:["Lütfen soruyu giriniz!!"]
    }
});

module.exports  = mongoose.model("questions",questionSchema);