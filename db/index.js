const mongoose = require("mongoose");


const connectDb=async ()=>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.Db_CONNECT}`)
        console.log('Connected to MongoDB',connectionInstance.connection.host)
    }catch(error){
        console.error('Error connecting to MongoDB',error)
    }
}

module.exports = connectDb


// const mongoose = require("mongoose");
// const { DB_CONNECT } = process.env;

// const connectToDatabase = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(DB_CONNECT);
//         console.log("Connected to MongoDB",connectionInstance.connection.host);
//     } catch (err) {
//         console.error("Error connecting to MongoDB:", err);
//         process.exit(1);
//     }
// };

// module.exports = connectToDatabase;