const mysql = require("mysql")

const conection = mysql.createConnection({
    host:'localhost',
    user:'nicolas',
    password:'nicolas',
    database:'logistica'
})

conection.connect( (err)=> {
    if(err) throw err
    console.log('la conexion funciona')
})
//conection.query('SELECT * from ')
conection.end()