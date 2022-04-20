const { validateEmail, validatePassword } = require('../helpers')

const loginAndPasswordvalidate = (req, res, next) => {
  const { email, password } = req.body;

  // regex reference: https://www.sitepoint.com/using-regular-expressions-to-check-string-length/

  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  if(!isEmailValid && !isEmailValid) {
    return res.status(401).json({ message: "email or password is incorrect" })
  }
  next();
}

module.exports = loginAndPasswordvalidate;