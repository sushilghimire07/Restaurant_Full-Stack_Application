import mongoose from "mongoose";
import validator from 'validator';

const reservationSchema = new mongoose.Schema({

   firstName:{
    type:String,
    required:true,
    minLength:[3,"Frist Name contain at least 3 character..!!"],
    maxLength:[30,"Frist Name cannot exceed 30 character..!!"]
   },
   lastName:{
    type:String,
    required:true,
    minLength:[3,"Lasr Name contain at least 3 character..!!"],
    maxLength:[30,"Last Name cannot exceed 30 character..!!"]
   },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid Email..!!"],
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone number contain 10 digits..!!"],
        maxLength:[10,"Phone number contain 10 digits..!!"]
    },
    time:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true,
    }

})
 const Reservation = mongoose.model("Reservation",reservationSchema);

 export default Reservation;