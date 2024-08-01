import { db } from "../connect.js";
import jwt from "jsonwebtoken";
export const getLikes = async (req, res) => {
  const postId = req.query.postId;

  const q = `
        SELECT "userid" FROM likes WHERE "postid" = $1
    `;

  try {
    const result = await db.query(q, [postId]);

    const data = result.rows.map((like) => like.userid);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching likes:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addlike = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token Not Valid!");

    const postId = req.body.postId;
    if (!postId) {
        return res.status(400).json("postId is required"); // Bad request error
      }

    const q = `
            INSERT INTO likes (userid, postid) 
            VALUES ($1, $2)
        `;

    try {
      await db.query(q, [userInfo.id, postId]);

      return res.status(200).json("Post has been liked successfully");
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  });
};

export const deletelike = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token Not Valid!");

    const postId = req.query.postId;

    const q = `
            DELETE FROM likes WHERE userid=$1 AND postid=$2
        `;

    try {
      await db.query(q, [userInfo.id, postId]);

      return res.status(200).json("Post has been disliked");
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  });
};
