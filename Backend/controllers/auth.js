const User = require('../models/users')
var ObjectId = require('mongodb').ObjectId; 
//Register new user => api/v1/register
exports.registerUser = async (req,res,next)=>{
 const {firstName,lastName,email,password,role,developerTypes,profilePhoto} = req.body;
    console.log(req.body);
    let user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        role: role,
        developerTypes: developerTypes,
        educationBackground:"",
        profilePhoto : profilePhoto
    });

    user = await User.create(user);

    res.status(200).json({
        success:true,
        message:"Kullanıcı başarılı şekilde oluşturulmuştur"
    })
}

exports.loginUser = async (req,res,next)=>{
    let {email,password} = req.body;
    console.log(email);
    if(!email || !password)
        res.status(404).json({
            message:"Giriş yapabilmeniz için eposta ve şifreye gereklidir"
        })
    let user = await User.findOne({email:email}).select('password');    
    if(!user)
    res.status(401).json({
        success:false,
        message:"Böyle bir kullanıcı yok"
    })
    if(password === user.password){
        res.status(200).json({
            success:true,
            message:'Giriş yapabildiniz'
        })
    }else {
        res.status(401).json({
            success:false,
            message:"Şifreyi yanlış girdiniz"
        })
    }
}

exports.getUserById = async(req,res,next)=>{
    let userId = '63f368680301a26403550888'
    let user = await User.findById(userId).populate("developerTypes").populate("languages");

    res.status(200).json({
        success:true,
        data:user
    });
}

exports.updateUser = async (req,res,next)=>{
    let {userId,firstName,lastName,email,developerTypes,languages,educationBackground,profilePhoto,password} = req.body;
    console.log(req.body);
    user = await User.findByIdAndUpdate({_id:new ObjectId(userId),firstName: firstName,lastName: lastName,email: email,developerTypes:developerTypes,languages: languages,educationBackground: educationBackground,password:password},(err,result)=>{
        console.log(err,result)
    })
    console.log(user);
    res.status(200).json({
        success:true,
        data:user
    });

}