
import mongoose from "mongoose";

const DB_URL = 'mongodb://localhost:27017/restaurant'

export default mongoose.connect(DB_URL)