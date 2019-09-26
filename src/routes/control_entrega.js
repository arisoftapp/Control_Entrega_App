const controlEntrega = require('../models/control_entrega');

module.exports = function(app) {

    app.get('/consulta_previo/:codigo', (req, res) => {
        let codigo = req.params.codigo;
        let estatus = "";
        controlEntrega.getEstatus(codigo, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al consultar previo:' + err
                });
            } else {
                if (data.length == 0) {
                    res.json({
                        success: true,
                        message: 'no existe folio'
                    });

                } else {
                    estatus = data[0].ESTATUS;
                    if (estatus == "S") {
                        res.json({
                            success: true,
                            message: 'surtidas'
                        });
                    } else {
                        if (estatus == "A") {
                            controlEntrega.getPrevioCompra(codigo, (err, data) => {
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