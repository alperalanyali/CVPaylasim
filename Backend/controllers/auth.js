const User = require('../models/users')
var ObjectId = require('mongodb').ObjectId; 
//Register new user => api/v1/register
exports.registerUser = async (req,res,next)=>{
 const {firstName,lastName,email,password,roleId,developerTypes,profilePhoto} = req.body;
    console.log(req.body);
    let user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        roleId: roleId,
        developerTypes: developerTypes,
        educationBackground:"",
        profilePhoto : profilePhoto
    });

    user = await User.create(user);

    res.status(200).json({
        success:true,
        message:"Kullanıcı başarılı şekilde oluşturulmuştur",
        data:user.roleId
    })
}

exports.loginUser = async (req,res,next)=>{
    let {email,password} = req.body;
    console.log(email);
    if(!email || !password)
        res.status(404).json({
            message:"Giriş yapabilmeniz için eposta ve şifreye gereklidir"
        })
    let user = await User.findOne({email:email});
    if(!user)
    res.status(401).json({
        success:false,
        message:"Böyle bir kullanıcı yok"
    })
    if(password === user.password){
        res.status(200).json({
            success:true,
            message:'Giriş yapabildiniz',
            data:user
        })
    }else {
        res.status(401).json({
            success:false,
            message:"Şifreyi yanlış girdiniz"
        })
    }
}

exports.getUserById = async(req,res,next)=>{
    let userId = req.params.userId
    let user = await User.findById(userId).populate("developerTypes").populate("languages");

    res.status(200).json({
        success:true,
        data:user
    });
}

exports.updateUser = async (req,res,next)=>{
    let {userId,firstName,lastName,email,developerTypes,languages,educationBackground,profilePhoto,password} = req.body;    
    let newLanguages = languages.map(language => {
        return new ObjectId(language);
    });
    let newDeveloperTypes = developerTypes.map((developerType)=>{
            return new ObjectId(developerType);
    });
    
    let user = await User.findByIdAndUpdate(userId,{
        educationBackground:educationBackground,
        languages:newLanguages,
        developerTypes:newDeveloperTypes,
        firstName:firstName,
        lastName:lastName,
        password:password,
        profilePhoto:profilePhoto,
        email:email
        
    })
    console.log(user);
    res.status(200).json({
        success:true,
        data:user
    });

}