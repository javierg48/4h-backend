// lib/db.js

import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017/4h-record-books';

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
