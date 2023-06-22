const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectDB = require("./config/connectDB");
const userRouter = require('./routes/user-router.js');

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Credentials", "true");
    res.set("Access-Control-Max-Age", "1800");
    res.set("Access-Control-Allow-Headers", "content-type");
    next();
});
app.use(cors({origin: "http://localhost:3000",
    credentials: true,
    exposedHeaders: ["Content-Length", "X-Foo", "X-Bar"],}));
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



