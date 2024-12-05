const db = require("../../db");
const bcrypt = require("bcrypt")
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username in MySQL
    const sql = "SELECT * FROM user_stock WHERE username = ?";

    // Use promise-based query
    const [results] = await db.query(sql, [username]);

    if (results.length === 0) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const userData = results[0];
    const validPassword = await bcrypt.compare(
      password,
      userData.password_hash
    );

    if (!validPassword) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // If the password is valid, send a success response
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
};
