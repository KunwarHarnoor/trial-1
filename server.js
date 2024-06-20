const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactFormDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a schema and model for the form data
const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    comment: String
});

const Form = mongoose.model('Form', formSchema);

// Define the route to serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Define the route to serve the places.html file
app.get('/places.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'places.html'));
});




// Define the POST route to handle form submissions
app.post('/submit', async (req, res) => {
    const { name, email, phone, comment } = req.body;
    const newForm = new Form({
        name,
        email,
        phone,
        comment
    });
    try {
        await newForm.save();
        // Send a JSON response indicating success
        res.status(201).json({ message: 'Submitted Successfully.<br>Thank you!<br>Our Team will contact you shortly for Bookings/inquiries.' });
    } catch (err) {
        console.error('Error saving form data:', err);
        // Send a JSON response indicating failure
        res.status(400).json({ message: 'Error saving form data. Please try again later.' });
    }
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
