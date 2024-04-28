import mongoose from "mongoose";
 
const uname = "sgdevil88";
const pass = encodeURIComponent("15220773");
const dbName = "oms";

const connectDb = async()=>{
    try {
      const status = await mongoose.connect(`mongodb+srv://${uname}:${pass}@cluster0.kmhoabs.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`);
       console.log("connected");
    } catch (error) {
        console.log(error+"connection failed");
    }
}

export default connectDb;

