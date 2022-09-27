var mysql=require("mysql");
var conect=mysql.createConnection({
    host:'localhost',
    user:'pma',
    password:'santiago1902',
    database:'concesionario'
}
);
conect.connect(
    (err)=>{
        if(!err){
            console.log('Conexión Exitosa');
        }else{
            console.log('Conexión Fallida');
        }
    }
);
module.exports=conect;