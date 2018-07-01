import express from 'express';
const debug = require('debug')('server:auth');

const auth = express.Router();

auth.post('/', (req, res) => {
	const { email, password } = req.body;
	debug(email, password);
});

export default auth;
