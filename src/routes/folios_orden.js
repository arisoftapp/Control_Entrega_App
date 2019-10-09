const folios = require('../models/folios_orden');

module.exports = function(app) {

    app.get('/folios/:folio/:almacen', (req, res) => {
        folios.getFolios((err, data) => {
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
                        almacenes: data,
                    });
                }
            }

        });
    });



}