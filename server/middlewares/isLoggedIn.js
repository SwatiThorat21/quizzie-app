const jwt = require("jsonwebtoken");
require("dotenv").config();

const isLoggedIn = (req, res, next) => {

  const { jwtoken } = req.headers;
  try {
    const user = jwt.verify(jwtoken, process.env.JWT_SCRETEKEY);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      status: "FAILED",
      message: "You have not logged in! Please login",
    });
    console.log(error.message)
  }
};

module.exports = isLoggedIn;
