const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  password:String,
  phoneNumber:Number,
  role:String,
  address:String,
});

const User = mongoose.model('User', userSchema);

module.exports = {User};
