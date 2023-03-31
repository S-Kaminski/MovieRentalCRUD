const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        console.log("MONGO_URI: >>>>>>> " + process.env.MONGO_URI);
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 30000
        })
        console.log(`MongoDB connected : ${con.connection.host}`);

    } 
    catch(err){
        console.log("YEEEEEEEEEEEEEEEEEEEEEET");
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;