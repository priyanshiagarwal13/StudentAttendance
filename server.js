const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/student_attendance', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB");
});

// Models
const Admin = require('./models/Admin');
const Student = require('./models/Student');

app.use(bodyParser.json());

// Routes
// Admin routes (register, login, etc.)
// Student routes (login, attendance, password reset, etc.)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
