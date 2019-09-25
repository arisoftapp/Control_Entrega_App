const controlEntrega = require('../models/control_entrega');

module.exports = function(app) {

    app.get('/consulta_previo/:codigo', (req, res) => {
        let codigo = req.params.codigo;
        controlEntrega.getPrevioCompra(codigo, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al consultar previo:' + err
                });
            } else {
                success = true,
                    res.json({ previo: data });
            }

        });
    });
}