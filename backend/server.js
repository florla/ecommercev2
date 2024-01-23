const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

// Parse JSON data in request body
app.use(bodyParser.json());
app.use(express.json());

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'ecommerce',
    user: 'root',
    password: 'password',
});

// Endpoint for handling form submissions
app.post('/submitForm', (req, res) => {
    // Extract data from the request body
    const { fName, lName, userEmail, comments } = req.body;

    // SQL query to insert form data into the 'contact' table
    const sql = 'INSERT INTO contact (first_name, last_name, email, comment) VALUES (?, ?, ?, ?)';
    
    // Execute the SQL query with provided data
    connection.query(sql, [fName, lName, userEmail, comments], (error, results) => {
        if (error) {
            // Handle database error
            console.error('Error inserting data into contact table:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // Successful insertion
            console.log('Data inserted into contact table');
            res.status(200).json({ message: 'Form submitted successfully' });
        }
    });
});

// Endpoint for handling email subscription
app.post('/subscribe', (req, res) => {
    // Extract email from the request body
    const { userEmail } = req.body;

    // SQL query to insert email into the 'subscription' table
    const sql = 'INSERT INTO subscription (user_email) VALUES (?)';

    // Execute the SQL query with provided email
    connection.query(sql, [userEmail], (error, results) => {
        if (error) {
            // Handle database error
            console.error('Error inserting data into subscription table:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // Successful insertion
            console.log('Data inserted into subscription table');
            res.status(200).json({ message: 'Subscription submitted successfully' });
        }
    });
});

// Endpoint for retrieving product data
app.get('/products', (req, res) => {
    // SQL query to select all products from the 'products' table
    const sql = 'SELECT * FROM products';
    
    // Execute the SQL query
    connection.query(sql, (err, data) => {
        if (err) throw err;
        // Send product data as a JSON response
        return res.json(data);
    });
});

// Default endpoint for testing server availability
app.get('/', (req, res) => {
    return res.json('Loading Backend...');
});

// Start the server and listen on port 4000
app.listen(4000, () => {
    console.log('Listening on port 4000');
});
