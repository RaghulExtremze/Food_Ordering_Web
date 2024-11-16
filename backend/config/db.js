import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://raghulexm:raghulexm123@cluster0.6drex.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


