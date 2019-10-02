const controlEntrega = require('../models/control_entrega');

module.exports = function(app) {

    app.get('/consulta_previo/:codigo/:almacen', (req, res) => {
        let codigo = req.params.codigo;
        let almacen = req.params.almacen;
        let estatus = "";
        let fecha="";
        controlEntrega.getEstatus(codigo,almacen, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al consultar previo:' + err
                });
            } else {
                if (data.length == 0) {
                    res.json({
                        success: false,
                        message: 'no existe folio'
                    });

                } else {
                    estatus = data[0].ESTATUS;
                    fecha=data[0].fecha;
                    if (estatus == "S") {
                        res.json({
                            success: false,
                            message: 'factura surtida'
                        });
                    } else {
                        if (estatus == "A") {
                            controlEntrega.getPrevioCompra(codigo,fecha,almacen, (err, data) => {
                                if (err) {
                                    res.status(500).send({
                                        success: false,
                                        message: 'Error al consultar previo:' + err
                                    });
                                } else {
                                    
                                    res.json({
                                        success: true,
                                        previo: data
                                    });
                                }
                            });

                        }
                    }

                }

            }




        });


    });
}