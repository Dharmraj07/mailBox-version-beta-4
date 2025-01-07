require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const mailRoutes = require("./routes/mailRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Enable CORS for localhost:5173

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/mail", mailRoutes);

// Dummy localhost route for testing
app.get("/test", (req, res) => {
  res.status(200).json({ success: true, message: "Server is working on localhost!" });
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
