const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const md5 = require("blueimp-md5");

const app = express();
const PORT = process.env.PORT || 8000;

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
  const hashpass = md5(password);

  const query = "SELECT * FROM users WHERE phone_number = ?";
  pool.query(query, [phone], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    if (result.length > 0) {
      const user = result[0];
      if (user.password === hashpass) {
        res.json({
          success: true,
          username: user.username,
          userId: user.uid,
        });
      } else {
        res.json({
          success: false,
          message: "Invalid phone number or password",
        });
      }
    } else {
      res.json({ success: false, message: "Invalid phone number or password" });
    }
  });
});

app.get("/course", (req, res) => {
  const query = "SELECT * FROM paid_couses";
  pool.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(result);
  });
});

app.get("/banners", (req, res) => {
  const query = "SELECT * FROM banners"; // Assuming your table is named 'banners'

  pool.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(result);
  });
});
app.post("/mocktest_category", (req, res) => {
  const query = "SELECT * FROM mock_test_category"; // Assuming your table is named 'banners'

  pool.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(result);
  });
});

app.post("/tests/:mockTest_id", (req, res) => {
  const { mockTest_id } = req.params;
  const query = "SELECT * FROM mock_tests WHERE test_category_id=?"; // Assuming your table is named 'banners'
  pool.query(query, [mockTest_id], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(result);
  });
});

app.post("/tests/:mockTest_id/:mockTest_id_test_id", (req, res) => {
  const { mockTest_id, mockTest_id_test_id } = req.params;
  const query = "SELECT * FROM test_questions WHERE mock_test_id=?"; // Assuming your table is named 'banners'
  pool.query(query, [mockTest_id_test_id], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(result);
  });
});

app.get("/userorders", (req, res) => {
  const { user } = req.body;
  const query = "SELECT * FROM user_orders"; // Assuming your table is named 'banners'

  pool.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(result);
  });
});

app.get("/ebooks", (req, res) => {
  const { files } = req.body;
  const query = "SELECT * FROM ebooks";
  pool.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
