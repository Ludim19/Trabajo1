var express = require('express');
var router = express.Router();
const carroscontrol= require("../controladores/carroscontrol");
var multer=require('multer');
var fecha=Date.now();
var rutaAlm=multer.diskStorage(
    {
    destino:function (request,file,callback) {
        callback(null,'./public/images');
    },
    filename:function (request,file,callback) {
        console.log(file);
        callback(null,fecha+"_"+file.originalname);
    }
    }
);
var cargar=multer({storage:rutaAlm});

/* GET home page. */
router.get('/',carroscontrol.index);
router.get('/agregar',carroscontrol.agregar);
router.post('/',cargar.single("imagen"),carroscontrol.save);
router.post('/eliminar/:id',carroscontrol.eliminar);
router.get('/modificar/:id',carroscontrol.editar);
router.post('/actualizacion',cargar.single("imagen"),carroscontrol.act);
module.exports = router;
