import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 mt-12">
      <div className="container mx-auto flex flex-col items-center px-6 lg:px-12">
        <div className="flex space-x-8 mb-4">
          <a
            href="/"
            className="text-white font-medium hover:text-blue-300 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="/about-me"
            className="text-white font-medium hover:text-blue-300 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-white font-medium hover:text-blue-300 transition-colors duration-200"
          >
            Contact
          </a>
          <a
            href="#faq"
            className="text-white font-medium hover:text-blue-300 transition-colors duration-200"
          >
            FAQ
          </a>
        </div>

        <div className="text-sm text-center mb-4">
          <a
            href="#terms"
            className="text-white font-medium hover:text-blue-300 transition-colors duration-200"
          >
            Terms & Conditions
          </a>
          <span className="mx-2">|</span>
          <a
            href="#privacy"
            className="text-white font-medium hover:text-blue-300 transition-colors duration-200"
          >
            Privacy Policy
          </a>
        </div>

        <div className="flex space-x-6 mb-4">
          <a
            href="https://facebook.com"
            className="text-white hover:text-blue-300 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.99 3.64 9.16 8.5 9.86V15h-2v-3h2v-2.2c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.3.1 2.6.2v2.9h-2c-1.3 0-1.6.6-1.6 1.5v2.1h3l-1 3h-2v7.9c4.86-.7 8.5-4.87 8.5-9.86 0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            className="text-white hover:text-blue-300 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M23 3a10.7 10.7 0 0 1-3.07.84A4.48 4.48 0 0 0 22.4 1.4a10.64 10.64 0 0 1-3.46 1.32 4.5 4.5 0 0 0-7.64 4.1A12.7 12.7 0 0 1 1.67 2.09a4.48 4.48 0 0 0 1.39 6.03A4.47 4.47 0 0 1 1 7.68v.06a4.5 4.5 0 0 0 3.62 4.42c-.73.02-1.46-.07-2.14-.19a4.5 4.5 0 0 0 4.19 3.11A9 9 0 0 1 0 19.28a12.67 12.67 0 0 0 6.75 1.98c8.12 0 12.59-6.72 12.59-12.59 0-.19 0-.39-.02-.58A8.8 8.8 0 0 0 23 3z" />
            </svg>
          </a>
        </div>

        <div className="text-sm text-center text-gray-300">
          <p>&copy; 2024 Jhonnier De la Cruz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
