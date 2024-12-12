import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";

export const SlideTabsExample = () => {
  return (
    <div className="bg-neutral-10 py-2">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* For Laptop/Desktop view */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 mx-auto w-full items-center justify-between p-3 z-50">
        {/* Label "seolanding" on the left with transparent background and larger text */}
        <div className="flex items-center space-x-4">
          <span className="text-white text-3xl font-bold">seolanding</span>
        </div>

        {/* Navbar menu on the right with transparent background */}
        <ul className="flex ml-auto w-fit rounded-full border-2 border-white p-1">
          <Tab setPosition={setPosition}>Home</Tab>
          <Tab setPosition={setPosition}>Pricing</Tab>
          <Tab setPosition={setPosition}>Features</Tab>
          <Tab setPosition={setPosition}>Docs</Tab>
          <Tab setPosition={setPosition}>Blogs</Tab>

          <Cursor position={position} />
        </ul>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-3 z-50">
          <span className="text-white text-2xl font-bold">seolanding</span>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-3 text-white rounded-full ${isMobileMenuOpen ? 'text-2xl' : 'text-xl'}`}
          >
            {isMobileMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        <motion.div
          animate={{
            left: isMobileMenuOpen ? 0 : '-100%',
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="absolute top-0 left-0 h-full w-2/3 p-6 pt-16"
        >
          <ul className="flex flex-col space-y-4">
            <Tab setPosition={setPosition}>Home</Tab>
            <Tab setPosition={setPosition}>Pricing</Tab>
            <Tab setPosition={setPosition}>Features</Tab>
            <Tab setPosition={setPosition}>Docs</Tab>
            <Tab setPosition={setPosition}>Blog</Tab>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

const Tab = ({
  children,
  setPosition,
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};
