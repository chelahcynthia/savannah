const express = require('express');
const connectDB = require("./helpers/init_mongodb");
// const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/users/user.routes");
const albumRoutes = require("./routes/albums/album.routes");
const artistRoutes = require("./routes/artists/artist.routes");


const app = express();
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/albums', albumRoutes);
app.use('/api/artists', artistRoutes);





const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});