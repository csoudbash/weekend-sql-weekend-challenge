const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req,res) => {
    let newTask = req.body;
    const queryText = `
    INSERT INTO "to-do-list"("task", "description", "date", "isComplete")
    VALUES ($1, $2, $3, $4);
    `;
    pool.query(queryText , [newTask.task, newTask.description, newTask.date, newTask.isComplete])
    .then((result) => {
    res.sendStatus(200);
    
    }).catch((error) => {
    console.log('rut ro scoob!', error);
    })
})

router.get('/', (req,res)=>{
    let id = req.params.id;
    let queryText = 'SELECT * FROM "to-do-list" ORDER BY "date";';
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error', queryText, error);
    })
});

router.delete('/:id', (req, res) => {
    let idToDelete = req.params.id;
    let queryText = 'DELETE FROM "to-do-list" WHERE "id" = $1;';
    pool.query(queryText, [idToDelete])
    .then((result) => {
        // console.log('song deleted');
        res.sendStatus(200);
    }).catch((error) => {
        console.log(' rut ro scoob, we has an error', queryText, error);
        res.sendStatus(418);
    })
})


router.put('/:id', (req, res) => {
    let reqId = req.params.id;
    let queryText;
    let text = req.body.iscomplete;
    console.log(text);
    if (text === 'false') {
        console.log('turn true!!');
        queryText = `UPDATE "to-do-list" SET "isComplete" = TRUE WHERE "id" =  $1`;
    }
    if (text === 'true') {
        console.log('turn false!!');
        queryText = `UPDATE "to-do-list" SET "isComplete" = FALSE WHERE "id" =  $1`;
    }
    pool.query(queryText, [reqId])
    .then((result) => {
        console.log('koala status updated');
        res.sendStatus(200);
    }) 
    .catch((error) => {
        console.log('catch error dude', queryText, error);
        res.sendStatus(500);
    })
})

// router.put('/:id', (req,res) => {
//     let reqId = req.params.id;
//     let text = req.body;
//     let textQuery;
//     let queryText
//     console.log(text);
//     // if (text.iscomplete === 'true') {
//     //     console.log('turn false');
//     //     textQuery = 'UPDATE "to-do-list" SET "isComplete" = FALSE WHERE "id" =  $1;';
//     // }
//     // if (text.iscomplete === 'false') {
//     //     console.log('turn true')
//         queryText ='UPDATE "to-do-list" SET "isComplete" = TRUE WHERE "id" =  4;';
//     // }
    
//     pool.query(queryText, [reqId])
//     .then((result) => {
//         console.log('koala status updated');
//         res.sendStatus(200);
//     }) 
//     .catch((error) => {
//         console.log('catch error dude', queryText, error);
//         res.sendStatus(500);
//     })
// })

module.exports = router;

