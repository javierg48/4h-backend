// pages/section/[slug].js

import React from 'react';
import { useRouter } from 'next/router';

const Section = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Placeholder for fetching data from MongoDB based on the slug (to be implemented)
  const fetchDataFromMongoDB = async () => {
    // Implement your logic to fetch data from MongoDB for the specified section
    // For now, let's use a placeholder object
    return {
      title: `Section ${slug}`,
      description: `This is Section ${slug}.`,
      // Add more fields as needed based on MongoDB collection structure
    };
  };

  // Use React hooks to manage state
  const [sectionData, setSectionData] = React.useState(null);

  // Fetch data when the component mounts
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataFromMongoDB();
      setSectionData(data);
    };

    fetchData();
  }, [slug]); // Run the effect whenever the slug changes

  // Display loading message while data is being fetched
  if (!sectionData) {
    return <p>Loading...</p>;
  }

  // Render the dynamic content based on the fetched data
  return (
    <div>
      <h1>{sectionData.title}</h1>
      <p>{sectionData.description}</p>
      {/* Render additional fields dynamically based on MongoDB collection */}
    </div>
  );
};

export default Section;
