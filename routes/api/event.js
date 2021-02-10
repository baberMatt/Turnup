const router = require("express").Router();
const controller = require("../../controllers/event.js");

// Matches with "/api/event"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

router.route("/one")
  .post(controller.findOne);

module.exports = router;