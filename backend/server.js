require('dotenv').config(); // Carrega as variáveis do arquivo .env
const cors = require('cors'); // Importa o middleware CORS
const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");;
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());

// Configura o parser para JSON
app.use(bodyParser.json());

// Rota para gerar conteúdo com a API
app.post('/generate-content', async (req, res) => {
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt = req.body.prompt;

  try {
    const result = await model.generateContent(prompt);
    res.json({ response: result.response.text() });
  } catch (error) {
    console.error('Erro ao gerar conteúdo:', error);
    res.status(500).send('Erro ao gerar conteúdo');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
