// pages/dashboard.js
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Fetch user data from the server (to be implemented in Step 6)
    // For now, set a default user name
    setUserName('John Doe');
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hello, {userName}!</p>
    </div>
  );
};

export default Dashboard;
