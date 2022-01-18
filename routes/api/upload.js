const express = require('express');
const fs = require("fs");
const router = require("express").Router();
const multer = require('multer');
const db = require("../../models");

const storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/profileImage');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/eventImage');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload1 = multer({
    storage: storage1,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

const upload2 = multer({
    storage: storage2,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});



router.route("/profileImage/:id")
    .post(upload1.single('imageData'), (req, res, next) => {
        const update = {
            profilePicture: {
                imageName: req.file.filename,
                imageData: req.file.path
            }
        };
        
        db.User
            .findOneAndUpdate({ _id: req.params.id }, update)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    })

    .delete(function (req, res) {
        fs.stat(`./uploads/profileImage/${req.params.id}`, function (err, stats) {
            if (err) {
                console.loge(err);
            } else {
                fs.unlink(`./uploads/profileImage/${req.params.id}`, function (err) {
                    if (err) return console.log(err);
                    console.log("filed DELETED")
                });
            };
        });
    });

router.route("/eventImage/:id")
    
    .post(upload2.single('imageData'), (req, res, next) => {
        console.log("eventImage route")
        if (req.body.type === "banner") {
            const update = { images: { banner: req.file.filename, thumb: req.body.thumb } };
            db.Event
                .findOneAndUpdate({ _id: req.params.id }, update)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
        };
        if (req.body.type === "thumb") {
            const update = { images: { thumb: req.file.filename, banner: req.body.banner } };
            db.Event
                .findOneAndUpdate({ _id: req.params.id }, update)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
        };
    })

    .delete(function (req, res) {
        fs.stat(`./uploads/eventImage/${req.params.id}`, function (err, stats) {
            if (err) {
                console.log(err);
            } else {
                fs.unlink(`./uploads/eventImage/${req.params.id}`, function (err) {
                    if (err) return console.log(err);
                    console.log("filed DELETED");
                });
            };
        });
    });

module.exports = router;