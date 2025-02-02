import User from "../models/User.js"
import bcrypt from "bcryptjs"
import{createError} from "../utils/error.js"
export const register =async (req,res,next)=>{
    try{

        const salt = bcrypt.genSaltSync(10);
       const hash = bcrypt.hashSync(req.body.password, salt);


       const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:hash,
       
       })
       await newUser.save()
       res.status(200).send("User has been created")
       //we can use 201 status also that means new user created successfully
    }
    catch(err){
        next(err);
    }
};

export const login =async (req,res,next)=>{
    try{
        
           console.log("Request Body:", req.body);
        
        const user= await User.findOne({username:req.body.username});
        console.log("Found User:", user);
        console.log("Found :", req.body.username);

        if(!user) 
            return next(createError(404,"User not found"));

        console.log(req.body);
        const PasswordCorrect= await bcrypt.compare(
            req.body.password,
            user.password);
            console.log("Password Check:", PasswordCorrect);
            
       if(!PasswordCorrect) 
        return next(createError(402,"Wrong Password"));
       
    //    const{password,isAdmin,...otherDetails}=user._doc 
       
       
       res.status(200).json(user);
       //we can use 201 status also that means new user created successfully
    }
    catch(err){
        next(err);
    }
};