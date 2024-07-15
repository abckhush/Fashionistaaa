const express = require('express');
const bodyParser = require('body-parser')
const db = require('./config/database.js')
const dotenv = require('dotenv');
const cors = require('cors');
const authRouter = require('./router/user.router.js');
const colorRouter = require('./router/colorgenerate.router.js');

dotenv.config();

const api = process.env.API_URL;

db.connect();

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(`${api}/user`,authRouter);
app.use(`${api}/color`,colorRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
