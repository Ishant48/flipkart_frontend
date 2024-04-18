const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    min: 5,
    max: 20,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    min: 5,
    max: 20,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    index: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const users = mongoose.model("users", userSchema);

module.exports = users;
