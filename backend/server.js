const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express()
app.use(cors())

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'ecommerce',
    user: 'root',
    password: 'password'
})

app.get('/products', (req, res) => {
    const sql = 'SELECT * FROM products';
    connection.query(sql, (err, data) => {
        if(err) throw err;
        return res.json(data)
    })
})

app.get('/', (req, res) => {
    return res.json('Loading Backend...')
})

app.listen(4000, () => {
    console.log('Listening on port 4000');
})