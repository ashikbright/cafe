const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const staffRoutes = require('./routes/staffRoutes');
const studentRoutes = require('./routes/studentRoutes');

const path = require('path');
const cors = require('cors');


dotenv.config();
const app = express();
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.json());
app.use('/api', staffRoutes);
app.use('/api', studentRoutes);

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
