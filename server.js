import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {userRoute} from "./routes/user.route.js";
import {authRoute} from "./routes/auth.route.js";

// CONFIGURATIONS
const app = express()
dotenv.config();

// MONGOOSE SETUP
const URI = process.env.Mongo
const connect = async () => {
    try {
        await mongoose.connect(URI);
        console.log(`Connected to MongoDB Succesfull`)
    } catch (error) {
        console.log('Could not conect to MongoDB...', error)
    }
}

app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)

// LISTENING
const PORT = process.env.PORT
app.listen(PORT, ()=> {
    connect()
    console.log(`SERVER STARTED! on port:${PORT}`)
})