const mongoose = require('mongoose');

const connectDB = () => {
    console.log("Waiting connection to MongoDB Atlas...");

    mongoose.connect(
        "mongodb+srv://admin:admin@teamsoft-database.mkki6nb.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDB Atlas connected!"))
    .catch((err)=>(console.log(err)));
};

module.exports = connectDB;


