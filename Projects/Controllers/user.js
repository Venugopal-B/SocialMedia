import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

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

    jwt.verify(token, "secretkey", async (err, userInfo) => {
        if (err) {
            console.error("Token verification error:", err);
            return res.status(403).json("Token Not Valid!");
        }

        // Construct the SQL query
        const query = `
            UPDATE users
            SET name = $1, city = $2, website = $3, profilepic = $4, coverpic = $5
            WHERE id = $6
        `;
        const values = [
            req.body.name,
            req.body.city,
            req.body.website,
            req.body.profilepic,
            req.body.coverpic,
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
            // Handle specific PostgreSQL error codes if necessary
            return res.status(500).json("An error occurred while updating the profile.");
        }
    });
};