const express = require('express');
const router = express.Router();

const {generateColor} = require('../controller/colorgenerate.controller')

router.post('/generatecolor', generateColor);


module.exports = router;