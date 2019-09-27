const controlEntrega = require('../models/control_entrega');

module.exports = function(app) {

    app.get('/control_almacenes', (req, res) => {
        controlEntrega.getAlmacenes((err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al consultar almacenes:' + err
                });

            } else {
                if (data.length < 1) {
                    res.json({
                        success: false,
                        mensaje: "No encontro almacenes"
                    });
                } else {
                    res.json({
                        success: true,
                        usuario: data,
                    });
                }
            }

        });


    });
}