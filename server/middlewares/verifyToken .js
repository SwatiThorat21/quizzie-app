const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const { jwtoken } = req.headers;

  if (!jwtoken) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {    
    const decodedToken = jwt.verify(jwtoken, process.env.JWT_SCRETEKEY);
    req.user = decodedToken;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ error: "Token expired" });
    } else {
      return res.status(401).json({ error: "Invalid token" });
    }
  }
};

module.exports = verifyToken;
