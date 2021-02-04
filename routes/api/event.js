const router = require("express").Router();
const controller = require("../../controllers/");

// Matches with "/api/user"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;