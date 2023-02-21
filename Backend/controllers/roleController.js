const roleModel = require('../models/role');

exports.createRole = async (req,res,next)=>{
    let {code,name} = req.body;

    let role = new roleModel({
        code:code,
        name:name
    });

    role = await roleModel.create(role);

    res.status(200).json({
        success:true,
        message:"Rol başarılı şekilde oluşturulmuştur.",
        data:role
    });
}

exports.getRoles = async (req,res,next) => {
    let roles = await roleModel.find();

    res.status(200).json({
        success:true,
        results:roles.lenght,
        data:roles
    });
}

exports.getRoleById = async (req,res,next)=>{
    let roleId = req.params.roleId;
    let role =await roleModel.findById(roleId);

    res.status(200).json({
            success:true,
            data:role
    });
}