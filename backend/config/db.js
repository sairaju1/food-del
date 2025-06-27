
import mongoose from "mongoose";

export const connectDB = async () => {
  
    await mongoose.connect('mongodb+srv://sunkarisaikumar2004:sairaju1@cluster0.g4lrw6g.mongodb.net/food-del');
    console.log("DB Connected");
  
};

