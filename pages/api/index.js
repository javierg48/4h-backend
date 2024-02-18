// pages/api/index.js
import connection from '../../db';

connection(); // Connect to MongoDB

export default (req, res) => {
  res.status(200).json({ message: 'API is running!' });
};
