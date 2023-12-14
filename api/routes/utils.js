const db = require("../db");

function executeQuery (sql, params, res, limit = null, offset = null) {

    if (limit && isNaN(limit)) {
        return res.status(400).json({error: 'Invalid limit parameter'});
    } else if (!isNaN(limit)) {
        sql += ` LIMIT $${params.length + 1}`;
        params.push(limit);
    }

    if (offset && isNaN(offset)) {
        return res.status(400).json({error: 'Invalid offset parameter'});
    } else if (!isNaN(offset)) {
        sql += ` OFFSET $${params.length + 1}`;
        params.push(offset);
    }

    db.query(sql, params, (err, data) => {
        if (err) {
            console.error(err);
            res.status(503).json({error: 'Server error', details: err.message});
        } else {
            res.status(200).json({
                count: data.rows.length,
                data: data.rows
            });
        }
    });
}

module.exports = executeQuery