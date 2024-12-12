import React from 'react'; // Single React import
import Lottie from 'react-lottie';
import animationData from '../src/loader.json'; // Replace with your actual JSON file path

interface PreloaderProps {
  isVisible: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isVisible }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#0000',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <Lottie options={defaultOptions} height={250} width={250} />
    </div>
  );
};

export default Preloader;
