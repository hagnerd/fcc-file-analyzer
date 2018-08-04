const express = require('express');
const cors = require('cors');
const multer = require('multer');

const upload = multer({
  dest: 'uploads/',
});

/* Initialize Express App */
const app = express();

/* Use CORS (simply for FCC submission to work) */
app.use(cors());

/* Set ./assets/ as the folder to serve static assets from */
app.use(express.static('assets'));

app.use('/api/analyzefile', upload.single('upfile'), (req, res) => {
  res.json({
    name: req.file.originalname,
    size: req.file.size,
    type: req.file.mimetype,
  });
});

app.get('/', (_, res) => {
  res.sendFile(process.cwd() + '/src/views/index.html');
});

module.exports = app;
