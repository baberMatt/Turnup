const router = require("express").Router();
const controller = require("../../controllers/event.js");

// Matches with "/api/"
router.route("/")
  .get(controller.findAll)


module.exports = router;