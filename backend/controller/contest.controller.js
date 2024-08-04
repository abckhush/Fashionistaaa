const Contest = require('../models/contest.model')
const { create } = require('../models/file.model')
const { uploadFileToCloudinary } = require('../utils/cloudinary')
const moment = require('moment')

exports.createContest = async(req,res) => {
    try {
        const {name,description,deadline,tags,prize} = req.body
        const createdBy = req.user._id

        if(!name || !description || !deadline || !tags || !prize ){
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            })
        }
        
        const parsedDeadline = moment(deadline, 'DD MMMM, YYYY hh:mm A').toDate();

        if (isNaN(parsedDeadline)) {
            return res.status(400).json({
                success: false,
                message: "Invalid date format"
            });
        }

        const imgsrc = req.files.imgsrc;

        const supportedTypes = ['png', 'jpg', 'jpeg', 'gif', 'webp',];
        const imgsrcType = imgsrc.name.split('.')[1];

        if (!supportedTypes.includes(imgsrcType)) {
            return res.status(400).json({
                success: false,
                message: "File type not supported"
            })

        }

        const parsedTags = tags.split(' ').map(tag => tag.replace(/^#/, ''));

        const parsedPrize = parseFloat(prize.replace(/,/g, ''));
        if (isNaN(parsedPrize)) {
            return res.status(400).json({
                success: false,
                message: "Invalid prize format"
            });
        }



        const imgsrcresponse = await uploadFileToCloudinary(imgsrc, process.env.CLOUDINARY_FOLDER);

        const contest = new Contest({
            name,
            description,
            image:imgsrcresponse.secure_url,
            createdBy,
            deadline:parsedDeadline,
            tags:parsedTags,
            prize:parsedPrize
        })

        await contest.save()

        return res.status(201).json({
            success: true,
            message: 'Contest created successfully'
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.liveContests = async(req,res)=>{
    try {
        const contests = await Contest.find({deadline:{$gte:Date.now()}})

        const data = contests.map(contest=>{
            return {
                id:contest._id,
                title:contest.name,
                image:contest.image,
                deadline:contest.deadline,
                participants:contest.participants.length                
            }
        })
        if(!contests){
            return res.status(200).json({
                success: false,
                message: 'No live contests'
            })
        }
        return res.status(200).json({
            success: true,
            data
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.pastContests = async(req,res)=>{
    try {
        const contests = await Contest.find({deadline:{$lt:Date.now()}}).sort({deadline:-1})

        if(!contests){
            return res.status(200).json({
                success: false,
                message: 'No past contests'
            })
        }

        const data = contests.map(contest=>{
            return {
                id:contest._id,
                title:contest.name,
                image:contest.image,
                deadline:contest.deadline,
                participants:contest.participants.length                
            }
        })
    
        return res.status(200).json({
            success: true,
            data
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
        
    }
}

exports.getContestById = async(req,res)=>{
    try {
        const contest_id = req.params.id
        const contest = await Contest.findById(contest_id)

        const daysLeft = moment(contest.deadline).diff(Date.now(), 'days');

        const data = {
            id:contest._id,
                title:contest.name,
                description:contest.description,
                image:contest.image,
                deadline:contest.deadline,
                prize:contest.prize,
                participants:contest.participants.length,
                daysLeft,
                createdBy:contest.createdBy,
                tags:contest.tags}
       
        if(!contest){
            return res.status(404).json({
                success: false,
                message: 'Contest not found'
            })
        }

        return res.status(200).json({
            success: true,
            data
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.viewGallery = async(req,res) => {
    try {
        const contest_id = req.params.id;
        const contest = await Contest.findById(contest_id)
        if(!contest){
            return res.status(404).json({
                success: false,
                message: 'Contest not found'
            })
        }

        const gallery = await Contest.populate('gallery')
        return res.status(200).json({
            success: true,
            gallery
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.registerForContest = async(req,res)=>{
    try {
        const user_id = req.user.id
        const contest_id = req.params.id

        const contest = await Contest.findById(contest_id)

        if(!contest){
            return res.status(404).json({
                success: false,
                message: 'Contest not found'
            })
        }

        if(!user_id){
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }

        const user = await User.findById(user_id)

        if(!user){
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }

        contest.participants.push(user_id)
        await contest.save()

        return res.status(200).json({
            success: true,
            message: 'Registered for contest'
        })
         
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
        
    }
}

exports.getContestByOrganizer = async(req,res)=>{
    try {
        const organizer_id = req.organizer.id

        if(!organizer_id){
            return res.status(404).json({
                success: false,
                message: 'Organizer not found'
            })
        }

        const contests = await Contest.find({createdBy:organizer_id})
        if(!contests){
            return res.status(200).json({
                success: false,
                message: 'No contests found'
            })
        }

        return res.status(200).json({
            success: true,
            contests
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.deleteContest = async(req,res)=>{
    try {
        const organisers_id = req.organizer.id

        if(!organisers_id){
            return res.status(404).json({
                success: false,
                message: 'Only organizers can delete contests'
            })
        }

        const contest_id = req.params.id
        const contest = await Contest.findById(contest_id)


        if(!contest){
            return res.status(404).json({
                success: false,
                message: 'Contest not found'
            })
        }

        if(contest.createdBy !== organisers_id){
            return res.status(401).json({
                success: false,
                message: 'You are not authorized to delete this contest'
            })
        }

        await contest.remove()

        return res.status(200).json({
            success: true,
            message: 'Contest deleted successfully'
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        
    })
}
}