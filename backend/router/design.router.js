const express = require('express');
const router = express.Router();

const {addDesign} = require('../controller/design.controller')

router.post('/addDesign',addDesign)

module.exports = router;