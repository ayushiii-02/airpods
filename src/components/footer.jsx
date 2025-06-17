import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Column 1 */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-300">Shop</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">AirPods</a></li>
            <li><a href="#">Headphones</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-300">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Apple Music</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Warranty</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-300">About</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-300">Follow Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Airpods. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
