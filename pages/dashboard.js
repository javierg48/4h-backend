// pages/dashboard.js

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Dashboard = () => {
  // For simplicity, hardcoding a user name (will be dynamic later)
  const userName = "John Doe";
  const router = useRouter();

  const navigateToSection = (sectionNumber) => {
    router.push(`/section/${sectionNumber}`);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hello, {userName}!</p>

      <h2>Sections:</h2>
      <ul>
        <li>
          <div onClick={() => navigateToSection(1)}>Section 1</div>
        </li>
        <li>
          <div onClick={() => navigateToSection(2)}>Section 2</div>
        </li>
        {/* Add more links for additional sections with corresponding slugs */}
      </ul>
    </div>
  );
};

export default Dashboard;
