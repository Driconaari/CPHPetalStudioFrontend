
/*

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:5500' // Replace with your frontend's origin if needed
}));

// Serve static files from the 'assets' directory
app.use('/assets', express.static('assets'));

// Middleware to parse JSON request bodies
app.use(express.json());

// User data (in-memory for demo purposes)
const users = [
    { username: 'user', password: 'password', role: 'user', token: 'user-token' },
    { username: 'admin', password: 'password', role: 'admin', token: 'admin-token' }
];

// Login route
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ token: user.token, role: user.role });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Route to get user profile
app.get('/api/user/profile', (req, res) => {
    // Get the token from request headers (Authorization header is assumed)
    const token = req.headers['authorization'];

    // Find the user by token
    const user = users.find(u => u.token === token);

    if (user) {
        // Return profile data (username and role)
        res.json({
            username: user.username,
            role: user.role
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


 */