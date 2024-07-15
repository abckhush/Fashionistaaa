const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

const generateColor = async (req, res) => {
  const { prompt } = req.body;
  try {
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
   
    return res.status(200).json({
      success: true,
      data: text,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    return res.status(400).json({
      success: false,
      error: 'Color generation failed',
    });
  }
};

module.exports = { generateColor };