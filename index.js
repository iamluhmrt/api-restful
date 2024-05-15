// Enable environment variables
require('dotenv').config();

// config inicial
const express = require('express');
const db = require('mongoose');
const app = express();

// config express
const port = process.env.PORT || 3001;
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

// config mongoose
db.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server was started on ${port} port !`);
        });
    })
    .catch((err) => console.log(err));

// rotas da API
const personRoutes = require('./app/routes/personRoutes');
app.use('/person', personRoutes);
