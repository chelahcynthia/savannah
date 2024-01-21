const express = require('express');
const connectDB = require("./helpers/init_mongodb");
// const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/users/user.routes");


const app = express();
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);




const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});