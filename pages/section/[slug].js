// pages/section/[slug].js

import { useRouter } from 'next/router';
import { useState } from 'react';
import connectDB from '../../lib/db';
import mongoose from 'mongoose';

const Section = ({ fields }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [formData, setFormData] = useState({});

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleCreate = async () => {
    try {
      // Connect to the MongoDB database
      await connectDB();

      // Access the specified collection using the slug parameter
      const collection = mongoose.connection.collection(name); // Assuming 'name' is defined earlier

      // Insert the formData into the collection
      await collection.insertOne(formData);

      console.log('Data inserted successfully');
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  return (
    <div>
      <h1>{`Section ${slug}`}</h1>
      {fields.map((field) => (
        <div key={field}>
          <label>{field}</label>
          <input
            type="text"
            onChange={(e) => handleChange(field, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export async function getServerSideProps(context) {
  // Connect to the MongoDB database
  await connectDB();

  // Fetch fields based on the slug and pass it as props
  const { slug } = context.params;

  const components = ["1-involvementSummary", "2-projectSummary"];
  const componentIndex = parseInt(slug) - 1;
  console.log("===================================");
  console.log(components[componentIndex]);
  let name = components[componentIndex];

  // Access the specified collection using the slug parameter
  const collection = mongoose.connection.collection(name);
  
  // Retrieve a sample document from the collection
  const sampleDocument = await collection.findOne();
  
  // Extract the field names from the sample document
  let fields = Object.keys(sampleDocument);

  return {
    props: {
      fields,
    },
  };
}

export default Section;
// new V