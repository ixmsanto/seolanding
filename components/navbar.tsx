import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-black text-white min-h-screen">
      <div className="flex items-center justify-between p-4">
        <div className="text-xl font-bold">Hubfolio</div>
        <button
          className="block md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open menu</span>
          {isOpen ? (
            <span className="text-2xl">&times;</span>
          ) : (
            <span className="text-2xl">&#9776;</span>
          )}
        </button>
      </div>

      <div
        className={`absolute md:static bg-black top-0 right-0 h-screen w-2/3 md:w-auto md:flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0`}
      >
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 px-6 md:px-0">
          <li className="text-2xl font-medium">Home</li>
          <li className="text-2xl font-medium">Pages</li>
          <li className="text-2xl font-medium">Portfolio</li>
          <li className="text-2xl font-medium">Blog</li>
          <li className="text-2xl font-medium">Contact Us</li>
        </ul>

        <div className="mt-6 md:mt-0 px-6 md:px-0">
          <div className="space-y-2">
            <p className="text-lg">541 Melville Geek,</p>
            <p className="text-lg">Palo Alto, CA 94301</p>
            <p className="text-lg">Hello@email.com</p>
            <p className="text-lg">+1 840 841 25 69</p>
          </div>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-2xl">f</a>
            <a href="#" className="text-2xl">x</a>
            <a href="#" className="text-2xl">in</a>
            <a href="#" className="text-2xl">ig</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;