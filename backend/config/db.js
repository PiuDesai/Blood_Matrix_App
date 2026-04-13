const mongoose = require('mongoose')

const  connectDB = async() => {
    try
    {
     const mongoURI = process.env.MONGO_URI;
     await mongoose.connect(process.env.MONGO_URI);

     if(process.env.NODE_ENV !== 'production')
        {
        console.log("Database connected succesfully!");   
        }
    }
    catch(error)
    {
        if(process.env.NODE_ENV !== 'production')
            {
            console.error("Mongo DB Connection failed : ",error.message);
            }

        process.exit(1);
    }
}

module.exports = connectDB;