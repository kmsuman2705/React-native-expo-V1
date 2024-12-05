const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const College = require('../models/college'); // Ensure this import path is correct

// Register College
const registerCollege = async (req, res) => {
    const { collegeName, email, contactNumber, password } = req.body;

    try {
        // Check if college already exists
        const existingCollege = await College.findOne({ email });
        if (existingCollege) {
            return res.status(400).json({ message: 'College already exists' });
        }

        // Hash password with argon2
        const hashedPassword = await argon2.hash(password);

        // Create new college
        const newCollege = new College({
            collegeName,
            email,
            contactNumber,
            password: hashedPassword,
        });

        // Save college to the database
        await newCollege.save();

        // Generate JWT token
        const token = jwt.sign({ collegeId: newCollege._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: 'College registered successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Login College
const loginCollege = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if college exists
        const college = await College.findOne({ email });
        if (!college) {
            return res.status(400).json({ message: 'College not found' });
        }

        // Verify password with argon2
        const isMatch = await argon2.verify(college.password, password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ collegeId: college._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get College Profile
const getCollegeProfile = async (req, res) => {
    const { collegeId } = req.params;

    try {
        const college = await College.findById(collegeId);
        if (!college) {
            return res.status(404).json({ message: 'College not found' });
        }

        res.status(200).json({ message: 'Profile fetched successfully', profile: college });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update College Profile
const updateCollegeProfile = async (req, res) => {
    const { collegeId } = req.params;
    const { street, landmark, state, city, pincode } = req.body;

    try {
        const college = await College.findById(collegeId);
        if (!college) {
            return res.status(404).json({ message: 'College not found' });
        }

        // Update location details
        college.location = {
            street: street || college.location.street,
            landmark: landmark || college.location.landmark,
            state: state || college.location.state,
            city: city || college.location.city,
            pincode: pincode || college.location.pincode,
        };

        // Calculate profile completion percentage
        const fields = [
            college.location.street,
            college.location.landmark,
            college.location.state,
            college.location.city,
            college.location.pincode,
        ];
        const completedFields = fields.filter((field) => field && field.trim() !== '').length;
        college.profileCompletion = (completedFields / fields.length) * 100;

        // Update lastUpdated timestamp
        college.lastUpdated = Date.now();

        await college.save();

        res.status(200).json({ message: 'Profile updated successfully', profile: college });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { 
    registerCollege, 
    loginCollege, 
    getCollegeProfile, 
    updateCollegeProfile 
};
