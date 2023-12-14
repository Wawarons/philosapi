const express = require('express');
const executeQuery = require('./utils');
const router = express.Router();


//Tous les courants de pensées
router.get('/', (req, res) => {
    let {sot, limit, offset} = req.query;

    let sql = "SELECT * FROM stream_of_thought";

    if(sot) {
        sql += "\nWHERE stream_of_thought.name ILIKE $1 || '%'";
        sot = sot.split(' ').join('_');
    }

    executeQuery(sql, sot ? [sot]:[], res, limit, offset);
});

module.exports = router;

