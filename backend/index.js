import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './config/connect.js'
import userRoutes from './routes/userRoutes.js'
import courseRoutes from "./routes/courseRoutes.js"
import bodyParser from 'body-parser';

const app = express();

dotenv.config();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL

connectDB(DATABASE_URL);
const corsOptions = { origin: "*", credentials: true };
app.use(cors(corsOptions))
// app.use(cors());
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use('/user',userRoutes);
app.use("/course", courseRoutes);

 app.get('/', (req, res)=>{
    res.send("<h1>Shree Ganesh </h1>");
 })

 app.listen(PORT, ()=>{
    console.log("server started....")
 })