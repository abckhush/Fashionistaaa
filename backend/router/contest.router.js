const express = require('express')
const router = express.Router()

const { createContest, deleteContest,getContestById,getContestByOrganizer,registerForContest,viewGallery,liveContests,pastContests } = require('../controller/contest.controller')

const {isUser,isOrganiser,auth} = require('../middleware/auth')

router.post('/addContest', isOrganiser, createContest)
router.delete('/deleteContest/:id', isOrganiser, deleteContest)
router.get('/getContestById/:id', getContestById)
router.get('/getContestByOrganizer', getContestByOrganizer)
router.get('/ongoingContests',liveContests)
router.get('/pastContests',pastContests)
router.get('/viewGallery/:id', viewGallery)
router.post('/registerForContest/:id', auth, registerForContest)