import express, { Response, NextFunction } from "express";
import Request from "./types/Request";
import connectDB from "./config/connection";
import userRouter from "./routes/api/user";

const app = express();
// Connect to MongoDB
connectDB.then();
// Main middleware
app.use(express.json())

// test api
app.get("/test", (req: Request, res: Response) => {
  res.send("Well done!");
});

// Routes
app.use('/api/user', userRouter)


// No route matched, 404 not found
app.use((req: Request, res: Response, next: NextFunction)=>{
    res.status(404).send(`${req.originalUrl} is not exist`)
})


const PORT = process.env.PORT || 3500
const server = app.listen(PORT, () => console.log(`server is up on port ${PORT}`))