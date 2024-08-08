import mongoose from "mongoose";

type ConnectionObject ={
    isConnected?: number
}

const connection : ConnectionObject={}

async function dbConnect(): Promise<void>{
    // checking if there is already connection in the DB
     if(connection.isConnected){
        console.log("Already connected to databse");
        return
     }
  try{
    // connection the DB 
    const db= await mongoose.connect(process.env.MONGODB_URI || '',{})

    connection.isConnected=db.connections[0].readyState

    console.log("DB connected Successfully");

  } catch(error){
      console.log("DB connection failed",error);
    process.exit(1);
  }

}

export default dbConnect;