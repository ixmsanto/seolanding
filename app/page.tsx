'use client';
import React, { useState, useEffect } from "react";
import Loader from "../components/loader";
import Navbar from "../components/navbar";  // Import the Loader component

const Page: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
      document.body.classList.remove('loading');
    }, 3000);  // Change the time as needed (3 seconds here)
  }, []);

  return (
    <div>
      {loading ? <Loader /> : 
      <div>
        <Navbar />
      </div>}
    </div>
  );
};

export default Page;
