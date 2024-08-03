const express = require('express');
const router = express.Router();
const fileupload = require("express-fileupload")

const {addDesign,addLike,addComment,removeComment,removeLike,getAllComments,getLikes,getAllDesigns,getRecentDesigns} = require('../controller/design.controller')
const {auth} = require("../middleware/auth")

router.post('/addDesign',fileupload({
    useTempFiles:true
}),auth,addDesign)
router.post('/addLike',auth,addLike)
router.post('/addComment',auth,addComment)
router.delete('/removeComment',auth,removeComment)
router.delete('/removeLike',auth,removeLike)
router.get('/getAllComments',getAllComments)
router.get('/getLikes',getLikes)
router.get('/getAllDesigns',getAllDesigns)
router.get('/getRecentDesigns',getRecentDesigns)

module.exports = router;