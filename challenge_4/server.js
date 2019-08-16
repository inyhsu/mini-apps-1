const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('dist'))

app.get('/', (req, res) => res.send('Hello from server'))

app.listen(port, () => console.log(`listeing on port ${port}`))
