import express from "express";
import {
    updateUser,
    deleteUser,
    getUser,
    getUsers

}from "../controllers/user.js";

// util functions to check in 
import { verifyToken, verifyUser,verifyAdmin } from "../utils/verifyToken.js";


const router=express.Router(); // Initialize in the router 

// checking in the auth 
router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello user,you are logeed in")
})

router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("hellouser,you are logged in and you can delete your account")
})

// middleware chaining 
router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("helloadmin,you are logged in and you can delete all accounts")
})

router.put("/:id",verifyUser,updateUser);
//delete
router.delete("/:id",verifyUser,deleteUser);
//get
router.get("/:id",verifyUser,getUser);
//getall
router.get("/",verifyAdmin,getUsers);
export default router;
