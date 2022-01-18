const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
    //res.send('You did a POST request');
    res.status(201).json({firstname: "John", lastname: "Doe"});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});