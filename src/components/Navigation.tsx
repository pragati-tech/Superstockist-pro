import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/brands/nav_logo.png" 

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-20 flex items-center justify-center">
              <span><img src={logo} alt="" /></span>
            </div>
            <span style={{color:"#0386c9"}} className="font-medium text-xs  ">
              Khandelwal Enterprises <br/>
              Krishna Tradlinks Pvt. Ltd.
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/directors">
              <h1 className="text-gray-900 font-medium">About Directors</h1>
            </Link>

            {/* Brands Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="text-gray-900 font-medium focus:outline-none"
              >
                Brands ▾
              </button>
              {dropdownOpen && (
                <div className="absolute font-medium bg-white border shadow-md rounded-md mt-2 min-w-[160px] z-50">
                  <a
                    href="/#distributor-section"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Distributor
                  </a>
                  <a
                    href="/#super-stockist-section"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Superstockist
                  </a>
                  <a
                    href="/#exclusive-stores-section"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Exclusive Stores
                  </a>
                </div>
              )}
            </div>

            <a href="/#contact">
              <h1 className="text-gray-900 font-medium">Contact</h1>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-3">
          <Link
            to="/directors"
            className="block text-gray-900 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Directors
          </Link>

          <div>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="text-gray-900 font-medium w-full text-left"
            >
              Brands ▾
            </button>
            {dropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <a
                  href="/#distributor-section"
                  className="block text-sm text-gray-700"
                  onClick={() => {
                    setDropdownOpen(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  Distributor
                </a>
                <a
                  href="/#super-stockist-section"
                  className="block text-sm text-gray-700"
                  onClick={() => {
                    setDropdownOpen(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  Superstockist
                </a>
                <a
                  href="/#exclusive-stores-section"
                  className="block text-sm text-gray-700"
                  onClick={() => {
                    setDropdownOpen(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  Exclusive Stores
                </a>
              </div>
            )}
          </div>

          <a
            href="/#contact"
            className="block text-gray-900 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
