const express = require('express');
const app = express();
const cors = require("cors")
const dotenv = require("dotenv").config()
const connect = require("./config/db")
const PORT = process.env.PORT;
const userRoute = require("./routes/userRoutes")
const jobRoute = require("./routes/adminRoute");

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({origin:true,credentials:true}))

app.get("/user",userRoute.getProfile)
app.post("/user/signup",userRoute.Signup)
app.post("/user/login",userRoute.Login)
app.post("/admin/job", jobRoute.Job);
app.get("/admin/alljobs", jobRoute.getAlljobs);
app.get("/",(req,res)=>res.send("Hello"))

app.listen(PORT,async()=>{
    await connect()
    console.log(`Server started on http://localhost:${PORT}`);
})