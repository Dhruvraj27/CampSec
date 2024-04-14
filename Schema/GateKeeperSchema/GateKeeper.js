const mongoose = require("mongoose");

const gateKeeperSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  entryTime: {
    type: String,
  },
  exitTime: {
    type: String,
  },
  purposeOfComing: {
    type: String,
  },
  contactNumber: {
    type: Number,
  },
  vehicleNumber: {
    type: String,
  },
  userId: {
    type: String,
  },
});

const gateKeeperData = new mongoose.model("gateKeeperData", gateKeeperSchema);
module.exports = gateKeeperData;
