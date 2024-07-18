import React from 'react'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="bg-gray-800">
      <header>
        <nav className="flex items-center justify-between p-4">
          <div className="flex items-center">
            {/* <Image
              src="/path/to/your/image.jpg"
              alt="Logo"
              className="h-10 mr-4"
              width={100}
              height={40}
            /> */}
            <span className="text-white text-xl font-bold">
              <a href="#">Logo</a>
            </span>
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:bg-gray-700 p-2 rounded-lg">Home</a>
            </li>
            <li>
              <a href="/about" className="text-white hover:bg-gray-700 p-2 rounded-lg">About</a>
            </li>
            <li>
              <a href="/services" className="text-white hover:bg-gray-700 p-2 rounded-lg">Services</a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:bg-gray-700 p-2 rounded-lg">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar;
