const mongoose = require('mongoose');

const connectDB = async () => {
	const connection = await mongoose.connect(process.env.MONGO_URI, {
		// set up to avoid console warnings in the future
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	});

	console.log(`MongoDB connected: ${connection.connection.host}`.bgBrightBlue);
};

module.exports = connectDB;
