const OpenAI =require('openai');

const openai = new OpenAI(process.env.OPENAI_API_KEY);

const generateColor = async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt }],
        model: "gpt-3.5-turbo",
      });

    const data = completion.choices[0];
    
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    res.status(400).json({
      success: false,
      error: 'The image could not be generated',
    });
  }
};

module.exports = { generateColor };