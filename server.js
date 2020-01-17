const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

//init app variable
const app = express();

// GET all bootcamps from db
app.get('/api/v1/bootcamps', (req, res) => {
	res.status(200).json({ success: true, msg: 'Show all bootcamps' });
});

// GET specific bootcamp from db
app.get('/api/v1/bootcamps/:id', (req, res) => {
	res
		.status(200)
		.json({ success: true, msg: `Get specific bootcamp: ${req.params.id}` });
});

// POST new bootcamps to db
app.post('/api/v1/bootcamps', (req, res) => {
	res.status(200).json({ success: true, msg: 'Add new bootcamp to db' });
});

// PUT update specific bootcamp in db
app.put('/api/v1/bootcamps/:id', (req, res) => {
	res.status(200).json({
		success: true,
		msg: `Update specific bootcamp: ${req.params.id} `
	});
});

// DELETE specific bootcamp from db
app.delete('/api/v1/bootcamps/:id', (req, res) => {
	res
		.status(200)
		.json({ success: true, msg: `Delete specific bootcamp: ${req.params.id}` });
});

const PORT = process.env.PORT || 5000;
app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
