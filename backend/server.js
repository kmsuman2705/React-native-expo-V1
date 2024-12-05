const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const collegeRoutes = require('./routes/collegeRoutes'); // Import college routes
const companyRoutes = require('./routes/companyRoutes'); // Import company routes
const studentRoutes = require("./routes/studentRoutes");
dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;
app.use(
  cors({
    origin: ["http://localhost:8082", "http://localhost:8081"], // Allow both origins
    methods: "GET,POST,PUT,DELETE", // Allow specific HTTP methods
    allowedHeaders: "Content-Type, Authorization", // Allow specific headers
  })
);



// Middleware to parse JSON request bodies
app.use(express.json());

// Use the college routes
app.use('/api/college', collegeRoutes);

//Use the company routes
app.use('/api/company', companyRoutes);

// Routes
app.use('/api/students', studentRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => {
        console.log('MongoDB connection error: ', err);
    });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
