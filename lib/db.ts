import mongoose from "mongoose";

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!); 
        console.log("mongoBD connected")
    } catch (error) {
        console.log(error)
    }
}
export default connectDb