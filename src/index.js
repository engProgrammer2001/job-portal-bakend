import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js"; 
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import resumeRoute from "./routes/addresume.route.js";
dotenv.config({});

const app = express();

app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "welcome to our job portal api - node ", status: true });
});

app.use('/uploads', express.static('uploads'));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(cookieParser());

// cors origin policy
const corsOptions = {
  origin: "https://skokka.org.in/",
  credentials: true,
};
app.use(cors(corsOptions));
const PORT = process.env.PORT || 5454;

// register and login route 
app.use("/user", userRoute);

// add company routes
app.use("/company", companyRoute);

app.use("/job", jobRoute);

// application routes 
app.use("/application", applicationRoute);

// add resume routes
app.use("/resume", resumeRoute);



app.listen(PORT, () => {
    connectDB();
  console.log(`server is running on port ${PORT}`);
});
