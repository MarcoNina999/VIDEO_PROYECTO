const coneccion = require('../basedatos');
module.exports ={
    agregar:(datos, callBack) =>{
        coneccion.query(
            'insert into postulante (nombre, ci, carrera, telf, materia, foto) values (?, ?, ?, ?, ?, ?)',
            [datos.nombre, datos.ci, datos.carrera, datos.telf, datos.materia, datos.foto],
            (error, results)=>{
                if (error) callBack(error);
                return callBack(null, results);
            }
        )
    }
}