const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected wih database")
    }
    catch (err) {
        console.log("Database connection error")
        console.log(err)
    }
}

module.exports = connectDB;