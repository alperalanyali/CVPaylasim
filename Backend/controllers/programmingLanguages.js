const Languages = require('../models/languages');


exports.createProgrammingLanguage = async(req,res,next) => {
    const {name,status} = req.body;

    console.log(req.body);
    let langugage = new Languages({
        name:name
    });

    let language = await Languages.create(langugage);

    res.status(200).json({
        success:true,
        message:"Dil başarılı şekilde oluşturulmuştur."
    })
}

exports.getLanguages = async (req,res,next)=>{    
    let languages = await Languages.find();
    res.status(200).json({
        success:true,
        results:languages.length,
        data:languages
    })
    
}

exports.getLanguageById = async (req,res,next)=>{
    let languageId = req.params.languageId;
    var language = await Languages.findById(languageId);
    res.status(200).json({
        success:true,
        data:language
    })
}