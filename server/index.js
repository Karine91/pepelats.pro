import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import webpackDevServerConfig from './controllers/config/devOptions';
import auth from './routes/auth';

const debug = require('debug')('server:app');
const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/dist', express.static('dist'));

webpackDevServerConfig(app);

// ROUTES
app.use('/api/auth', auth);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => debug('Server listen on port =', port, 'ENV =', process.env.NODE_ENV));
