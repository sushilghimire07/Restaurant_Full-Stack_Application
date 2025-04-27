import mongoose from "mongoose";

const dbConnection = () =>{
    mongoose.connect(`${process.env.MONGO_URL}`,{
        dbName:"RESTAURANT"
    }).then(()=>{
        console.log("Connected databse sucessfully");
    }).catch(e =>{
        console.log("Some error occur while connecting database"+e)
    })
}

export default dbConnection;