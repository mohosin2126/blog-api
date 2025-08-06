const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const blogRoutes = require('./routes/index');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api', blogRoutes);


app.get('/', (req, res) => {
    res.send('Blog API is running successfully!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
