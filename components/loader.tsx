import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the loading text animation
const loadingAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// Styled-components for various parts of the loader
const LoaderWrap = styled.div`
  position: fixed;
  z-index: 9999; /* Ensure the loader is above other content */
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8); /* Semi-transparent background */
`;

const Svg = styled.svg`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 110vh;
  fill: #1d1d1d; /* Dark fill for visibility */
`;

const LoaderWrapHeading = styled.div`
  z-index: 20;
`;

const LoadText = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 15px;
  text-transform: uppercase;
  display: flex;

  span {
    animation: ${loadingAnimation} 1s infinite alternate;
  }

  span:nth-child(1) {
    animation-delay: 0s;
  }

  span:nth-child(2) {
    animation-delay: 0.1s;
  }

  span:nth-child(3) {
    animation-delay: 0.2s;
  }

  span:nth-child(4) {
    animation-delay: 0.3s;
  }

  span:nth-child(5) {
    animation-delay: 0.4s;
  }

  span:nth-child(6) {
    animation-delay: 0.5s;
  }

  span:nth-child(7) {
    animation-delay: 0.6s;
  }
`;

const Loader: React.FC = () => {
  useEffect(() => {
    // This can be used to add/remove classes based on loading state
    document.body.classList.add('loading');
    return () => {
      document.body.classList.remove('loading');
    };
  }, []);

  return (
    <LoaderWrap>
      <Svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </Svg>

      <LoaderWrapHeading>
        <LoadText>
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </LoadText>
      </LoaderWrapHeading>
    </LoaderWrap>
  );
};

export default Loader;
