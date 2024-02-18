// db.js
import mongoose from 'mongoose';

const connection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/4h-record-books', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
};

export default connection;