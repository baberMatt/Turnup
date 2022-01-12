const db = require("../models");

module.exports =
{

    findAll: function (req, res) {
        db.User
            .find(req)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function (req, res) {
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
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => { return res.status(422).json({ error: err.keyPattern }), console.log(err.keyPattern) });
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res, next) {
        db.User.findById(req.params.id, function (err, user) {
            db.Event.remove({
                "_id": {
                    $in: user.hosting
                }
            }, function (err) {
                if (err) return next(err);
                user.remove();
            });
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
