const express = require('express');
const bodyParser = require('body-parser')
const db = require('./config/database.js')
const dotenv = require('dotenv');
const cors = require('cors');
const authRouter = require('./router/user.router.js');
const colorRouter = require('./router/colorgenerate.router.js');
const imageGenerateRouter = require('./router/imagegenerate.router.js')
const designRouter = require('./router/design.router.js');
const contestRouter = require('./router/contest.router.js')
const { cloudinaryConnect } = require('./config/cloudinary.js')
const fileupload = require('express-fileupload')

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
app.use(`${api}/image`,imageGenerateRouter);
app.use(`${api}/design`,designRouter);
app.use(`${api}/contest`,contestRouter);
app.use(fileupload({
    useTempFiles:true
}));

cloudinaryConnect();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
