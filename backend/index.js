const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/users.js");
const pinRoute = require("./routes/pins.js");

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("mongodb database connected!");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}!`);
});
