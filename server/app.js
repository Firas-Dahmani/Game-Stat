const express = require('express');
const gameRoutes = require('./routes/gamesRoutes.js');

const app = express();

app.use(express.json());

app.use(express.json());
app.use('/api', gameRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});