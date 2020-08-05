const mongoose = require('mongoose');

//Se conecta a la base de datos
mongoose.connect('mongodb://localhost/api-prueba',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB conectada'))
    .catch( err => console.log('Error al conectar'));