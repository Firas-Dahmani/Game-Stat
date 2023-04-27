require('dotenv').config()
const express = require('express');
const gameRoutes = require('./routes/gamesRoutes.js');
const cors = require('cors')
const app = express()


app.use(cors())

app.use(express.json());

app.use(express.json());
app.use('/api', gameRoutes);

const PORT = process.env.PORT || 8000;
module.exports = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});