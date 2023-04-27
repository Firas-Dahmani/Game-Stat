const express = require('express');
const gameRoutes = require('./routes/gamesRoutes.js');
var cors = require('cors')
var app = express()

app.use(cors())

app.use(express.json());

app.use(express.json());
app.use('/api', gameRoutes);

const PORT = process.env.PORT || 3001;
module.exports = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});