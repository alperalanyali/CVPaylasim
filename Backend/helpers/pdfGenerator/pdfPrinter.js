var pdf = require("pdf-node");
var fs = require("fs");

exports.createPdf = (htmlTemplate,fileName,filePath)=>{
    // var html = fs.readFileSync("template.html", "utf8");
    var options = {
        format: "A4",
        orientation: "portrait",
        border: "10mm",
        header: {
            
        },
        footer: {        
        }
    };

    var document = {
        html: htmlTemplate,
        data: {          
        },
        path: filePath,
        type: "pdf",
      };
        pdf(document, options)
                                .then((res) => {
                                    console.log(res);
                                })
                                .catch((error) => {
                                    console.error(error);
                                });
}
