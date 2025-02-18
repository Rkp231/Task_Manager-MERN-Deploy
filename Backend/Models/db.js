const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database Connection Error:", err);
  });
