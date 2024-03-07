const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const loginRouter = require('./routes/LoginRouter');
const handleError = require('./middlewares/handleError');
const productRouter = require('./routes/ProductRouter');

const app = express();
app.use(express.json());
app.use(cors({origin: ["http://localhost:5173", "https://lexartlabs-frontend.vercel.app"],credentials: true}));
app.use(cookieParser());


app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/users', loginRouter);
app.use('/products', productRouter);

app.use(handleError);

module.exports = app;