import mongoose,{Schema,model} from "mongoose";
const EventSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    event_status:{
        enum:["availabe","not-available"]
    },
    userId:{
        type:Object.types.ObjectId,
        ref:"User"
    },
    address:{
        type:String,
        required:true
    }
})