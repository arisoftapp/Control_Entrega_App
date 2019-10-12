let dbCOBOL = require('../dbMacro');
let folioModel = {};

folioModel.getFolio = (folio,almacen,callback) => {
    dbCOBOL.open;
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
        CDOC_FOL AS 'folio'
        FROM
        PUBLIC.COMDOC
        WHERE
        PUBLIC.COMDOC.CDOC_OPE=2
        AND PUBLIC.COMDOC.CDOC_FOL='`+folio+`' 
        AND PUBLIC.COMDOC.CDOC_ALM='`+almacen+`'

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



module.exports = folioModel;