// pages/create-retrieve.js
import { useState } from 'react';

const CreateRetrieve = () => {
  const [sectionData, setSectionData] = useState('');
  const [savedData, setSavedData] = useState('');

  const handleCreateRetrieve = async () => {
    // Implement logic to send data to the server and retrieve saved data (to be implemented in Step 6)
    console.log(`Data submitted: ${sectionData}`);

    // For now, set a default saved data
    setSavedData('Sample Data Saved!');
  };

  return (
    <div>
      <h1>Create and Retrieve</h1>
      <label>
        Enter Data for Section:
        <input
          type="text"
          value={sectionData}
          onChange={(e) => setSectionData(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleCreateRetrieve}>Submit Data</button>
      <br />
      <p>Saved Data: {savedData}</p>
    </div>
  );
};

export default CreateRetrieve;
