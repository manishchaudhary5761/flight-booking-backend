import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.cookies.token || req.headers.cookie?.split("=")[1];

  if (!token) return res.status(401).send("Unauthorized");

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;

  next();
};
