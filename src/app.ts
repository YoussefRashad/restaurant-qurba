import express from "express";
import connectDB from "./config/connection";
import userRouter from "./routes/api/user";

const app = express();
// Connect to MongoDB
connectDB.then();
// Main middleware
app.use(express.json())

// test api
app.get("/test", (req, res) => {
  res.send("Well done!");
});

// Routes
app.use('/api/user', userRouter)



// No route matched, 404 not found
app.use((req, res, next)=>{
    res.status(404).send(`${req.originalUrl} is not exist`)
})


const PORT = process.env.PORT || 3500
const server = app.listen(PORT, () => console.log(`server is up on port ${PORT}`))