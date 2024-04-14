const express = require("express");
const {
  registerGateKeeper,
  getAllgateKeeperData,
} = require("../Controller/gateKeeperController/gatekeeperController");
const authMiddleWare = require("../middlewares/authMiddleWares/authMiddleWare");
const GateKeeperRoutes = express.Router();

GateKeeperRoutes.post(
  "/api/v1/register-gate-keeper",
  authMiddleWare,
  registerGateKeeper
);
GateKeeperRoutes.get(
  "/api/v1/getAllgateKeeperData",
  authMiddleWare,
  getAllgateKeeperData
);
// GateKeeperRoutes.put("/api/v1/update-gatekeeperData", updategateKeeperData);
module.exports = GateKeeperRoutes;
