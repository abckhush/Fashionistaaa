const designModel = require('../models/design.model')
const { uploadFileToCloudinary } = require('../utils/cloudinary')

exports.addDesign = async (req, res) => {
    try {
        const { title, description, tags } = req.body
        const image = req.file.path
        const createdBy = req.user.id
        const imgsrc = req.files.imgsrc;

        const supportedTypes = ['png', 'jpg', 'jpeg', 'gif', 'webp',];
        const imgsrcType = imgsrc.name.split('.')[1];

        if (!supportedTypes.includes(imgsrcType)) {
            res.status(400).json({
                success: false,
                message: "File type not supported"
            })

        }


        const imgsrcresponse = await uploadFileToCloudinary(imgsrc, process.env.CLOUDINARY_FOLDER);

        design = await designModel.create({
            title,
            description,
            tags,
            image: imgsrcresponse.secure_url,
            createdBy

        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
