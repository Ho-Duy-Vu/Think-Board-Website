import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import noteRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import  rateLimiter  from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//middleware (req la client gui len vd : get; put; pull; delete, res la server tra ve vd nhu json;200;404)
app.use(cors({
    origin: "http://localhost:5173", // cho phep frontend gui request den backend
})); 
app.use(express.json()); // this middleware parses incoming JSON requests and puts the parsed data in req.body 
app.use(rateLimiter);


app.use("/api/notes", noteRoutes);

connectDB().then(() => {
    app.listen(PORT, () =>{
        console.log(`Server is running on port ${PORT}`);
    });
});





// 