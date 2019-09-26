let dbCOBOL = require('../dbMacro');
let consurModel = {};
consurModel.getPrevioCompra = (codigo, callback) => {
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
        CREN_ART as articulo,
        CREN_CANT as cantidad,
        CREN_SURT as surtido
        FROM PUBLIC.COMREN
        WHERE PUBLIC.COMREN.CREN_OPE=1
        AND PUBLIC.COMREN.CREN_FOL='` + codigo + `'
    
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
consurModel.getEstatus = (codigo, callback) => {
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
        CDOC_STAT as ESTATUS
        FROM PUBLIC.COMDOC
        WHERE PUBLIC.COMDOC.CDOC_OPE=1
        AND PUBLIC.COMDOC.CDOC_FOL='` + codigo + `'
    
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