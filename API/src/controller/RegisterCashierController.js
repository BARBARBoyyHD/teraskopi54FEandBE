const db = require("../../db");
const bcrypt = require("bcrypt")
exports.register = async (req, res) => {
  try {
    const { username, password, contact } = req.body;

    // Hash the password
    const saltRounds = 10;
    const password_hash = await bcrypt.hash(password, saltRounds);

    // Insert the new user into the database
    const query =
      "INSERT INTO user_cashier (username, password_hash, contact) VALUES (?, ?, ?)";

    // Use promise-based query
    const [results] = await db.query(query, [username, password_hash, contact]);

    res.status(201).json({
      id: results.insertId, 
      username,
      contact,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};
