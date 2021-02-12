const router = require("express").Router();
const { response } = require("express");
const controller = require("../../controllers/event.js");

// Matches with "/api/event"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

router.route("/one")
  .post(controller.findOne);

router.route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);
module.exports = router;