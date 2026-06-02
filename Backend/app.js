require("dotenv").config();


const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());

// Single logger
if (process.env.NODE_ENV === "dev") {
    app.use(morgan("dev"));
    }

if (process.env.NODE_ENV === "dev") {
    app.use(morgan("combined"))
}

app.get('/test',(req,res)=>{
    res.json({msg:'test'})
});

const connect = require("./Config/db")
connect();

const adminRoutes = require("./Routes/adminRoute");

app.use("api/dashboard", adminRoutes)

const port = process.env.PORT || 3000;
    
app.listen(port,()=>{
    console.log("Server Running");
});