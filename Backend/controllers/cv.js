const cvModel = require('../models/cv');
const userModel = require("../models/users");
const fs = require('fs')
const {
    createPdf
} = require('../helpers/pdfGenerator/pdfPrinter')
exports.createCV = async (req,res,next) =>{
    let {userId,cvTemplate,name} = req.body;
    let user = await userModel.findById(userId).populate('developerTypes').populate("languages");

    console.log(user);
    let fileName = "test";
    let htmlTemplate =`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .div-centered{
                text-align: center;
            }
            .imgClass{
                border-radius:50%;
                object-fit:scale-down;
                width:100px;
            }
            .tag{
                padding:5px;
                background-color:lightgray;
                border:1px solid black;
                border-radius:2px;
                margin-right:5px;
                margin-top:2px;
                font-size:10px;
            }
        </style>
    </head>
    <body>
        <table>
            <tbody>
                <tr style="border-bottom:"1px solid darkgray">
                    <td>
                        <img src="${user.profilePhoto}" class="imgClass" >
                    </td>
                    <td style="text-align:right">                        
                        <span><b>${user.firstName} ${user.lastName}</b></span>
                        <br>`
                for (var i = 0; i < user.developerTypes.length; i++) {
                    htmlTemplate+= ` <span class="tag" >${user.developerTypes[i].name}</span>`
                }
                    htmlTemplate+=`</td>
                </tr>
                <tr>
                   <td> `    ;
                   
                   htmlTemplate+=`</td>
                    <td> <span>Programlama Dilleri</span>
                        <ul>
                    `
                    for (var i = 0; i < user.languages.length; i++) {
                        htmlTemplate+= `<li>${user.languages[i].name}</li>`                        
                    }
                   htmlTemplate+= `
                   </ul>
                   </td>
                   
                </tr>
            </tbody>
        </table>
        <div class="div-centered">
          
        </div>
        
    
        ${cvTemplate}
        
    </body>
    </html>
    `
    let path = `/Users/alperalanyali/Desktop/CVPaylasma/Fronted/cv-paylasim-angular/src/assets/cvs/${name}.pdf`
    let cv = new cvModel({
        userId: userId,
        cvTemplate:htmlTemplate,
        cvPath:path,
        name:name
    });
    // cv = await cvModel.create(cv);
    createPdf(htmlTemplate,name,path);
    res.status(200).json({
        success:true,
        message:"CV başarılı şekilde oluşturuldu",
        data:cv
    });

}

exports.getCVById = async (req,res,next) => {
    let id = req.body.cvId;

    let cv = await cvModel.findById(id);
    res.status(200).json({
        success:true,
        result: cv.lenght,
        data:cv
    })
}

exports.getCvsByUserId = async (req,res,next) => {
    // let userId = '63f368680301a26403550888'
    let userId = req.params.userId;
    console.log("Get CVs by userId: "+userId)
    let cvs =await cvModel.find({userId:userId})
    console.log(cvs)
    res.status(200).json({
        success:true,
        result:cvs.lenght,
        data:cvs
    })
}