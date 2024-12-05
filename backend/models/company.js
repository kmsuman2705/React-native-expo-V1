const mongoose = require('mongoose');

// Define the schema for the college
const companySchema = new mongoose.Schema({
    companyName: {
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
});

// Create the College model from the schema
const Company = mongoose.model('Company', companySchema);

// Export the model
module.exports = Company;
