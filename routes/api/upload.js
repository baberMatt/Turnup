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
        // rejects storing a file
        cb(null, false);
    }
}

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
        console.log(req.file)
        let nameForDB = req.file.path.split("\\")
        console.log("DB NAME ", nameForDB)
        const update = {
            profilePicture: {
                imageName: nameForDB[2],
                imageData: req.file.path
            }
        };
        db.User
            .findOneAndUpdate({ _id: req.params.id }, update)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    })

    .delete(function (req, res) {
        console.log("params", req.params.id)
        fs.stat(`./uploads/profileImage/${req.params.id}`, function (err, stats) {
            if (err) {
                console.loge(err);
            } else {
                console.log(stats);
                fs.unlink(`./uploads/profileImage/${req.params.id}`, function (err) {
                    if (err) return console.log(err);
                    console.log("filed DELETED")
                });
            }
        }
        )
    });

router.route("/eventImage/:id")

    .post(upload2.single('imageData'), (req, res, next) => {
        if (req.body.type === "banner") {
            console.log(req.body)
            let nameForDB = req.file.path.split("\\")
            const update = { images: { banner: nameForDB[2], thumb: req.body.thumb } };
            console.log("namefor", nameForDB)
            db.Event
                .findOneAndUpdate({ _id: req.params.id }, update)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
        }

        if (req.body.type === "thumb") {
            console.log(req.body)
            let nameForDB = req.file.path.split("\\")
            const update = { images: { thumb: nameForDB[2], banner: req.body.banner } };
            console.log("namefor", nameForDB)
            db.Event
                .findOneAndUpdate({ _id: req.params.id }, update)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
        }
    })

    .delete(function (req, res) {
        console.log("params", req.params.id)
        fs.stat(`./uploads/eventImage/${req.params.id}`, function (err, stats) {
            if (err) {
                console.log(err);
            } else {
                console.log(stats);
                fs.unlink(`./uploads/eventImage/${req.params.id}`, function (err) {
                    if (err) return console.log(err);
                    console.log("filed DELETED")
                });
            }
        }
        )
    });


module.exports = router;