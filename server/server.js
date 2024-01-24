const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authRoutes = require("./routes/auth");
const qaRoute = require("./routes/queAnsRoutes");
const cors = require("cors")

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const databaseName = "quize-database";

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: databaseName,
});

app.use("/auth", authRoutes);
app.use("/quiz", qaRoute);

app.get("/", (req, res) => {
  res.json({
    status: "SUCCESS",
    message: "All good!",
  });
});

app.listen(process.env.PORT, () => {
  console.log(
    `server running sucessfully on http://localhost:${process.env.PORT}`
  );
});
