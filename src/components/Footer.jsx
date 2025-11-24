import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 mt-16 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {/* 🧩 Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/find-store" className="hover:underline">Find a Store</Link></li>
            <li><Link to="/order-status" className="hover:underline">Order Status</Link></li>
            <li><Link to="/shopping-help" className="hover:underline">Shopping Help</Link></li>
            <li><Link to="/your-saves" className="hover:underline">Your Saves</Link></li>
          </ul>
        </div>

        {/* 🍎 Shop and Learn */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900">Shop and Learn</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/store" className="hover:underline">Store</Link></li>
            <li><Link to="/mac" className="hover:underline">Mac</Link></li>
            <li><Link to="/ipad" className="hover:underline">iPad</Link></li>
            <li><Link to="/iphone" className="hover:underline">iPhone</Link></li>
            <li><Link to="/watch" className="hover:underline">Watch</Link></li>
            <li><Link to="/airpods" className="hover:underline">AirPods</Link></li>
            <li><Link to="/tvhome" className="hover:underline">TV & Home</Link></li>
            <li><Link to="/airtag" className="hover:underline">AirTag</Link></li>
            <li><Link to="/accessories" className="hover:underline">Accessories</Link></li>
            <li><Link to="/gift-cards" className="hover:underline">Gift Cards</Link></li>
          </ul>
        </div>

        {/* 💳 Apple Wallet & Account */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900">Apple Wallet</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li><Link to="/wallet" className="hover:underline">Wallet</Link></li>
          </ul>
          <h3 className="font-semibold mb-3 text-gray-900">Account</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/account/manage" className="hover:underline">Manage Your Apple Account</Link></li>
            <li><Link to="/account/store" className="hover:underline">Apple Store Account</Link></li>
            <li><a href="https://www.icloud.com" target="_blank" rel="noreferrer" className="hover:underline">iCloud.com</a></li>
          </ul>
        </div>

        {/* 🎬 Entertainment */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900">Entertainment</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/apple-one" className="hover:underline">Apple One</Link></li>
            <li><Link to="/apple-tv-plus" className="hover:underline">Apple TV+</Link></li>
            <li><Link to="/apple-music" className="hover:underline">Apple Music</Link></li>
            <li><Link to="/apple-arcade" className="hover:underline">Apple Arcade</Link></li>
            <li><Link to="/apple-podcasts" className="hover:underline">Apple Podcasts</Link></li>
            <li><Link to="/apple-books" className="hover:underline">Apple Books</Link></li>
            <li><Link to="/app-store" className="hover:underline">App Store</Link></li>
          </ul>
        </div>

        {/* 🏢 Apple Store */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900">Apple Store</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/find-store" className="hover:underline">Find a Store</Link></li>
            <li><Link to="/genius-bar" className="hover:underline">Genius Bar</Link></li>
            <li><Link to="/today-at-apple" className="hover:underline">Today at Apple</Link></li>
            <li><Link to="/apple-camp" className="hover:underline">Apple Summer Camp</Link></li>
            <li><Link to="/ways-to-buy" className="hover:underline">Ways to Buy</Link></li>
            <li><Link to="/trade-in" className="hover:underline">Apple Trade In</Link></li>
            <li><Link to="/recycling" className="hover:underline">Recycling Programme</Link></li>
            <li><Link to="/order-status" className="hover:underline">Order Status</Link></li>
            <li><Link to="/shopping-help" className="hover:underline">Shopping Help</Link></li>
          </ul>
        </div>
      </div>

      {/* 🌍 Bottom Section */}
      <div className="border-t border-gray-300 mt-8 pt-6 pb-10 px-6 max-w-7xl mx-auto text-sm text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-gray-900">For Business</h4>
            <ul className="space-y-1">
              <li><Link to="/business" className="hover:underline">Apple and Business</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-gray-900">For Education</h4>
            <ul className="space-y-1">
              <li><Link to="/education" className="hover:underline">Apple and Education</Link></li>
              <li><Link to="/education/store" className="hover:underline">Shop for Education</Link></li>
              <li><Link to="/college" className="hover:underline">Shop for College</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-gray-900">For Healthcare</h4>
            <ul className="space-y-1">
              <li><Link to="/healthcare" className="hover:underline">Apple in Healthcare</Link></li>
              <li><Link to="/health-watch" className="hover:underline">Health on Apple Watch</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-gray-900">Apple Values</h4>
            <ul className="space-y-1">
              <li><Link to="/accessibility" className="hover:underline">Accessibility</Link></li>
              <li><Link to="/environment" className="hover:underline">Environment</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy</Link></li>
              <li><Link to="/supply-chain" className="hover:underline">Supply Chain</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-gray-900">About Apple</h4>
            <ul className="space-y-1">
              <li><Link to="/newsroom" className="hover:underline">Newsroom</Link></li>
              <li><Link to="/leadership" className="hover:underline">Apple Leadership</Link></li>
              <li><Link to="/careers" className="hover:underline">Career Opportunities</Link></li>
              <li><Link to="/investors" className="hover:underline">Investors</Link></li>
              <li><Link to="/ethics" className="hover:underline">Ethics & Compliance</Link></li>
              <li><Link to="/events" className="hover:underline">Events</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Apple</Link></li>
            </ul>
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-200 pt-6">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://facebook.com/apple" target="_blank" rel="noreferrer">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
            </a>
            <a href="https://twitter.com/apple" target="_blank" rel="noreferrer">
              <Twitter className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
            </a>
            <a href="https://youtube.com/apple" target="_blank" rel="noreferrer">
              <Youtube className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
            </a>
          </div>
          <p className="text-xs text-gray-500">
            © 2025 AppleStores. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
