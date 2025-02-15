import mongoose from 'mongoose';
const{Schema}=mongoose;

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
},{timestamps:true}) //Timestamps meaning at what time user has created and updated  
export default mongoose.model("User",UserSchema)
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YWI0MmU2YjdjNzFmODc3NTExYzdlNyIsImlzQWR
// taW4iOmZhbHNlLCJpYXQiOjE3MzkyNzcxNDh9.H-wioz_brLtRuXNWN7A87vrR2Sfeu8waM_tdPRi9dlk
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YWI0MmU2YjdjNzFmODc3NTExYzdlNyIsImlzQWR
// taW4iOmZhbHNlLCJpYXQiOjE3MzkyNzcxNDh9.H-wioz_brLtRuXNWN7A87vrR2Sfeu8waM_tdPRi9dlk
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YWI0MmU2YjdjNzFmODc3NTExYzdlNyIsImlzQWR
// taW4iOmZhbHNlLCJpYXQiOjE3MzkyNzcxNDh9.H-wioz_brLtRuXNWN7A87vrR2Sfeu8waM_tdPRi9dlk

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YWI0MjNlYjdjNzFmODc3NTExYzdlNCIsImlzQWR
// taW4iOmZhbHNlLCJpYXQiOjE3MzkyNzY4OTJ9.aI2tmXNQ09ctEQaQuAfL1miz5tX6mjpcKaoVIyYGX-Q