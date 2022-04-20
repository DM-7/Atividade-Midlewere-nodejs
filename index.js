const express = require('express');
const authorizationMiddlewere = require('./middleweres/authorizationMiddlwere');
const cors = require('cors');
const api = require('./services/API');
const { generateToken } = require('./helpers')
const emailAndPasswordValidate = require('./middleweres/emailAndPasswordValidate');


const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

// Atividade 2

app.get("/btc/price", authorizationMiddlewere, async (req, res) => {
  const btcPrice = await api();
  console.log(btcPrice);
  return res.status(200).json(btcPrice);
})

// Atividade 1

app.post('/user/register', emailAndPasswordValidate, (req, res) => {
  const { username } = req.body;

  const isUsernameValid = username.length >= 3;

  if ( isUsernameValid ) {
    return res.status(201).json({ message: "Created" });
  }

  return res.status(400).json({ message: "Invalid data" });
})

app.post('/user/login', emailAndPasswordValidate, (req, res) => {
  return res.status(200).json({ token: generateToken() })
})


app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))