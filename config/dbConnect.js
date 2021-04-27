const mongoose = require("mongoose")
let MONGO_DB_URI_REMOTE = "mongodb + srv://sethu:sethu*1471@mycluster.sdopd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        const con = await mongoose.connect('mongodb + srv://sethu:sethu*1471@mycluster.sdopd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
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