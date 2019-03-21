const express = require('express');
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const { addUser } = require('./controller.js')


const app = express();
const port = 3001;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

// app.post('/api', addUser)

app.listen(port, () => console.log(`*~*~*~ SERVER IS UP ON PORT ${port} *~*~*~`))