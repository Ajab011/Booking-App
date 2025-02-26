import User from "../models/User.js"
import bcrypt from "bcryptjs"
import{createError} from "../utils/error.js"
import jwt from "jsonwebtoken";
export const register =async (req,res,next)=>{
    try{

        console.log("control initial") 

        const salt = bcrypt.genSaltSync(10);
       const hash = bcrypt.hashSync(req.body.password, salt);


       const newUser= new User({
        username:req.body.username,
        email:req.body.email,
        password:hash,
        isAdmin:req.body.isAdmin // Changes to include in the isAdmin property on the db 
       
       })
       console.log("Control11")
       await newUser.save()
       res.status(200).send("User has been created")

       console.log("Control12")
       //we can use 201 status also that means new user created successfully
    }
    catch(err){
        next(err);
    }
};

export const login =async (req,res,next)=>{
    try{
        const user= await User.findOne({username:req.body.username});
        if(!user) 
            return next(createError(404,"User not found"));

        
        const PasswordCorrect= await bcrypt.compare(
            req.body.password,
            user.password);
     if(!PasswordCorrect) 
        return next(createError(402,"Wrong Password"));

    const token=jwt.sign({id:user._id, isAdmin:user.isAdmin},process.env.JWT)
    
       const{password,isAdmin}=user;
       
        res.cookie("access_token",token,{
            httpOnly:true,// it doesnot allow any client script to reach these cookie
        })
        .status(200)
        .json({
            "msg":"logged in successfully"
        });
    }
    catch(err){
        next(err);
    }
};