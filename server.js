const express = require('express');
const connectDB = require("./helpers/init_mongodb");
// const cors = require("cors");
require("dotenv").config();
const app = express();


connectDB();








const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});