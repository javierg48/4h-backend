// pages/api/createUser.js
import connectToDatabase from '../../utils/connectToDatabase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName } = req.body;

    try {
      // Connect to the database
      const db = await connectToDatabase();

      // Create or update the user in the 'user' collection
      const usersCollection = db.collection('user');
      const result = await usersCollection.updateOne(
        { firstName, lastName },
        { $set: { firstName, lastName } },
        { upsert: true } // Create a new document if it doesn't exist
      );

      res.status(200).json({ message: 'User created successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
