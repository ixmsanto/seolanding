'use client';

import React, { useState, useEffect } from 'react';
import Preloader from '../components/preloader';
import { SlideTabsExample } from '../components/navbar';
import FloatingPhone from '../components/phone';
import { ClipPathLinks } from '../components/ClipPathLinks';
import TiltCard from '../components/Tiltcard';

const Page: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <Preloader isVisible={loading} />
      
      {/* Only show this once loading is finished */}
      {!loading && (
        <>
          {/* Navbar component */}
          <SlideTabsExample />
          
          {/* FloatingPhone outside the navbar with margin for spacing */}
          <div className="mt-16"> {/* Adjust this value as needed */}
            <FloatingPhone />
            <ClipPathLinks />
            <TiltCard />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
