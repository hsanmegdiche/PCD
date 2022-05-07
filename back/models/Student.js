const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  github: {
    type: String,
    trim: true,
  },
  studies: {
    type: String,
    trim: true,
  },
  skills: {
    type: Object,
  },
  cv: {
    type: Object,
  },
  role: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("Student", StudentSchema);
