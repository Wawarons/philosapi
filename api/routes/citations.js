const express = require('express');
const executeQuery = require('./utils');
const db = require('../db');
const router = express.Router();

//Toutes les citations
router.get('/', (req, res) => {
    const { text, limit, offset} = req.query;
    let sql =
        "SELECT citation.*, philosopher.name AS philosopher " +
        "FROM citation JOIN philosopher " +
        "ON philosopher.id = citation.philosopher_id\n";

    if(text) {
        sql += "WHERE citation.text ILIKE $1 || '%'";
    }

    executeQuery(sql, text ? [text]:[], res, limit, offset);
});

router.get('/random', (req, res) => {
    const sql =
        "SELECT citation.*, philosopher.name AS philosopher " +
        "FROM citation JOIN philosopher " +
        "ON philosopher.id = citation.philosopher_id";

    db.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            res.status(503).json({error: 'Server error', details: err.message});
        } else {
            const randomId = Math.round(Math.random() * data.rows.length);

            if (randomId >= data.rows.length) {
                return res.status(404).json({error: 'No random citation found'});
            }

            res.status(200).send({
                count: 1,
                data: data.rows[randomId]
            })
        }
    })
})

//Citation par philosophe
router.get('/philosophers/:id', (req, res) => {
    let {id} = req.params;

    const sql =
        "SELECT\n citation.*," +
        "    philosopher.name AS philosopher_name\n" +
        "FROM\n" +
        "    citation\n" +
        "JOIN\n" +
        "    philosopher ON citation.philosopher_id = philosopher.id\n" +
        "WHERE philosopher.id = CAST($1 AS INTEGER)"

    executeQuery(sql, [id], res);
})


router.get('/philosophers', (req, res) => {
    let {name} = req.query;

    const sql =
        "SELECT\n citation.*," +
        "    philosopher.name AS philosopher_name\n" +
        "FROM\n" +
        "    citation\n" +
        "JOIN\n" +
        "    philosopher ON citation.philosopher_id = philosopher.id\n" +
        "WHERE philosopher.name ILIKE $1 || '%'"

    if (!name) {
        res.status(400).send({
            code: 400,
            title: 'Bad request',
            message: 'Parameter "name" missing or empty.'
        });
    }

    name = name.split('_').join(' ');
    executeQuery(sql, [name], res);
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    let sql =
        "SELECT citation.*, philosopher.name AS philosopher " +
        "FROM citation JOIN philosopher " +
        "ON philosopher.id = citation.philosopher_id\n" +
        "WHERE citation.id = CAST($1 AS INTEGER)";

    executeQuery(sql, [id], res);
});
module.exports = router;