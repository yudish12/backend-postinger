import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './Routes/posts.js';
import dotenv from 'dotenv';
import userRoutes from './Routes/user.js';
import cookieSession from 'cookie-session'
import passport from 'passport';
// import passportSetup from './passport.js';

dotenv.config();

const app = express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

app.use(cookieSession({
    name:"session",
    keys: ["cyberwolve"],
    maxAge:24*60*60*100,
})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use('/posts',postRoutes);
app.use('/users',userRoutes);

app.get('/',(req,res)=>{
    res.send("App is running");
})

const connection_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(connection_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>app.listen(PORT,()=>console.log(`Server runnning on port:${PORT}`)))
.catch((err)=>console.log(err));