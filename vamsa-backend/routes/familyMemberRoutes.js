const express = require('express');
const router = express.Router();
const FamilyMember = require('../models/FamilyMember');

// Create a new family member
router.post('/add', async (req, res) => {
    try {
        const newFamilyMember = new FamilyMember(req.body);
        const savedMember = await newFamilyMember.save();
        res.status(201).json(savedMember);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a family member
router.put('/update/:id', async (req, res) => {
    try {
        const updatedMember = await FamilyMember.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedMember);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all family members
router.get('/', async (req, res) => {
    try {
        const members = await FamilyMember.find();
        res.status(200).json(members);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;