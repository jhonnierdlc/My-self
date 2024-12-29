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
            href="/faq"
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
            href="https://www.facebook.com/JhonnierDlc"
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
            href="https://www.linkedin.com/in/jhonnierdlc/"
            className="text-white hover:text-blue-300 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.728V1.727C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.635c-1.14 0-1.87-.76-1.87-1.71 0-.96.74-1.71 1.9-1.71s1.87.75 1.87 1.71c0 .95-.73 1.71-1.9 1.71zm15.11 12.817h-3.55v-5.99c0-1.59-.57-2.675-2-2.675-1.09 0-1.74.737-2.03 1.447-.1.24-.13.567-.13.897v6.32h-3.55s.05-10.26 0-11.453h3.55v1.62c.47-.725 1.31-1.757 3.19-1.757 2.33 0 4.08 1.52 4.08 4.79v6.8z" />
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
