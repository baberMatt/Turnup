const db = require("../models");


module.exports =
//users
{

    findAll: function (req, res) {
        db.User
            .find(req)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function (req, res) {
        console.log(req.body)
        db.User
            .findOne({ Username: req.body.Username })
            .populate("hosting")
            .populate({
                path: "attending",
                populate: {
                    path: 'event',
                    model: "Event"
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .populate("hosting")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(req.body)
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {return res.status(422).json({error: err.keyPattern}), console.log(err.keyPattern)});
    },
    update: function (req, res) {
        console.log("user " + req.body)
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res, next) {
        console.log("fired remove")
        db.User.findById(req.params.id, function(err, user) {
                    console.log(user)
                    db.Event.remove({
                        "_id": {
                            $in: user.hosting
                        }
                    }, function (err) {
                        if (err) return next(err);
                        user.remove();
                    })
                }
            )
            // .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },



};
