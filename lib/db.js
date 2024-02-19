// lib/db.js

import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017/4h-record-books';

let isConnected;

const connectDB = async () => {
  if (isConnected) {
    console.log('Already connected to the database');
    return;
  }

  try {
    await mongoose.connect(uri, {
      // Remove useNewUrlParser and useUnifiedTopology
      // They are no longer needed in MongoDB Node.js driver 4.0.0 and above
    });

    isConnected = true;
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

export default connectDB;
