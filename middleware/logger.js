// @desc    Logs request info to console
// This is an example of how to put middleware together, but this project ultimately uses the 3rd party middleware, morgan, instead.

const logger = (req, res, next) => {
	console.log(
		`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
	);
	next();
};

module.exports = logger;
