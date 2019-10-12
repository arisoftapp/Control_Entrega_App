let dbAdmin = require('../dbportal');
let portalModel = {};
portalModel.insertFolio = (foliosData, callback) => {
    if (dbAdmin){
        dbAdmin.query(`INSERT INTO folios SET ? `, foliosData, (error, rows) => {
            if (error) {
                console.log(error);
            } else {                  
                callback(null, rows);
            }
        });
    }
}
portalModel.insertEmpresa = (reqData, callback) => {
    if (dbAdmin){
        dbAdmin.query(`INSERT INTO empresa SET ? `, reqData, (error, rows) => {
            if (error) {
                console.log(error);
            } else {                  
                callback(null, rows);
            }
        });
    }
}
portalModel.insertAlmacen = (reqData, callback) => {
    if (dbAdmin){
        dbAdmin.query(`INSERT INTO almacen SET ? `, reqData, (error, rows) => {
            if (error) {
                console.log(error);
            } else {                  
                callback(null, rows);
            }
        });
    }
}
portalModel.insertProveedor = (reqData, callback) => {
    if (dbAdmin){
        dbAdmin.query(`INSERT INTO proveedor SET ? `, reqData, (error, rows) => {
            if (error) {
                console.log(error);
            } else {                  
                callback(null, rows);
            }
        });
    }
}
portalModel.insertDetalles = (reqData, callback) => {
    if (dbAdmin){
        let row;
        for(let item of reqData) {
            item.pendiente = parseInt(item.cantidad, 10) - parseInt(item.recibido, 10),
            dbAdmin.query(`INSERT INTO detalles_folio SET ? `, item, (error, rows) => {
                if (error) {
                    console.log(error);
                } else {                  
                    row= rows;
                }
            });
        }
        callback(null, row);  
    }
}


module.exports = portalModel;