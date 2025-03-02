import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoom,
    updateRoom,
    deleteRoom,
    getRoom,
    getRooms } from "../controllers/room.js";
const router=express.Router();

//create
router.post("/:hotelid",verifyAdmin,createRoom);
//update
router.put("/:id",verifyAdmin,updateRoom);
//delete
router.delete("/:id/:hotelId",verifyAdmin,deleteRoom);
//get
router.get("/:id",getRoom);
//getall
router.get("/",getRooms);
export default router;