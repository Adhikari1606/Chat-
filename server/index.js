const express= require("express");
const cors =require("cors");
const mongoose= require("mongoose");


const app=express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB Connected!!")
}).catch((err)=>{
    console.log(`DB connection failed error occur : ${err}`)
});

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server Started at Port : ${process.env.PORT}` );
});

