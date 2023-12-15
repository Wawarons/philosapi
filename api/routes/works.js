const express = require('express');
const executeQuery = require('./utils');
const router = express.Router();

router.get('/', (req, res) => {
    let {title, limit, offset} = req.query;
    let sql =
        "SELECT work.*, philosopher.name AS philosopher " +
        "FROM work JOIN philosopher " +
        "ON philosopher.id = work.philosopher_id\n";

    if (title) {
        sql += "WHERE work.title ILIKE $1 || '%'";
        title = title.split('_').join(' ');
    }

    executeQuery(sql, title ? [title] : [], res, limit, offset);
});

router.get('/philosophers', (req, res) => {

    let {name} = req.query;

    let sql =
        "SELECT\n work.*," +
        "    philosopher.name AS philosopher_name\n" +
        "FROM\n" +
        "    work\n" +
        "JOIN\n" +
        "    philosopher ON work.philosopher_id = philosopher.id\n"

    if (!name) {
        res.status(400).send({
            code: 400,
            title: 'Bad request',
            message: 'Parameter "name" missing or empty.'
        });
    }

    sql += "WHERE philosopher.name ILIKE $1 || '%'";
    name = name.split(' ').join('_');
    executeQuery(sql, [name], res);
})

router.get('/philosophers/:id', (req, res) => {
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

router.get('/:id', (req, res) => {
    const {id} = req.params;
    let sql =
        "SELECT work.*, philosopher.name AS philosopher " +
        "FROM work JOIN philosopher " +
        "ON philosopher.id = work.philosopher_id\n" +
        "WHERE work.id = CAST($1 AS INTEGER)";

    executeQuery(sql, [id], res,);
});


module.exports = router;