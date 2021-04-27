const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        let MONGO_DB_URI_REMOTE = "mongodb+srv://sethu:sethu*1471@mycluster.sdopd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        const con = await mongoose.connect(MONGO_DB_URI_REMOTE, {
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