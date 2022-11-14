import bodyParser from "body-parser";
import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import dataRouter from './router/dataRouter.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.use(cors());

app.use('/',dataRouter);


mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).
then(()=> app.listen(process.env.PORT|| 5000,()=> console.log(`server Started At Port : ${process.env.PORT}`))).
catch((error)=> console.log(`server Error: ${error}`));