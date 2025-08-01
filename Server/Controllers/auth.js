import { db } from "../connect.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Remove dotenv config and use a hardcoded secret for demonstration
const JWT_SECRET = "PasswordLess";

export const register = async (req, res) => {
  try {
    // Check if user exists
    const checkQuery = "SELECT * FROM users WHERE username = $1";
    const { rows } = await db.query(checkQuery, [req.body.username]);

    if (rows.length) {
      return res.status(409).json("User already exists!");
    }

    // Create a new user and hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const insertQuery = "INSERT INTO users (username, email, password, name) VALUES ($1, $2, $3, $4)";

    await db.query(insertQuery, [req.body.username, req.body.email, hashedPassword, req.body.name]);

    return res.status(200).json("User has been created");
  } catch (error) {
    return res.status(500).json(error);
  }
};



export const login = async (req, res) => {
  const q = "SELECT * FROM  users WHERE username = $1";

  try {
    const { rows } = await db.query(q, [req.body.username]);
    if (rows.length === 0) {
      return res.status(404).json("User not Found!");
    }

    const checkPassword = await bcrypt.compare(req.body.password, rows[0].password);
    if (!checkPassword) return res.status(400).json("Wrong password or username!");

    const token = jwt.sign({ id: rows[0].id }, JWT_SECRET); // Use hardcoded secret
    const { password, ...others } = rows[0];
    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none"
    }).status(200).json(others);

  } catch (error) {
    return res.status(500).json(error)
  }

}
export const logout = (req, res) => {

  res.clearCookie("accessToken", {
    secure: true,
    sameSite: "none"
  }).status(200).json("User has been logged out")
}