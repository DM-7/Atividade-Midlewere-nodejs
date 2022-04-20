const authorizationMiddlewere = (req, res, next) => {
  const token = req.headers.authorization;

  const regex = /^[a-zA-Z0-9]{12}$/;
  // regex reference: https://www.sitepoint.com/using-regular-expressions-to-check-string-length/

  if(!regex.test(token)) {
    return res.status(401).json({ message: "Invalid Token" })
  }
  next();
}

module.exports = authorizationMiddlewere;