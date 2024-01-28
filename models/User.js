const { default: mongoose } = require("mongoose");


const userSchema = new mongoose.Schema({
   name: String,
   email: String,
   password: String,
   age: Number,
   country: String
});

module.exports = mongoose.model("User", userSchema);
