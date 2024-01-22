const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'ecommerce',
    user: 'root',
    password: 'password',
});

app.post('/submitForm', (req, res) => {
    const { fName, lName, userEmail, comments } = req.body;

    const sql = 'INSERT INTO contact (first_name, last_name, email, comment) VALUES (?, ?, ?, ?)';
    connection.query(sql, [fName, lName, userEmail, comments], (error, results) => {
        if (error) {
            console.error('Error inserting data into contact table:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log('Data inserted into contact table');
            res.status(200).json({ message: 'Form submitted successfully' });
        }
    });
});

app.post('/subscribe', (req, res) => {
    const { userEmail } = req.body;

    const sql = 'INSERT INTO subscription (user_email) VALUES (?)';
    connection.query(sql, [userEmail], (error, results) => {
        if (error) {
            console.error('Error inserting data into subscription table:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log('Data inserted into subscription table');
            res.status(200).json({ message: 'Subscription submitted successfully' });
        }
    });
});

app.get('/products', (req, res) => {
    const sql = 'SELECT * FROM products';
    connection.query(sql, (err, data) => {
        if (err) throw err;
        return res.json(data);
    });
});

app.get('/', (req, res) => {
    return res.json('Loading Backend...');
});

app.listen(4000, () => {
    console.log('Listening on port 4000');
});
