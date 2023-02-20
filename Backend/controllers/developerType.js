const developerType = require('../models/developerType');


exports.createNewDeveloperType = async (req,res,next) =>{
    const {name }= req.body;
    
    let role = new developerType({
        name:name
    });

    role = await developerType.create(role);
    
    res.status(200).json({
       success:true,
       message:"Rol başarılı şekilde eklenmiştir",
       data:role 
    });
}

exports.getDeveloperType = async(req,res,next)=>{
    
    let developerTypes  = await developerType.find();

    res.status(200).json({
        success:true,
        results:developerTypes.length,
        data:developerTypes 
    })
}

