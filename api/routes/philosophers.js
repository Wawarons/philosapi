const express = require('express');
const executeQuery = require('./utils');
const router = express.Router();

router.get('/', (req, res) => {
    let {name, limit, offset} = req.query;
    let sql = "SELECT\n philosopher.*," +
        "    stream_of_thought.name AS stream_of_thought_name,\n" +
        "    period.name AS period_name\n" +
        "FROM\n" +
        "    philosopher\n" +
        "JOIN\n" +
        "    stream_of_thought ON philosopher.stream_of_thought_id = stream_of_thought.id\n" +
        "JOIN\n" +
        "    period ON philosopher.period_id = period.id\n"

    if (name) {
        sql += "WHERE philosopher.name ILIKE $1 || '%'";
        name = name.split('_').join(' ');
    }

    executeQuery(sql, name ? [name] : [], res, limit, offset);
});

//Philosophe par ID de period
router.get('/periods/:id', (req, res) => {
    const {id} = req.params;
    const sql = "SELECT\n philosopher.*," +
        "    stream_of_thought.name AS stream_of_thought_name,\n" +
        "    period.name AS period_name\n" +
        "FROM\n" +
        "    philosopher\n" +
        "JOIN\n" +
        "    stream_of_thought ON philosopher.stream_of_thought_id = stream_of_thought.id\n" +
        "JOIN\n" +
        "    period ON philosopher.period_id = period.id\n" +
        "WHERE period.id = CAST($1 AS INTEGER)";


    executeQuery(sql, [id], res);
})

//Philosophe par période
router.get('/periods', (req, res) => {
    let {period, limit, offset} = req.query;
    const sql = "SELECT\n philosopher.*," +
        "    stream_of_thought.name AS stream_of_thought_name,\n" +
        "    period.name AS period_name\n" +
        "FROM\n" +
        "    philosopher\n" +
        "JOIN\n" +
        "    stream_of_thought ON philosopher.stream_of_thought_id = stream_of_thought.id\n" +
        "JOIN\n" +
        "    period ON philosopher.period_id = period.id\n" +
        "WHERE period.name ILIKE $1 || '%'"

    if (!period) {
        res.status(400).send({
            code: 400,
            title: 'Bad request',
            message: 'Parameter "period" missing or empty.'
        });
    }
    period = period.split('_').join(' ');


    executeQuery(sql, [period], res, limit, offset);
})


//Faire une recherche de philosophe par courant de pensée
router.get('/stream_of_thought', (req, res) => {

    let {sot} = req.query;

    const sql = "SELECT\n philosopher.*," +
        "    stream_of_thought.name AS stream_of_thought_name,\n" +
        "    period.name AS period_name\n" +
        "FROM\n" +
        "    philosopher\n" +
        "JOIN\n" +
        "    stream_of_thought ON philosopher.stream_of_thought_id = stream_of_thought.id\n" +
        "JOIN\n" +
        "    period ON philosopher.period_id = period.id\n" +
        "WHERE stream_of_thought.name ILIKE $1 || '%'"

    if (!sot) {
        res.status(400).send({
            code: 400,
            title: 'Bad request',
            message: 'Parameter "sot" missing or empty.'
        });
    }

    sot = sot.split('_').join(' ');

    executeQuery(sql, [sot], res);
})

//Philosophe par ID de courant de pensée
router.get('/stream_of_thought/:id', (req, res) => {

    const {id} = req.params;

    const sql = "SELECT\n philosopher.*," +
        "    stream_of_thought.name AS stream_of_thought_name,\n" +
        "    period.name AS period_name\n" +
        "FROM\n" +
        "    philosopher\n" +
        "JOIN\n" +
        "    stream_of_thought ON philosopher.stream_of_thought_id = stream_of_thought.id\n" +
        "JOIN\n" +
        "    period ON philosopher.period_id = period.id\n" +
        "WHERE stream_of_thought_id = CAST($1 AS INTEGER)";

    executeQuery(sql, [id], res);
})


router.get('/:id', (req, res) => {
    let {id} = req.params;
    let sql = "SELECT\n philosopher.*," +
        "    stream_of_thought.name AS stream_of_thought_name,\n" +
        "    period.name AS period_name\n" +
        "FROM\n" +
        "    philosopher\n" +
        "JOIN\n" +
        "    stream_of_thought ON philosopher.stream_of_thought_id = stream_of_thought.id\n" +
        "JOIN\n" +
        "    period ON philosopher.period_id = period.id\n" +
        "WHERE philosopher.id = CAST($1 AS INTEGER)";

    executeQuery(sql, [id], res);
});
module.exports = router;
