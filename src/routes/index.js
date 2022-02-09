const { Router } = require('express');

const router = Router();
const Country = require('../models/country');

router.get('/', async (req, res)=>{
    const countries = await Country.find();
    res.send(countries);
});

router.post('/add-country', async (req, res)=>{
    const countries = await Country.find();
    const id = countries.length + 1;
    const newCountry = new Country({
        id: id,
        name: req.body.name,
        capital: req.body.capital,
        surface: req.body.surface,
        currency: req.body.currency,
        religion: req.body.religion,
    });

    await newCountry.save();
    res.redirect('/');
    
});

router.get('/get-country/:id', async (req, res)=>{
    const { id } = req.params;
    const getCountry = await Country.find({'_id':id});
    res.send(getCountry);
});

router.get('/filter-by/:field', async (req, res)=>{
    const { field } = req.params;
    const getCountries = await Country.find({field : field});
    res.send(getCountries);
});

router.get('/top-countries/:number', async (req, res)=>{
    const { number } = req.params;
    const countries = await Country.find().limit(parseInt(number,10));
    res.send(countries);
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

router.post('/delete-country/:id', async (req, res)=>{
    const { id } = req.params;
    await Country.findByIdAndDelete({'_id':id});
    res.redirect('/');
});

router.get('/all-delete', async (req, res)=>{
    await Country.remove({});
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

module.exports = router;