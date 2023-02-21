const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        // require:["Lütfen adınızı giriniz"]
    },
    lastName:{
        type:String,
        // require:["Lütfen soyadınızı giriniz"]
    },
    profilePhoto:{
        type:String,        
    },
    email:{
        type:String,
        require:["Lütfen eposta adresinizi giriniz"]
    },
    roleId:{
        type:mongoose.Schema.ObjectId,
        ref:"roles",
        required:["Lütfen rolünüzü seçiniz"]
    },
    password:{
        type:String,
        required:['Lütfen şifrenizi giriniz'],          
        minLenght:[8,`Şifrenizin karakter sayısı 8'den fazla olması gerekiyor`],        
    },
  
    educationBackground:{
        type:String,
        defaultValue:""
    },
    createdDate:{
        type:Date,
        default:Date.now
    },
    languages:{
        type:[mongoose.SchemaType.ObjectId],
        ref:"Languages"
    },
    developerTypes:{
        type:[mongoose.Schema.ObjectId],
        ref:"DeveloperType",
        // required:[true,"Lütfen bir tane veya birden fazla geliştirici tipi seçiniz"]
    }
})

module.exports = mongoose.model('Users',userSchema);

