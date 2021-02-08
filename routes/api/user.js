const router = require("express").Router();
const { response } = require("express");
const controller = require("../../controllers/");
const passport = require("passport")

// Matches with "/api/user"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

router.route("/one")
  .get(controller.findOne)

router.route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);



module.exports = router;