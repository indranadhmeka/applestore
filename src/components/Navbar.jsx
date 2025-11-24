import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Search } from "lucide-react";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

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

  // Detect mobile screens
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile toggle click
  const handleMenuClick = (menu) => {
    if (isMobile) {
      setActiveMenu(activeMenu === menu ? null : menu);
    }
  };

  return (
    <nav className="bg-[#161617] text-gray-200 backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Apple Logo */}
        <Link to="/" className="text-gray-200 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M16.365 1.43c0 1.14-.42 2.102-1.25 2.888-.83.785-1.776 1.22-2.84 1.305a3.14 3.14 0 0 1-.02-.346c0-1.102.45-2.074 1.34-2.914.89-.84 1.89-1.272 3-1.292a3.53 3.53 0 0 1-.23.359zm4.907 16.12c-.36.84-.79 1.611-1.29 2.312-.64.894-1.164 1.511-1.573 1.852-.626.572-1.298.862-2.017.872-.512 0-1.132-.145-1.86-.433-.73-.29-1.402-.433-2.017-.433-.64 0-1.33.145-2.07.433-.74.288-1.33.437-1.77.447-.69.03-1.38-.276-2.07-.918-.44-.39-.99-1.03-1.65-1.92a18.55 18.55 0 0 1-1.63-2.51c-.51-.92-.92-1.986-1.23-3.197A10.36 10.36 0 0 1 1.64 9.7c0-1.7.4-3.177 1.2-4.43a6.45 6.45 0 0 1 2.34-2.36 6.07 6.07 0 0 1 3.01-.81c.59 0 1.36.167 2.3.502.93.334 1.52.503 1.76.503.19 0 .85-.2 1.98-.6a6.87 6.87 0 0 1 2.76-.56c1.02.01 1.94.26 2.76.76a5.86 5.86 0 0 1 2.07 2.1c-.82.5-1.46 1.14-1.91 1.92-.48.81-.72 1.72-.72 2.73 0 1.1.27 2.09.82 2.98.54.89 1.26 1.56 2.17 2.01-.18.52-.39 1.02-.63 1.49z" />
          </svg>
        </Link>
<h1>applestores</h1>
        {/* Center Menu */}
        <div className="hidden md:flex space-x-6 text-sm">
          {menus.map((menu) => (
            <div
              key={menu.name}
              className="relative"
              onMouseEnter={() => !isMobile && setActiveMenu(menu.name)}
              onMouseLeave={() => !isMobile && setActiveMenu(null)}
            >
              <Link
                to={menu.path}
                onClick={() => handleMenuClick(menu.name)}
                className={`hover:text-white transition ${
                  activeMenu === menu.name ? "text-white" : ""
                }`}
              >
                {menu.name}
              </Link>

              {/* Optional dropdown (like Apple.com hover cards) */}
              {activeMenu === menu.name && (
                <div className="absolute left-0 w-64 bg-white text-gray-800 rounded-md shadow-md mt-2 animate-fadeIn">
                  <ul className="py-3 px-4 text-sm space-y-2">
                    <li className="hover:text-blue-600 cursor-pointer">
                      Learn more about {menu.name}
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      Shop {menu.name}
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      Compare {menu.name}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-5">
          <button className="hover:text-white transition">
            <Search size={18} />
          </button>
          <button className="hover:text-white transition">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

