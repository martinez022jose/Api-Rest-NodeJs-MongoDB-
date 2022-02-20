const { Router } = require('express');

const router = Router();
const Country = require('../models/country');
const Orden = require('../models/orden');

router.get('/', async (req, res)=>{
    const ordenes = await Orden.find();
    res.send(ordenes);
});

router.post('/add-orden', async (req, res)=>{
    const ordenes = await Orden.find();
    const id = ordenes.length + 1;
    const newOrden = new Orden({
        id: id,
        description: req.body.description,
        customer: req.body.customer,
        amount: req.body.amount,
        items: req.body.items,
        cantTotal: req.body.cantTotal,
    });

    await newOrden.save();
    res.redirect('/');
    
});

router.get('/get-orden/:id', async (req, res)=>{
    const { id } = req.params;
    const getOrden = await Orden.find({'id':id});
    res.send(getOrden);
});

router.get('/filter-by/:field/:value', async (req, res)=>{
    const { field, value } = req.params;
    const getOrdenes = await Orden.find({$where: field + '==' + 2} );
    console.log(`${field}`+value);
    console.log(getOrdenes);
    res.send(getOrdenes);
});

router.get('/top-ordenes/:number', async (req, res)=>{
    const { number } = req.params;
    const ordenes = await Orden.find().limit(parseInt(number,10));
    res.send(ordenes);
});

router.put('/update-country/:id', async (req, res)=>{
    const { name, capital, surface, currency, religion } = req.body;
    const { id } = req.params;
    await Country.findByIdAndUpdate({'_id':id},{name, capital, surface, currency, religion});
    res.redirect('/');
});

router.put('/increase-surface/:id', async (req, res)=>{
    const { id } = req.params;
    await Country.find({'_id':id}).update({'$inc':{'surface':200}});
    res.redirect('/');
});

router.post('/delete-orden/:id', async (req, res)=>{
    const { id } = req.params;
    await Orden.remove({'id':id});
    res.redirect('/');
});

router.get('/all-delete', async (req, res)=>{
    await Orden.remove({});
    res.redirect('/');
});

router.get('/sort-by-default', async (req, res)=>{
    const orderedCountries = await Country.find().sort({'name': 1});
    res.send(orderedCountries);
});

router.get('/sort-by/:field', async (req, res)=>{
    const { field } = req.params;
    const orderedCountries = await Country.find().sort({field: 1});
    res.send(orderedCountries);
});

router.get('/count-ordenes', async (req, res) => {
    const ordenes = await Orden.find();
    const total = ordenes.length;
    res.send({"total ordenes": total});
});

router.get('/items', async (req, res) => {
    const items = await Orden.distinct('items');
    res.send(items);
});

module.exports = router;