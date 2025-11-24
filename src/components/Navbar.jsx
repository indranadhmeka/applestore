import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menus = [
    { name: "Store", path: "/store" },
    { name: "Mac", path: "/mac" },
    { name: "iPad", path: "/ipad" },
    { name: "iPhone", path: "/iphone" },
    { name: "Watch", path: "/watch" },
    { name: "AirPods", path: "/airpods" },
    { name: "TV & Home", path: "/tv-home" },
    { name: "Entertainment", path: "/entertainment" },
    { name: "Accessories", path: "/accessories" },
    { name: "Support", path: "/support" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-300 ${
        isScrolled ? "bg-black/90 shadow-lg" : "bg-black/40"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* LEFT: Brand Logo + Name */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"   // put your logo in public/logo.png
            alt="brand"
            className="w-7 h-7 object-contain"
          />

          <Link
            to="/"
            className="text-white text-lg font-semibold tracking-wide hover:text-gray-300 transition"
          >
            AppleStores
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-6 text-[14px]">
          {menus.map((menu) => (
            <div key={menu.name} className="relative group">
              <Link
                to={menu.path}
                className="text-gray-300 hover:text-white transition relative pb-1"
              >
                {menu.name}

                {/* Underline Hover */}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-5">

          <Search className="text-gray-200 hover:text-white cursor-pointer" size={18} />
          <ShoppingBag className="text-gray-200 hover:text-white cursor-pointer" size={18} />

          {/* Login / Signup */}
          <Link
            to="/login"
            className="hidden md:block text-gray-200 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="hidden md:block bg-white text-black px-3 py-1 rounded-full text-sm hover:bg-gray-300 transition"
          >
            Sign Up
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-200 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE SLIDE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-black px-6 py-4 space-y-4 animate-slideDown">

          {menus.map((menu) => (
            <Link
              key={menu.name}
              to={menu.path}
              onClick={() => setMobileOpen(false)}
              className="block text-gray-300 hover:text-white text-lg transition"
            >
              {menu.name}
            </Link>
          ))}

          {/* MOBILE Login/Signup */}
          <div className="pt-4 border-t border-gray-700">
            <Link
              to="/login"
              className="block text-gray-300 hover:text-white text-lg py-2"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="block bg-white text-black text-center text-lg py-2 rounded-full mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
