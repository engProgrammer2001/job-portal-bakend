
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_Url);
        console.log("MongoDB connected");
    } catch (err) {
        console.log(err);
    }
};
export default connectDB;




// const Database_Url = "mongodb+srv://jobportal:Jobportal2024@cluster0.6dde9.mongodb.net/";