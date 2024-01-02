const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5173;

app.use(cors());
app.use(bodyParser.json());

const pool = mysql.createPool({
  host: "auth-db832.hstgr.io",
  user: "u127142754_ishtworld_user",
  password: "H#&nS?0c%TYGH",
  database: "u127142754_ishtworld_db",
});

app.get("/", (req, res) => {
  pool.query("SELECT 1", (err, result) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json({ success: true, message: "Connected to MySQL database" });
  });
});

app.post("/login", (req, res) => {
  const { phone, password } = req.body;

  const query = "SELECT * FROM users WHERE phone = ? AND password = ?";
  pool.query(query, [phone, password], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    if (result.length > 0) {
      const user = result[0];
      res.json({ success: true, username: user.username });
    } else {
      res.json({ success: false, message: "Invalid phone number or password" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
