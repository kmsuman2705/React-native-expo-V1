const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const Company = require('../models/company'); // Ensure this import path is correct

// Register Company
const registerCompany = async (req, res) => {
    const { companyName, email, contactNumber, password } = req.body;

    try {
        // Check if company already exists
        const existingCompany = await Company.findOne({ email }); // Should work if 'Company' is imported correctly
        if (existingCompany) {
            return res.status(400).json({ message: 'Company already exists' });
        }

        // Hash password with argon2
        const hashedPassword = await argon2.hash(password);

        // Create new company
        const newCompany = new Company({
            companyName,
            email,
            contactNumber,
            password: hashedPassword,
        });

        // Save company to the database
        await newCompany.save();

        // Generate JWT token
        const token = jwt.sign({ companyId: newCompany._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: 'Company registered successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Login Company
const loginCompany = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if company exists
        const company = await Company.findOne({ email });
        if (!company) {
            return res.status(400).json({ message: 'Company not found' });
        }

        // Verify password with argon2
        const isMatch = await argon2.verify(company.password, password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ companyId: company._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { registerCompany, loginCompany };
