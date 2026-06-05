const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET all customers
router.get("/", (req, res) => {

  const sql = `
    SELECT name, dateBooked, service
    FROM bookings
  `;

  db.query(sql, (err, results) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(results);

  });

});

module.exports = router;