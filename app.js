const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userAuth = require("./Routers/user");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://anandiyengar1993:Anand@1993@cluster0.iyflr.mongodb.net/blog-app",{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then((res)=>{
    console.log("DATABASE HAS BEEN CONNECTED!");
}).catch((err)=>{
    console.log("SOMETHING IS WRONG BHAI!");
})
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api",userAuth);

app.listen(port,(req,res)=>{
    console.log("APP IS STARTED");
})