import express from "express";
import {
    updateUser,
    deleteUser,
    getUser,
    getUsers

}from "../controllers/user.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";
const router=express.Router();
router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello user,you are logeed in")
})
router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("hellouser,you are logged in and you can delete your account")
})

//update
router.put("/:id",updateUser);
//delete
router.delete("/:id",deleteUser);
//get
router.get("/:id",getUser);
//getall
router.get("/",getUsers);
export default router;
