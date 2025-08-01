import express from "express";
import { getRelationships, addRelationship, deleteRelationship, getFollowing } from "../Controllers/relationship.js";

const router = express.Router();

router.get("/", getRelationships)
router.get("/", getFollowing)
router.post("/", addRelationship)
router.delete("/", deleteRelationship)


export default router;