const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        console.log
        const conn = await mongoose.connect(`mongodb://localhost:27017/ecommerce`, {
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB