import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";
import {v2 as cloudinary} from "cloudinary"; // Import your cloudinary config
import dotenv from "dotenv";
dotenv.config();

export const getPosts = async (req, res) => {

   const userId = req.query.userId;

   const token = req.cookies.accessToken;
   if (!token) return res.status(401).json("Not logged in!");

   jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
      if (err) return res.status(403).json("Token Not Valid!");


      const q = userId ? `SELECT p.*, u.id AS "userId", u.name, u.profilepic 
FROM posts AS p 
JOIN users AS u ON p.userId = u.id 
WHERE p.userId = $1
`
         : `SELECT DISTINCT p.*, u.id AS userId, u.name, u.profilepic 
    FROM posts AS p 
    JOIN users AS u ON p.userId = u.id 
    LEFT JOIN relationships AS r ON p.userId = r.followeduserid 
    WHERE r.followeruserid = $1 OR p.userId = $2
    `;

      try {
         const { rows } = await db.query(q, userId ? [userId] : [userInfo.id, userInfo.id]); // Use await to wait for the query to finish
         // Log data after successful retrieval
         return res.status(200).json(rows);
      } catch (error) {
         console.error(error);
         return res.status(500).json(error);
      }
   })


};
export const addPost = async (req, res) => {
   const token = req.cookies.accessToken;
   if (!token) return res.status(401).json("Not logged in!");

   jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
      if (err) return res.status(403).json("Token Not Valid!");

      let { descp, img } = req.body; // Destructure descp and img from req.body

      // If img is a base64 string, upload to Cloudinary
      if (img && img.startsWith("data:")) {
         try {
            const { secure_url } = await cloudinary.uploader.upload(img);
            img = secure_url;
         } catch (err) {
            console.error("Cloudinary upload error (post image):", err);
            return res.status(500).json("Post image upload failed.");
         }
      }

      const q = `INSERT INTO posts (descp, img, userid, createdt) VALUES ($1, $2, $3, $4)`;

      try {
         const { rows } = await db.query(q, [descp, img, userInfo.id, moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")]);
         return res.status(200).json(rows);
      } catch (error) {
         console.error(error);
         return res.status(500).json(error);
      }
   });
};


export const deletePost = async (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

    jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
        if (err) return res.status(403).json("Token Not Valid!");

        const q = `DELETE FROM posts WHERE id=$1 AND userid=$2`;

        try {
            const { rowCount } = await db.query(q, [req.params.id, userInfo.id]);

            // Check if any rows were affected
            if (rowCount > 0) {
                return res.status(200).json("Post deleted successfully.");
            }

            return res.status(403).json("You can delete only your own posts.");
        } catch (error) {
            console.error(error);
            return res.status(500).json("An error occurred while trying to delete the post.");
        }
    });
};
