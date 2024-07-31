const express = require('express');
const sql = require('mssql');
const dbConfig = require('./config/dbConfig');

const app = express();
const port = process.env.PORT || 3000;

// Connect to the database
sql.connect(dbConfig)
  .then(pool => {
    if (pool.connected) {
      console.log('Connected to Azure SQL Database');
    }

    app.get('/api/data', async (req, res) => {
      try {
        const result = await pool.request().query('SELECT * FROM mytable');
        res.json(result.recordset);
      } catch (err) {
        console.error(err);
        res.status(500).send('Error querying the database');
      }
    });

    // Other routes...

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Database connection failed: ', err);
  });