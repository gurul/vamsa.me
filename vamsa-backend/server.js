const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const familyMemberRoutes = require('./routes/familyMemberRoutes');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://JaysheelPandya:9l9IdspfWQ0aT6Z8@vamsacluster0.hjcbbkg.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Routes
app.use('/family-members', familyMemberRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Vamsa');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});