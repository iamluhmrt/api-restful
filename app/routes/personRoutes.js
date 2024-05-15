const router = require('express').Router();
const Person = require('../models/Person');

// Create - Create Person
router.post('/', async (req, res) => {
    // req.body
    const { name, salary, approved } = req.body;

    if (!name || !salary || approved == null) {
        res.status(422).json({ error: 'All the fields are required!!' });
        return;
    }

    const person = {
        name,
        salary,
        approved,
    };

    // create
    try {
        await Person.create(person);

        res.status(201).json({
            message: 'Person successfully entered into the system!',
        });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

// Read
router.get('/', async (req, res) => {
    try {
        const people = await Person.find();

        res.status(200).json(people);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

// Read by ID
router.get('/:id', async (req, res) => {
    // extract data from the request by url = req.params
    const id = req.params.id;

    try {
        const person = await Person.findOne({ _id: id });
        if (!person) {
            res.status(422).json({ message: 'User was not found' });
            return;
        }
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

// Update - Update Data (PUT ALL UPDATE, PATCH PARTIAL UPDATE)
router.patch('/:id', async (req, res) => {
    const id = req.params.id;

    const { name, salary, approved } = req.body;

    const person = {
        name,
        salary,
        approved,
    };

    try {
        const updatedPerson = await Person.updateOne({ _id: id }, person);

        console.log(updatedPerson);
        if (updatedPerson.matchedCount === 0) {
            res.status(422).json({ message: 'User was not found' });
            return;
        }

        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const person = await Person.findOne({ _id: id });
    if (!person) {
        res.status(422).json({ message: 'User was not found' });
        return;
    }

    try {
        await Person.deleteOne({ _id: id });
        res.status(200).json({ message: 'User removed successfully' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

module.exports = router;
