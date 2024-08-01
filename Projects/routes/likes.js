import express from "express";
import { getLikes,addlike,deletelike} from "../Controllers/like.js";

const router=express.Router();

router.get("/",getLikes)
router.post("/",addlike)
router.delete("/",deletelike)


export default router;