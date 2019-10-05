const crear_orden = require('../models/crear_orden');
var dateFormat = require('dateformat');
module.exports = function(app) {

    app.get('/consultar_datos_comren/:folio_previo/:posicion/:cantidad/:articulo/:folio_orden', (req, res) => {
        let folio_previo = req.params.folio_previo;
        let folio_orden = req.params.folio_orden;
        let posicion = req.params.posicion;
        let cantidad = req.params.cantidad;
        let articulo = req.params.articulo;
        let factor;
        let clasificacion;
        let proveedor;
        let costo;
        let tipocambio;
        let imp1;
        let imp2;
        let imp1_tab;
        let imp2_tab;
        let fecha=dateFormat(new Date(), "yyyy-mm-dd");
        let fechasf=dateFormat(new Date(), "yyyymmdd");
        crear_orden.getDatos_comren(folio_previo,posicion,(err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al consultar datos del documento:' + err
                });

            } else {
                if (data.length < 1) 
                {
                    res.json({
                        success: false,
                        mensaje: "No encontro datos del documento"
                    });
                }
                else
                {
                    factor=data[0].factor;
                    clasificacion=data[0].clasificacion;
                    proveedor=data[0].proveedor;
                    costo=data[0].costo;
                    tipocambio=data[0].tipocambio;
                    imp1=data[0].imp1;
                    imp2=data[0].imp2;
                    imp1_tab=data[0].imp1_tab;
                    imp2_tab=data[0].imp2_tab;
                    
                    crear_orden.insert_comren(folio_orden,posicion,fecha,factor,cantidad,articulo,clasificacion,proveedor,costo,tipocambio,imp1,imp2,fechasf,imp1_tab,imp2_tab,(err, data) => {
                        if (err) {
                            res.status(500).send({
                                success: false,
                                message: 'Error al crear comdoc:' + err
                            });
            
                        } else {
                                res.json({
                                    success: true,
                                    message:"Se creo",
                                    respuesta: data,
                                });
                            
                        }
            
                    });

                    /*
                    res.json({
                        success: true,
                        message:"consulta con exito ",
                        respuesta: data,
                    });
                    */


                }

                
            }

        });
    });

}