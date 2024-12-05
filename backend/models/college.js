const mongoose = require('mongoose');

// Define the schema for the college
const collegeSchema = new mongoose.Schema({
    collegeName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    location: {
        street: { type: String, default: '' },
        landmark: { type: String, default: '' },
        state: { type: String, default: '' },
        city: { type: String, default: '' },
        pincode: { type: String, default: '' },
    },
    profileCompletion: {
        type: Number,
        default: 0, // Start with 0% completed
    },
    lastUpdated: {
        type: Date,
        default: Date.now, // Automatically set the last updated time
    },
});

// Create the College model from the schema
const College = mongoose.model('College', collegeSchema);

// Export the model
module.exports = College;
