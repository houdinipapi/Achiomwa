import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold">ACHIOMWA</h2>
                    <p className="text-gray-400">&copy; 2024 all rights reserved.</p>
                </div>

                <div className="flex space-x-4">
                    <a href="/" className="text-gray-400 hover:text-white">Home</a>
                    <a href="/about" className="text-gray-400 hover:text-white">About</a>
                    <a href="/services" className="text-gray-400 hover:text-white">Services</a>
                    <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
                </div>

                {/* <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </div> */}

            </div>
        </div>
    </footer>
  )
}

export default Footer;
