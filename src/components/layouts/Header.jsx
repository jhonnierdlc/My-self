import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-12">
        {/* Logo and Name */}
        <a className="flex items-center space-x-3" href="/">
          <img src="/logo.png" alt="Logo" className="h-12 w-12" />
          <h1 className="text-3xl font-extrabold tracking-tight">
            Jhonnier De la Cruz
          </h1>
        </a>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex space-x-8">
          <a
            href="/about-me"
            className="text-white font-medium hover:text-blue-300 transition-colors duration-200"
          >
            About Us
          </a>
          <a
            href="/products"
            className="text-white font-medium hover:text-blue-300 transition-colors duration-200"
          >
            Products
          </a>
          <a
            href="/contact"
            className="text-white font-medium hover:text-blue-300 transition-colors duration-200"
          >
            Contact
          </a>
          <a
            href="#testimonials"
            className="text-white font-medium hover:text-blue-300 transition-colors duration-200"
          >
            Testimonials
          </a>
          <a
            href="#blog"
            className="text-white font-medium hover:text-blue-300 transition-colors duration-200"
          >
            Blog
          </a>
          <a
            href="#faq"
            className="text-white font-medium hover:text-blue-300 transition-colors duration-200"
          >
            FAQ
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
