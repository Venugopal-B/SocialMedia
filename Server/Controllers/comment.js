import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";
import dotenv from "dotenv";
dotenv.config();

// Function to get comments for a specific post
export const getComments = async (req, res) => {
    // SQL query to select comments with user details
    const q = `
        SELECT c.*, u.id AS "userId", u.name, u.profilepic 
        FROM comments AS c 
        JOIN users AS u ON c.commentuserid = u.id 
        WHERE c.commentpostid = $1 
        ORDER BY c.createdat DESC
    `;

    try {
        // Execute the query with the postId from request query parameters
        const { rows } = await db.query(q, [req.query.postId]);
        return res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

// Function to add a new comment to a post
export const addComment = async (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

    jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
        if (err) return res.status(403).json("Token Not Valid!");

        // Destructure descp and postId from the request body
        const { descp, postId } = req.body;

        // SQL query to insert a new comment
        const q = `
            INSERT INTO comments (descp, createdat, commentuserid, commentpostid) 
            VALUES ($1, $2, $3, $4)
        `;

        try {
            // Execute the query with the comment details
            await db.query(q, [
                descp,
                moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                userInfo.id,
                postId
            ]);

            return res.status(200).json("Comment added successfully");
        } catch (error) {
            console.error(error);
            return res.status(500).json(error);
        }
    });
};
