const express = require('express'); //Cargo Express
const path = require('path');       // Cargo path
const morgan = require('morgan');   //Cargo morgan (sirve para ver las peticiones del servidor)

//Inicio express
const app = express();
//requiero la conexion 
require('./database/database');

app.set('port', process.env.PORT || 3000);
app.set('dir', __dirname);

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

app.use(require('../routes/route'));

app.listen(app.get('port'),()=>{
    console.log("Server on ",app.get('port'));
    
});