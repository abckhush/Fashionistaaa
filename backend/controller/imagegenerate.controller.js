const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});


const generateImage = async (req, res) => {
  const { prompt } = req.body;

  const imageSize ='256x256';

  try {
    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      });
      
    

    const imageUrl = response.data[0].url;

    res.status(200).json({
      success: true,
      data: imageUrl,
    });
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
        console.error(error.status);  // e.g. 401
        console.error(error.message); // e.g. The authentication token you passed was invalid...
        console.error(error.code);  // e.g. 'invalid_api_key'
        console.error(error.type);  // e.g. 'invalid_request_error'
      } else {
        // Non-API error
        console.log(error);
      }
  }
};

module.exports = { generateImage };