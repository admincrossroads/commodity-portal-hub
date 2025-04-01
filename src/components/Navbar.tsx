
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-comm-blue">Commo<span className="text-comm-teal">Exchange</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-comm-blue px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/markets" className="text-gray-700 hover:text-comm-blue px-3 py-2 rounded-md text-sm font-medium">Markets</Link>
            <Link to="/services" className="text-gray-700 hover:text-comm-blue px-3 py-2 rounded-md text-sm font-medium">Services</Link>
            <Link to="/news" className="text-gray-700 hover:text-comm-blue px-3 py-2 rounded-md text-sm font-medium">News</Link>
            <Link to="/tenders" className="text-gray-700 hover:text-comm-blue px-3 py-2 rounded-md text-sm font-medium">Tenders</Link>
            <Link to="/about" className="text-gray-700 hover:text-comm-blue px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link to="/community" className="text-gray-700 hover:text-comm-blue px-3 py-2 rounded-md text-sm font-medium">Community</Link>
            <div className="ml-2 flex items-center">
              <Button variant="ghost" size="icon" className="text-gray-500">
                <Search className="h-5 w-5" />
              </Button>
            </div>
            <Button className="bg-comm-blue hover:bg-comm-blue-light ml-2">Get Started</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={toggleMenu} size="icon">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link to="/" className="text-gray-700 hover:text-comm-blue block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/markets" className="text-gray-700 hover:text-comm-blue block px-3 py-2 rounded-md text-base font-medium">Markets</Link>
            <Link to="/services" className="text-gray-700 hover:text-comm-blue block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link to="/news" className="text-gray-700 hover:text-comm-blue block px-3 py-2 rounded-md text-base font-medium">News</Link>
            <Link to="/tenders" className="text-gray-700 hover:text-comm-blue block px-3 py-2 rounded-md text-base font-medium">Tenders</Link>
            <Link to="/about" className="text-gray-700 hover:text-comm-blue block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/community" className="text-gray-700 hover:text-comm-blue block px-3 py-2 rounded-md text-base font-medium">Community</Link>
            <div className="px-3 py-2">
              <Button className="w-full bg-comm-blue hover:bg-comm-blue-light">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
