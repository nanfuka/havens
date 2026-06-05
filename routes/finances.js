const express = require("express");
const router = express.Router();
const bookings = require("../data/bookings");

// 💰 View all deposits
router.get("/deposits", (req, res) => {
  const deposits = bookings.map(b => ({
    name: b.name,
    deposit: b.deposit
  }));

  res.json(deposits);
});

// 💸 View pending balance
router.get("/pending-balance", (req, res) => {
  const balances = bookings.map(b => ({
    name: b.name,
    pendingBalance: b.totalCost - b.deposit
  }));

  res.json(balances);
});

module.exports = router;