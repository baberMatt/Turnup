const path = require("path");
const router = require("express").Router();
const userApiRoutes = require("./api/user.js");
const eventApiRoutes = require("./api/event.js");
const uploadApiRoutes = require("./api/upload.js");

// API Routes
router.use("/api/user", userApiRoutes);
router.use("/api/event", eventApiRoutes);
router.use("/api/upload", uploadApiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

