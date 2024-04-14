const gateKeeperData = require("../../Schema/GateKeeperSchema/GateKeeper");
const registerGateKeeper = async (req, res) => {
  const {
    name,
    entryTime,
    exitTime,
    purposeOfComing,
    contactNumber,
    vehicleNumber,
  } = req.body;
  try {
    let response = new gateKeeperData({
      name,
      entryTime,
      exitTime,
      purposeOfComing,
      contactNumber,
      vehicleNumber,
      userId: req?.id,
    });
    response = await response.save();
    return res
      .status(200)
      .json({ message: "gateKeeper registered successFully", data: response });
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong" });
    console.log(error);
  }
};

const getAllgateKeeperData = async (req, res) => {
  try {
    let response = await gateKeeperData.find({ userId: req.id });
    return res.status(200).json({
      message: "gate keepers data fetched successFully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
module.exports = {
  registerGateKeeper,
  getAllgateKeeperData,
};
