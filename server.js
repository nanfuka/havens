// const express = require("express");
// const app = express();

// const customerRoutes = require("./routes/customers");
// const financeRoutes = require("./routes/finances");

// app.use(express.json());

// app.use("/api/customers", customerRoutes);
// app.use("/api/finance", financeRoutes);

// const PORT = 3002;

// app.listen(PORT, () => {
//   console.log(`Kirabo Havens API running on port ${PORT}`);
// });
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello! Your server is running 🚀");
});

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

