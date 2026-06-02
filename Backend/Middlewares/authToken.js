const JWT = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ msg: "Unauthorized - No Token" });
        }

        const token = authHeader.split(" ")[1];

        const decoded = JWT.verify(token, process.env.JWT_SECRET);

        req.admin = decoded;
        
        next();

    } catch (error) {
        res.status(500).json({msg: "Internal Server Error"})
    }
};

module.exports = authenticate;