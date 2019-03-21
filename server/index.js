const express = require('express');
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const { postUser, getUser } = require('./controller.js')


const app = express();
const port = 3001;

app.use(morgan('dev'))
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/api', postUser)
app.get('/api', getUser)

app.listen(port, () => console.log(`*~*~*~ SERVER IS UP ON PORT ${port} *~*~*~`))