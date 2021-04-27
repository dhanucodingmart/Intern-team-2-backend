const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_DB_URI_REMOTE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log("MONGO DB Connected at", con.connection.host);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB