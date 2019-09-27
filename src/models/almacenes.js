let dbCOBOL = require('../dbMacro');
let consurModel = {};
consurModel.getAlmacenes = (callback) => {
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
        ALM_LLAVE AS 'idalmacen',
        ALM_NOMBRE AS 'almacen'
        FROM
        PUBLIC.INVALM
    `, function(err, rows) {
            if (err) {
                //throw err;
                callback(err, null);
            } else {
                callback(null, rows);
            }
        });
    }
};

module.exports = consurModel;