let dbCOBOL = require('../dbMacro');
let consurModel = {};
consurModel.getPrevioCompra = (codigo, callback) => {
    //console.log(codigo);
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
        CREN_OPE,
        CREN_FOL,
        CREN_FCH,
        CREN_ART,
        CREN_CANT,
        CREN_SURT,
        CREN_STAT
        FROM PUBLIC.COMREN
        WHERE PUBLIC.COMREN.CREN_OPE=1 
        AND PUBLIC.COMREN.CREN_STAT='A'
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
module.exports = consurModel;