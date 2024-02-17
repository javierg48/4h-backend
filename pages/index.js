// pages/index.js
import { useState } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the data to the server (to be implemented in Step 6)
    console.log(`User Signed In: ${firstName} ${lastName}`);

    router.push('/dashboard');
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Index;
