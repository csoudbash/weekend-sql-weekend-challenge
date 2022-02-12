const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req,res) => {
    let newTask = req.body;
    const queryText = `
    INSERT INTO "to-do-list"("task", "description", "date", "is-complete")
    VALUES ($1, $2, $3, $4);
    `;
    pool.query(queryText , [newTask.task, newTask.description, newTask.date, newTask.isComplete])
    .then((result) => {
    res.sendStatus(200);
    
    }).catch((error) => {
    console.log('rut ro scoob!', error);
    })
})







module.exports = router;

