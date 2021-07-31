const mongoose = require("mongoose");
const MongoDBString = process.env.DB;

module.exports.connectToDatabase = () => {
  mongoose
    .connect(MongoDBString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => console.log("Connected to MongoDB..."))
    .catch((error) => console.log(error));
};
