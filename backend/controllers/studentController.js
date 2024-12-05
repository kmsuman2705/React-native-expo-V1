const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Student = require("../models/student");
const path = require("path");
const fs = require("fs");

// Register Function
exports.register = async (req, res) => {
  const { fullName, email, contactNumber, password, resume } = req.body;

  // Check if the student already exists
  const existingStudent = await Student.findOne({ email });
  if (existingStudent) {
    return res.status(400).json({ message: "Student already exists" });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newStudent = new Student({
    fullName,
    email,
    contactNumber,
    password: hashedPassword,
    resume, // Assume resume is the path to the uploaded file
  });

  try {
    const savedStudent = await newStudent.save();
    res
      .status(201)
      .json({
        message: "Student registered successfully",
        student: savedStudent,
      });
  } catch (error) {
    res.status(500).json({ message: "Error registering student", error });
  }
};

// Login Function
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const student = await Student.findOne({ email });
  if (!student) {
    return res.status(400).json({ message: "Student not found" });
  }

  const validPassword = await bcrypt.compare(password, student.password);
  if (!validPassword) {
    return res.status(400).json({ message: "Invalid password" });
  }

  // Create JWT token
  const token = jwt.sign({ id: student._id }, "your-secret-key", {
    expiresIn: "1h",
  });

  res.json({ message: "Login successful", token });
};
