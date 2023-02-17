const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
const dotenv = require("dotenv");

const cors = require("cors");
app.use(cors());

const newsRoute = require("./routes/news");
app.use("/api/news", newsRoute);

mongoose.set("strictQuery", false);

dotenv.config();
app.get("/", (req, res) => {
  res.send("Working!");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection is successful"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
