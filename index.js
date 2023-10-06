require("dotenv").config();
require("./config/mongo_Client");
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// importing routes
app.use("/api/", require("./routes/compaign"));
app.use("/api/", require("./routes/mongo/campaign"));
app.use("/api/", require("./routes/v1/domain"))
app.use("/api/", require("./routes/mongo/projects"))

app.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "modernize backend working" });
});

// if no page found
app.get("*", (req, res) => {
  res.status(404).json({ success: false, msg: "no route found" });
});

// porst is lietening on this
app.listen(PORT, () => {
  console.log(`backend is running on this port ${PORT}`);
});
