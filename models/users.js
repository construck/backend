const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  fistName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  userType: {
    type: String,
  },
  company: {
    type: String,
  },
  status: {
    type: String,
    default: "inactive",
  },
  createdOn: {
    type: mongoose.SchemaTypes.Date,
    default: Date.now(),
  },
});

module.exports = {
  model: mongoose.model("users", UserSchema),
  schema: UserSchema,
};
