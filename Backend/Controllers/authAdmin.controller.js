const Admin = require("../Models/Admin")

const adminSchema = require("./Validation/authAdminValidation")

const jwt = require("jsonwebtoken")

const loginAdmin = async (req , res) =>{
    try {
        // Validate By Joi
        const {error, value} = adminSchema.validate(req.body, {abortEarly: false, stripUnknown: true});
        // Show Error
        if (error) return res.status(400).json({ msg: error.details.map((err) => err.message)});
        // Get Data
        const {email, password} = value;
        // Check Admin Account In DB
        const admin = await Admin.findOne({email});
        if(!admin) return res.status(400).json({msg: "Invalid Email or Password"})
        // Compare Password
        const matchedPassword = await admin.comparePassword(password);
        if(!matchedPassword) return res.status(400).json({msg: "Invalid Email or Password"})
        // Create Token
        const token = await jwt.sign({
            id: admin._id
        }, process.env.Secret_Key, {expiresIn: "1d"})
        // Response
        res.json({msg: "Sucess Login", token})
    } catch (error) {
        res.json(500).json({
            msg: "Internal Server Error"
        })
    }
}

module.exports = loginAdmin;