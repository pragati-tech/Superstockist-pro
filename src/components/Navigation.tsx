import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";    

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 business-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-xl font-bold text-gray-900">SuperStock Pro</span>
          </Link>

          
          <div className="flex items-center space-x-6">

            <a href="/directors">
            <h1 className="text-gray-900 font-medium">About Directors</h1>
            </a>

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
            </a >
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
