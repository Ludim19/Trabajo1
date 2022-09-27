module.exports={
    obtener:function (conexion,funcion) {
        conexion.query("SELECT * FROM carros",funcion);
    },
    insertar:function (conexion,datos,archivo,funcion) {
        conexion.query("INSERT INTO carros ( marca, modelo, color, imagen) VALUES (?,?,?,?)",[datos.marca,datos.modelo,datos.color,archivo.filename],funcion);
    },
    returnid:function (conexion,id,funcion) {
        conexion.query("SELECT * FROM carros WHERE id=?",[id],funcion);
    },
    borrar:function (conexion,id,funcion) {
        conexion.query("DELETE FROM carros WHERE id=?",[id],funcion);
    },
    act:function (conexion,datos,funcion) {
        conexion.query("UPDATE carros SET marca=?, modelo=?, color=? WHERE id=?",[datos.marca,datos.modelo,datos.color,datos.id],funcion);
    },
    actimagen:function (conexion,datos,archivo,funcion) {
        conexion.query("UPDATE carros SET imagen=? WHERE id=?",[archivo.filename,datos.id],funcion);
    }
}