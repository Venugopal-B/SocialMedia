import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const getRelationships = async (req, res) => {
    const postId = req.query.followeduserid;

    const q = `
        SELECT followeruserid FROM relationships WHERE followeduserid=$1
    `;

    try {
        const result = await db.query(q, [postId]);

        const data = result.rows.map((relationship) => relationship.followeruserid);

        return res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching likes:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
export const getFollowing = async (req, res) => {
    const userId = req.query.userId;

    const q = `
        SELECT followeduserid FROM relationships WHERE followeruserid=$1
    `;

    try {
        const result = await db.query(q, [userId]);

        const data = result.rows.map((relationship) => relationship.followeduserid);

        return res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching following:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};



export const addRelationship = async (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

    jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
        if (err) return res.status(403).json("Token Not Valid!");

        const postId = req.body.userId;
        if (!postId) {
            return res.status(400).json("postId is required"); // Bad request error
        }

        const q = `
            INSERT INTO relationships (followeruserid, followeduserid) 
            VALUES ($1, $2)
        `;

        try {
            await db.query(q, [userInfo.id, postId]);

            return res.status(200).json("Following");
        } catch (error) {
            console.error(error);
            return res.status(500).json(error);
        }
    });
};

export const deleteRelationship = async (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

    jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
        if (err) return res.status(403).json("Token Not Valid!");

        const postId = req.query.userId;

        const q = `
            DELETE FROM relationships WHERE followeruserid=$1 AND followeduserid=$2
        `;

        try {
            await db.query(q, [userInfo.id, postId]);

            return res.status(200).json("Unfollow");
        } catch (error) {
            console.error(error);
            return res.status(500).json(error);
        }
    });
};
