const mongoose = require('mongoose')

mongoose.set('strictQuery',true);
const connectDatabase = () =>{ mongoose.connect('mongodb+srv://alanyalialper:metallica1@cluster0.4sc1bdv.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(con => {

    console.log(`MongoDB database connected with host ${con.connection.host}`);
})
}

module.exports = connectDatabase
