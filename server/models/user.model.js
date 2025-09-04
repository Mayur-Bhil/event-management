import mongoose,{Schema,model} from "mongoose"


const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        min:[6,"Enter Password stronger password gratorr then 6 degits"],
        max:10
    },
    event_id:{
        type:Object.types.ObjectId,
        ref:"Event"
    },
    
},{
    timestamps:true
})