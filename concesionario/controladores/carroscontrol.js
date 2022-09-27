var conect=require('../configuracion/conexion')
var carro=require("../modelo/carro")
var borrar=require("fs")
module.exports={
    index:function(req,res) {
        carro.obtener(conect,function (err,datos) {
            console.log(datos);
            res.render('carros/index', { title: 'Express',carros:datos });
        });
    
        
    },
    agregar:function (req,res) {
        res.render('carros/agregar');
    },
    save:function (req,res) {
        console.log(req.body);
        console.log(req.file.filename);
        carro.insertar(conect,req.body,req.file,function (err) {
             res.redirect('/carros');
        });
    },
    eliminar:function (req,res) {
        console.log("Recibir datos");
        console.log(req.params.id);
        carro.returnid(conect,req.params.id,function (err,registros) {
            var imagen="public/images/"+(registros[0].imagen);
            
            if (borrar.existsSync(imagen)) {
                borrar.unlinkSync(imagen);
            }
            carro.borrar(conect,req.params.id,function (err) {
                res.redirect('/carros');
            });
            
        })
    },
    editar:function (req,res) {
        carro.returnid(conect,req.params.id,function (err,registros) {
            console.log(registros[0]);
            res.render('carros/editar',{carro:registros[0]});
        });
        
    },
    act:function (req,res) {
        console.log(req.body.marca)
        console.log(req.body.modelo)
        console.log(req.body.color)
        if (req.body.marca) {
            carro.act(conect,req.body,function (err) {});
        }
        if (req.file) {
            if (req.filename) {
                carro.returnid(conect,req.params.id,function (err,registros) {
                    var imagen="public/images/"+(registros[0].imagen);
                    
                    if (borrar.existsSync(imagen)) {
                        borrar.unlinkSync(imagen);
                    }
                    carro.actimagen(conect,req.body,req.file,function (err) {
                        
                    });
                    
                });
            }
        }
        
        res.redirect('/carros');
        console.log(req.file.filename)
    }

}