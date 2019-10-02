let dbCOBOL = require('../dbMacro');
let consurModel = {};
consurModel.getPrevioCompra = (codigo,fecha,almacen, callback) => {
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
        CREN_ART as 'articulo',
        CREN_CANT as 'cantidad',
        CREN_SURT as 'surtido',
        CREN_POS as 'posicion',
        ART_DESC1 as 'descripcion',
        ART_COD2 as 'codigo2',
        CDOC_ALM as 'almacen'
        FROM PUBLIC.COMREN, PUBLIC.INVART,PUBLIC.COMDOC
        WHERE PUBLIC.COMREN.CREN_OPE=1
        AND PUBLIC.COMREN.CREN_FOL='` + codigo + `'
        AND PUBLIC.COMREN.CREN_FCH='` + fecha + `'
        AND PUBLIC.COMDOC.CDOC_ALM='` + almacen + `'
        AND PUBLIC.INVART.ART_COD1=PUBLIC.COMREN.CREN_ART
        AND PUBLIC.COMDOC.CDOC_FOL=PUBLIC.COMREN.CREN_FOL
    
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
consurModel.getEstatus = (codigo,almacen, callback) => {
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
        CDOC_STAT as ESTATUS,
        CDOC_FCH as 'fecha'
        FROM PUBLIC.COMDOC
        WHERE PUBLIC.COMDOC.CDOC_OPE=1
        AND PUBLIC.COMDOC.CDOC_FOL='` + codigo + `'
        AND PUBLIC.COMDOC.CDOC_ALM='` + almacen + `'
    
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