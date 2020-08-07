const express = require('express');
const router = express.Router();

const db = require('../models');

router.get("/all", (req,res) =>{
    db.todo.findAll().then(todos => res.send(todos));
});

router.get("/:id", (req,res) =>{
    db.todo.findAll({
        where :{
            id : req.params.id
        }
    }).then(todos => res.send(todos));
});

router.post("/new", (req,res) => {
    db.todo.create({
        heading: req.body.text,
        duration: req.body.text
    }).then(todos => res.send(todos));
});

// router.post

module.exports =router;