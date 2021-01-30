const router = require("express").Router();
const { response } = require("express");
const controller = require("../../controllers/");
const passport = require("passport")

// Matches with "/api/user"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/user/:id"
router.route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

router.route('/login'), function(req, next) {
    req.get(controller.findAll)
    
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect('/users/' + user.username);
      });
    })(req, res, next);

  });

module.exports = router;