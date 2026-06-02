// require dotenv
require("dotenv").config();
// require mongoose
const mongoose = require("mongoose");
// require model
const Admin = require("../Models/Admin")

const addSuperAdmin = async () => {
    try {
        // Connect DB
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB is Matched App.js");
        // Check User found or not
        const existAdmin = await Admin.findOne({email: process.env.Email_Admin})
        if(existAdmin) return console.log("Account Is Found");
        // Create new Admin
        const superAdmin = {
            username: "super Admin",
            email: process.env.Email_Admin,
            password: "admin12345"
        }

        const admin = await Admin.create(superAdmin);

        console.log(admin);
    } catch (error) {
        console.log(error);
    }
    finally{
        await mongoose.connection.close();
        console.log("Database Is Closed");
        process.exit(0);
    }
}

addSuperAdmin();