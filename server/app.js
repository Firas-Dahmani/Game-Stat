require('dotenv').config()
const express = require('express');
const gameRoutes = require('./routes/gamesRoutes.js');
const cors = require('cors')
const path = require("path");

const app = express()


app.use(cors())

app.use(express.json());

app.use(express.json());
app.use('/api', gameRoutes);

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "../client/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "..", "client", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

const PORT = process.env.PORT || 8000;
module.exports = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});