const express = require('express');
const router = express.Router();
const { registerCollege, loginCollege, getCollegeProfile, updateCollegeProfile } = require('../controllers/collegeController');
const authMiddleware = require('../middleware/auth'); // Middleware for token validation

router.post('/register', registerCollege);
router.post('/login', loginCollege);
router.get('/profile/:collegeId', authMiddleware, getCollegeProfile);
router.put('/profile/:collegeId', authMiddleware, updateCollegeProfile);

module.exports = router;