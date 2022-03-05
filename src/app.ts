import express from "express";
import connectDB from "./db/connection";

const app = express();
// Connect to MongoDB
connectDB.then();

app.use(express.json())


app.get("/test", (req, res) => {
  res.send("Well done!");
});


// No route matched, 404 not found
app.use((req, res, next)=>{
    res.status(404).send(`${req.originalUrl} is not exist`)
})


const PORT = process.env.PORT || 3500
const server = app.listen(PORT, () => console.log(`server is up on port ${PORT}`))