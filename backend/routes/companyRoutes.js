const express = require('express');
const { registerCompany, loginCompany } = require('../controllers/companyController'); // Import the controller functions

const router = express.Router();

// Register Route
router.post('/register', registerCompany);

// Login Route
router.post('/login', loginCompany);

module.exports = router;
