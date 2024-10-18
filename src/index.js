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

// Base route
app.get("/", (req, res) => {
  return res.status(200).send({ 
    message: "Welcome to our job portal API - Node.js", 
    status: true 
  });
});

app.use('/uploads', express.static('uploads'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  //  origin: "http://localhost:3000",
   origin: "https://skokka.org.in",
  credentials: true, 
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); 

const PORT = process.env.PORT || 5454;

// Register and login route
app.use("/user", userRoute);

// Add company routes
app.use("/company", companyRoute);

app.use("/job", jobRoute);

// Application routes 
app.use("/application", applicationRoute);

// Add resume routes
app.use("/resume", resumeRoute);

// Start the server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});

