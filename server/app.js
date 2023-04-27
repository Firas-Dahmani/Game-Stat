const express = require('express');
const gameRoutes = require('./routes/gamesRoutes.js');
var cors = require('cors')
var app = express()


const corsOptions = {
  origin: 'https://your-netlify-domain.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions))

app.use(express.json());

app.use(express.json());
app.use('/api', gameRoutes);

const PORT = process.env.PORT || 3001;
module.exports = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});