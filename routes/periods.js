const express = require('express');
const executeQuery = require('./utils');
const router = express.Router();


//Tous les courants de pensées
router.get('/periods', (req, res) => {
    let {period, limit, offset} = req.query;

    let sql = "SELECT * FROM periods";

    if(period) {
        sql += "\nWHERE periods.name ILIKE $1 || '%'";
        period = period.split(' ').join('_');
    }



    executeQuery(sql, period ? [period]:[], res, limit, offset);
});

module.exports = router;

