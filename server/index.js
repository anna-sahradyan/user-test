const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectDB = require("./config/connectDB");
const userRouter = require('./routes/user-router.js');
app.use(cors({origin:true}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//?DEPLOYMENT CODE
app.get("/", (req, res) => {
    res.send("Home Page")
});
//?Router
app.use("/api/users", userRouter);

connectDB();
app.listen(PORT, () => {
    console.log(` Server is running in http://localhost:${PORT}`)
})



