var dbAdmin = require('../dbAdmin');

let userModel = {};

userModel.getValidarUsuario = (usuario, callback) => {
    if (dbAdmin) {
        dbAdmin.query(`SELECT 
            b.nombre_empresa AS 'empresa',
            b.dominio AS 'dominio',
            a.username AS 'usuario', 
            a.password AS 'contra'
        FROM 
            usuarios AS a
            INNER JOIN
            empresas AS b ON a.id_empresa=b.id_empresa   
        WHERE username='` + usuario + `' `, (err, rows) => {
            if (err) {
                throw err;
            } else {
                callback(null, rows);
            }
        });
    }


};



module.exports = userModel;