const modificar_previo = require('../models/modificar_previo');

module.exports = function(app) {

    app.put('/modificar_previo_comdoc/:folio/:almacen/:cantidad/:estatus', (req, res) => {
        let folio = req.params.folio;
        let cantidad = req.params.cantidad;
        let almacen = req.params.almacen;
        let estatus= req.params.estatus;
        modificar_previo.updatePrevioComdoc(folio,almacen,cantidad,estatus,(err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al modificar comdoc:' + err
                });

            } else {
                    res.json({
                        success: true,
                        message:"Se modifico",
                        respuesta: data,
                    });
                
            }

        });
    });

    app.put('/modificar_previo_comren/:folio/:cantidad/:articulo', (req, res) => {
        let folio = req.params.folio;
        let cantidad = req.params.cantidad;
        let articulo = req.params.articulo;
        modificar_previo.updatePrevioComren(folio,cantidad,articulo,(err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al modificar comren:' + err
                });

            } else {
                    res.json({
                        
                        success: true,
                        message:"Se modifico:",
                        respuesta: data,
                    });
                
            }

        });
    });



}