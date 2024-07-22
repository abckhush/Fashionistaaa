const router = require('express').Router();
const { generateImage } = require('../controller/imagegenerate.controller');

router.post('/generate', generateImage);

module.exports = router;