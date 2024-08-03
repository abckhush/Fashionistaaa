const file = require("../models/file.model");
const cloudinary = require("cloudinary").v2;

exports.localfileUpload = async (req, res) => {
  try {
    const file = req.files.file;
    console.log(file);
    const path = __dirname + "/uploads/" + Date.now()+ `.${file.name.split('.')[1]}`;

    file.mv(path, (err) => {
      if (err) {
       return res.status(500).json({
        success : false,
        message : "File Upload Failed"

      });
      }
    });

    return res.status(200).json({
      success: true,
      message: "File Uploaded Successfully",
      data: {
        name: file.name,
        mimetype: file.mimetype,
        size: file.size,
      },
    })
  } catch (error) {
    throw new ApiError(500, error.message);
  }
}

// function isFileTypeSupported(type,supportedTypes){
//   return supportedTypes.includes(type);
// }

exports.uploadFileToCloudinary=async(file,folder,quality)=>{
  console.log(file)
    const options = {folder};
    options.resource_type = 'auto';
    if(quality) options.quality = quality;
    console.log(file.tempFilePath)
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

// exports.imageUpload = async (req, res) => {
//     try {
//       const {email} = req.body;

//       const file = req.files.file;

//       //now validate 

//       const supportedTypes = ['png','jpg','jpeg','gif','webp',];
//       const filetype = file.name.split('.')[1];

//       if(!isFileTypeSupported(filetype,supportedTypes)){
//         throw new ApiError(400,'File type not supported');
//       }
      
//       const response = await uploadFileToCloudinary(file,'images');

//       const newFile = await file.create({
//         name,
//         email,
//         path:response.secure_url,
//       })

//       Product.updateOne({email},{$set:{imgsrc:newFile._id}},{new:true});
//     } catch (error) {
//       throw new ApiError(500, error.message);
//     }
// }

// exports.videoUpload = async (req, res) => {
//   try {
//     const { email} = req.body;

//     const file = req.files.videoFile;

//     const supportedTypes = ['mp4','mkv','avi','webm'];

//     const filetype = file.name.split('.')[1];

//       if(!isFileTypeSupported(filetype,supportedTypes)){
//         throw new ApiError(400,'File type not supported');
//       }
      
//       const response = await uploadFileToCloudinary(file,'videos');

//       const newFile = await file.create({
//         name,
//         email,
//         path:response.secure_url,
//       })

//   } catch (error) {
//     throw new ApiError(400, error.message);
//   }
// }

// exports.imageSizeReducer = async (req, res) => {
//   try {
//     const { email} = req.body;

//     const file = req.files.file;

//     const supportedTypes = ['png','jpg','jpeg','gif','webp',];
//     const filetype = file.name.split('.')[1];
      
//         if(!isFileTypeSupported(filetype,supportedTypes)){
//           throw new ApiError(400,'File type not supported');
//         }
        
//         const response = await uploadFileToCloudinary(file,'images',30);
  
//         const newFile = await file.create({
//           name,
//           email,
//           path:response.secure_url,
//         })

//   } catch (error) {
//     throw new ApiError(400,error.message)
//   }
// }
