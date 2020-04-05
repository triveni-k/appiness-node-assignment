const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserRoleSchema = new Schema({
  created_at: Date,
  updated_at: {
    type: Date,
    default: Date.now(),
  },
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model('UserRole', UserRoleSchema);
module.exports = UserModel;