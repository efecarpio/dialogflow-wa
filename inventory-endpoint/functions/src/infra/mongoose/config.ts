import mongoose from "mongoose";

mongoose.Promise = global.Promise;
const conn = "mongodb+srv://dbadmtest:LNvr73zPIgtuFbsq";
const dbname = "@clusterdev0.wmair.mongodb.net/wachatbot";

export async function connect(): Promise<void> {
  try {
    const url = conn + dbname + "?retryWrites=true&w=majority";
    await mongoose.connect(url);
    console.log(">>> Database connected");
  } catch (e) {
    console.log("Databse not connected " + e.message);
  }
}
