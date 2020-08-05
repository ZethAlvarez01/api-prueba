const { Router } = require('express');
const Api_data = require('../src/models/data');
const router = Router();

//Busca todos los datos
router.get('/', async (req, res) =>{
    let data = await Api_data.find();
    res.json(data);
});

//Busca por id
router.get('/:id', async (req, res) =>{
    let data = await Api_data.findById(req.params.id);
    res.json(data);
});

//Anade datos nuevos
router.post('/', async (req, res) =>{
    let new_data = new Api_data(req.body);
    await new_data.save();
    res.json({
        status: 'Save'
    });
});

//Actualiza datos
router.put('/:id', async (req, res) =>{
    await Api_data.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Updated'
    });
});

//Remueve datos
router.delete('/:id',async (req, res)=>{
    await Api_data.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Removed'
    });
});

module.exports = router;