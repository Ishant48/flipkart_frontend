const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        console.log
        const conn = await mongoose.connect(`mongodb+srv://ishantpasricha48:4DB0j45oMa0hDOqJ@flipkart.v8cpoeo.mongodb.net/?retryWrites=true&w=majority&appName=Flipkart`, {
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB