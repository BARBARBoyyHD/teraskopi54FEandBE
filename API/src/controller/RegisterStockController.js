const db = require("../../db")
const bcrypt = require("bcrypt")
exports.register = async (req,res)=>{
    try {
        const { username, password, contact } = req.body;
    
        // Hash the password
        const saltRounds = 10;
        const password_hash = await bcrypt.hash(password, saltRounds);
    
        // Insert the new user into the MySQL database
        const sql =
          "INSERT INTO user_stock (username, password_hash, contact) VALUES (?, ?, ?)";
    
        // Use promise-based query
        const [results] = await db.query(sql, [username, password_hash, contact]);
    
        // Send back the inserted data as a response
        res.status(201).json({ id: results.insertId, username, contact });
      } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
      }
}