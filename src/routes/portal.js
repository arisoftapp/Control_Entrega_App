const folio = require('../models/portal');

module.exports = function(app) {

    app.post('/insert', (req, res) => {
        const folioData = {
            folio_previo: req.body.folio_previo,
            fecha_previo: req.body.fecha_previo,
            folio_oc: req.body.folio_oc,
            fecha_oc: req.body.fecha_oc,
            id_provedor: req.body.id_provedor,
            id_almacen: req.body.id_almacen,
            id_detalles: req.body.folio_oc,
            id_empresa: req.body.id_empresa,
            usuario: req.body.usuario,
            comentario_in: req.body.comentario_in,
            estatus: 1
        };
        
        const almacenData = {
            id_almacen: req.body.id_almacen,
            nombre: req.body.almacen
        };
    
        const empresaData = {
            id_empresa: req.body.id_empresa,
            nombre: req.body.empresa
        };
    
        const provData = {
            id_pro: req.body.id_provedor,
            nombre: req.body.proveedor
        };
    
        folio.insertFolio(folioData, (err, data) => {
            if (err){
                res.json({
                    success: false,
                    message: err
                });
            }else{
                folio.insertEmpresa(empresaData, (err, data) => {
                });
                folio.insertAlmacen(almacenData, (err, data) => {
                });
                folio.insertProveedor(provData, (err, data) => {
                });
                res.json({
                    success: true,
                    message: "¡Registro exitoso!"
                });
            }
        });
    });
    
    
    app.post('/insertDetalles', (req, res) => {
        const reqdata = req.body;
        folio.insertDetalles(reqdata, (err, data) => {
            if (err){
                res.json({
                    success: false,
                    message: err
                });
            }else{
                res.json({
                    success: true,
                    message: "¡Registro exitoso!"
                });
            }
        });
    });


}