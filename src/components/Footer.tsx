
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-comm-blue text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Commo<span className="text-comm-teal-light">Exchange</span></h3>
            <p className="text-gray-300 mb-4">
              Your comprehensive commodity exchange platform providing real-time market data, business intelligence, and community connection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                <span className="sr-only">Facebook</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                <span className="sr-only">Twitter</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                <span className="sr-only">Telegram</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C8.744 0 5.7 1.267 3.464 3.523 1.228 5.778 0 8.835 0 12.008c0 6.629 5.346 12 11.95 12s11.95-5.371 11.95-12c0-3.173-1.228-6.23-3.464-8.485C18.3 1.267 15.256 0 12 0zm5.953 8.302c-.153 1.56-1.46 7.002-1.46 7.002-.153.758-.306 1.061-.612 1.213-.459.303-1.071.152-1.377 0-.306-.152-4.589-2.879-4.589-2.879-.306-.151-.459-.303-.153-.455 0 0 1.07-1.061 2.141-1.97a.7.7 0 0 1 .918 0c.306.303 2.601 2.425 2.601 2.425.153.152.306 0 .153-.151 0 0-4.13-3.94-4.742-4.546-.306-.303-.153-.606 0-.757.153-.152 3.518-3.334 3.825-3.637.306-.303.918 0 .764.455-.153.455-2.6 2.576-2.6 2.576.153 0 5.047-3.031 5.2-3.183.153-.152.46-.152.612 0 .153.151.153.455.306.606.306.152-.153.455-.153.455z"/></svg>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/markets" className="text-gray-300 hover:text-white transition-colors">Markets</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors">News</Link></li>
              <li><Link to="/tenders" className="text-gray-300 hover:text-white transition-colors">Tenders</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/exchange" className="text-gray-300 hover:text-white transition-colors">Commodity Exchange</Link></li>
              <li><Link to="/services/rates" className="text-gray-300 hover:text-white transition-colors">Exchange Rates</Link></li>
              <li><Link to="/services/news" className="text-gray-300 hover:text-white transition-colors">Business News</Link></li>
              <li><Link to="/services/tenders" className="text-gray-300 hover:text-white transition-colors">Tender Information</Link></li>
              <li><Link to="/services/pricing" className="text-gray-300 hover:text-white transition-colors">Commodity Pricing</Link></li>
              <li><Link to="/services/community" className="text-gray-300 hover:text-white transition-colors">Community Building</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-comm-teal-light" />
                <span className="text-gray-300">123 Business Plaza, Financial District</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-comm-teal-light" />
                <span className="text-gray-300">+1 (234) 567-8901</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-comm-teal-light" />
                <span className="text-gray-300">info@commoexchange.com</span>
              </li>
              <li className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-comm-teal-light" />
                <span className="text-gray-300">www.commoexchange.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2023 CommoExchange. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-xs text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white">Cookies Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
