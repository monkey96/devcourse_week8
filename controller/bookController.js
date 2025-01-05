const conn = require('../mariadb');
const {StatusCodes} = require('http-status-codes');

const bookListing = (req, res) => {
    let {category_id} = req.query;
    
    if (category_id) {
        const sql = `SELECT * FROM books WHERE category_id = ?`;
        conn.query(sql, category_id, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
            }

            
            if (results.length) {
                return res.status(StatusCodes.OK).json(results);
            }
            else {
                return res.status(StatusCodes.NOT_FOUND).end();
            }
        });
    }
    else {
        const sql = `SELECT * FROM books`;
        conn.query(sql, (err, results) => {
            if (err) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
            }
            res.status(StatusCodes.OK).json(results);
        });
    }
    
};

const bookSelect = (req, res) => {
    let {id} = req.params;
    id = parseInt(id);

    const sql = `SELECT * FROM books WHERE id = ?`;
    conn.query(sql, id, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
        }

        const targetBook = results[0];
        if (targetBook) {
            return res.status(StatusCodes.OK).json(targetBook);
        }
        else {
            return res.status(StatusCodes.NOT_FOUND).end();
        }
    });
};


module.exports = {
    bookListing,
    bookSelect
};