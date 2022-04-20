const express = require('express');
const authorizationMiddlewere = require('./middleweres/authorizationMiddlwere');
const cors = require('cors');
const api = require('./services/API');
const { validateEmail, validatePassword, generateToken } = require('./helpers')


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

app.post('/user/register', (req, res) => {
  const { username, email, password } = req.body;

  const isUsernameValid = username.length >= 3;
  
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  if ( isUsernameValid && isEmailValid && isPasswordValid ) {
    return res.status(201).json({ message: "Created" });
  }

  return res.status(400).json({ message: "Invalid data" });
})

app.post('/user/login', (req, res) => {
  const { email, password } = req.body;

  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  if ( isEmailValid && isPasswordValid ) {
    return res.status(201).json({ token: generateToken() });
  }
  return res.status(400).json({ message: "email or password is incorrect" });
})


app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))