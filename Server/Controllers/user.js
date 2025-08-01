import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";
import {v2 as cloudinary} from "cloudinary"; // Import your cloudinary config
import dotenv from "dotenv";
dotenv.config();
export const getUser = async (req, res) => {
    const userId = req.params.userId;
    const query = "SELECT * FROM users WHERE id = $1";

    try {
        // Using async/await to handle the database query
        const result = await db.query(query, [userId]);
        const data = result.rows; // Assuming you're using a client that returns `rows` array

        if (data.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        const { password, ...info } = data[0];
        return res.json(info);
    } catch (err) {
        console.error('Database query error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
export const updateUser = async (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

    jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
        if (err) {
            console.error("Token verification error:", err);
            return res.status(403).json("Token Not Valid!");
        }

        let profilepicUrl = req.body.profilepic;
        let coverpicUrl = req.body.coverpic;

        // If profilepic is a base64 string, upload to Cloudinary
        if (profilepicUrl && profilepicUrl.startsWith("data:")) {
            try {
                const { secure_url } = await cloudinary.uploader.upload(profilepicUrl);
                profilepicUrl = secure_url;
            } catch (err) {
                console.error("Cloudinary upload error (profilepic):", err);
                return res.status(500).json("Profile image upload failed.");
            }
        }

        // If coverpic is a base64 string, upload to Cloudinary
        if (coverpicUrl && coverpicUrl.startsWith("data:")) {
            try {
                const { secure_url } = await cloudinary.uploader.upload(coverpicUrl);
                coverpicUrl = secure_url;
            } catch (err) {
                console.error("Cloudinary upload error (coverpic):", err);
                return res.status(500).json("Cover image upload failed.");
            }
        }

        const query = `
            UPDATE users
            SET name = $1, city = $2, website = $3, profilepic = $4, coverpic = $5
            WHERE id = $6
        `;
        const values = [
            req.body.name,
            req.body.city,
            req.body.website,
            profilepicUrl,
            coverpicUrl,
            userInfo.id,
        ];

        try {
            const result = await db.query(query, values);

            if (result.rowCount > 0) {
                return res.json("Profile updated successfully.");
            } else {
                return res.status(403).json("You can only update your own profile.");
            }
        } catch (dbError) {
            console.error("Database error:", dbError);
            return res.status(500).json("An error occurred while updating the profile.");
        }
    });
};

// In your React component
const handleImageUpload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "YOUR_UNSIGNED_UPLOAD_PRESET");
  const res = await fetch("https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload", {
    method: "POST",
    body: data,
  });
  const result = await res.json();
  return result.secure_url;
};

// Usage:
const onProfileUpdate = async (file, otherData) => {
  const imageUrl = await handleImageUpload(file);
  await axios.put("/api/user/update", {
    ...otherData,
    profilepic: imageUrl,
  });
};