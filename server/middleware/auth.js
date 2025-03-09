import config from "config";
import jwt from "jsonwebtoken";

const JWT = config.get("JWT_KEY");

const authMiddleware = async (req, res, next) => {
  try {
    const authHeaders = req.headers.authorization;
    if (!authHeaders) {
      return res.status(400).json({ msg: "Authorization header missing" });
    }

    const token = authHeaders.split(" ")[1];
    if (!token) {
      return res.status(400).json({ msg: "No token provided" });
    }

    const decoded = jwt.verify(token, JWT);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ msg: "Token expired" });
    }

    console.error(error);
    return res.status(400).json({ msg: "Invalid token" });
  }
};

export default authMiddleware;
