const mongoose = require('mongoose');

const { Schema } = mongoose;

//Esquema que los datos van a tener en la base 
const apiSchema = new Schema({
    nombre: {type: String},
    numero: {type: Number}
});

module.exports = mongoose.model('apiPrueba',apiSchema);