const express = require('express');
const connectDB = require("./helpers/init_mongodb");
const cors = require("cors");
const app = express();
const port = 3000;













app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}`);
})