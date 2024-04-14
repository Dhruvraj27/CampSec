const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
dotenv.config();
const routes = require("./Router/userRoutes");
const connectDB = require("./Db");
const GateKeeperRoutes = require("./Router/gateKeeper.user");
const app = express();
const PORT = 4500;
app.use(cors());
app.use(bodyParser.json());
app.use("/", routes);
app.use("/", GateKeeperRoutes);
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on the PORT : ${PORT}`);
});
