const express = require("express");
const bodyParser= require("body-parser");
const userRoutes = require('./routes/user.js')

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.get('/', (req, res) => res.send('Dong Review Phim'));
app.listen(PORT, () => console.log('Server running on port: http://localhost:${PORT}'))
