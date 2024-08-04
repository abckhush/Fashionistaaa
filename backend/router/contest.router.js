const express = require('express')
const router = express.Router()
const fileupload = require('express-fileupload')
const { createContest, deleteContest,getContestById,getContestByOrganizer,registerForContest,viewGallery,liveContests,pastContests } = require('../controller/contest.controller')

const {isOrganiser,auth} = require('../middleware/auth')

router.post('/addContest', fileupload({useTempFiles:true}),auth,isOrganiser, createContest)
router.delete('/deleteContest/:id', isOrganiser, deleteContest)
router.get('/getContestById/:id', getContestById)
router.get('/getContestByOrganizer', getContestByOrganizer)
router.get('/ongoingContests',liveContests)
router.get('/pastContests',pastContests)
router.get('/viewGallery/:id', viewGallery)
router.post('/registerForContest/:id', auth, registerForContest)

module.exports = router