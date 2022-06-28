const mongoose = require("mongoose");
const VendorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  phone: {
    type: String,
  },
  mobile: {
    type: String,
  },
  password: {
    type: String,
  },
  tinNumber: {
    type: String,
  },
  createdOn: {
    type: mongoose.SchemaTypes.Date,
    default: Date.now(),
  },
});

module.exports = {
  model: mongoose.model("vendors", VendorSchema),
  schema: VendorSchema,
};
