const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mock Data (In-memory database)
let users = [];
let transactions = [];

// Serve static files (like the HTML and CSS files)
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// Landing Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Login Route
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Sign Up Route
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// Signup Form Submission
app.post('/signup', (req, res) => {
    const { username, password, email } = req.body;
    users.push({ username, password, email, balance: 1000 }); // Default balance
    res.redirect('/login');
});

// Login Form Submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        res.redirect(`/dashboard/${username}`);
    } else {
        res.send('Invalid login credentials');
    }
});

// Dashboard Route (Transaction Page)
app.get('/dashboard/:username', (req, res) => {
    const user = users.find(u => u.username === req.params.username);
    if (user) {
        res.sendFile(path.join(__dirname, 'public', 'transaction.html'));
    } else {
        res.send('User not found');
    }
});

// Transaction Form Submission
app.post('/transaction', (req, res) => {
    const { amount, recipient } = req.body;
    const sender = users.find(user => user.username === req.body.username);
    const receiver = users.find(user => user.username === recipient);

    if (sender && receiver && sender.balance >= amount) {
        sender.balance -= amount;
        receiver.balance += amount;
        transactions.push({ sender: sender.username, recipient: receiver.username, amount });
        res.send('Transaction Successful');
    } else {
        res.send('Transaction Failed: Insufficient funds or user not found');
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
