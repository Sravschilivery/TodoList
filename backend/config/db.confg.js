const mongoose = require('mongoose');

const connectToDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`DB connected: ${conn.connection.host}`);
  } catch (e) {
    console.error(`Error connecting to DB: ${e.message}`);
    process.exit(1);
  }
}

module.exports = connectToDb;
