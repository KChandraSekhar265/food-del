import mongoose from "mongoose"

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://chandu020605:IANJjeoqo9OGzCnz@cluster0.jgyi7.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}