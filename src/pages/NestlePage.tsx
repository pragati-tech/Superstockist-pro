import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Nestleimg from "../assets/brands/Nestle.png";
import Maggieimg from "../assets/brands/Maggie.jpg";
import Kitkatimg from "../assets/brands/Kitkat.png";
import Coffeeimg from "../assets/brands/Coffee.png";
import logo from "../assets/brands/nav_logo.png"

const NestlePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
      <Navigation />

      {/* Hero / Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <div className="text-center mb-8">
          <img
            src={Nestleimg}
            alt="Nestle Logo"
            className="h-16 sm:h-20 mx-auto object-contain drop-shadow-lg mb-3"
            loading="lazy"
          />
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We have been Nestle's distributor since 1985, covering Gwalior city
            and over <b>1500 retailers</b>.
            <br />
            <span className="text-gray-700 font-medium">
              Products: Maggie, KitKat, Nescafe
            </span>
          </p>
          <p className="text-sm sm:text-base font-medium text-gray-400 mt-2">
            For Enquiry, kindly contact : +91-9111005821, 9111004059
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mb-5">
          {/* Card 1 - Maggie */}
          <div className="group relative w-full max-w-sm aspect-[3/4] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
            <div
              className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${Maggieimg})` }}
            ></div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow">
                <span className="text-sm font-medium">Maggie</span>
              </div>
            </div>
          </div>

          {/* Card 2 - Kitkat */}
          <div className="group relative w-full max-w-sm aspect-[3/4] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
            <div className="flex justify-center items-center h-full">
              <img
                src={Kitkatimg}
                alt="Kitkat"
                className="object-contain transition-transform duration-500 group-hover:scale-110 w-2/3"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow">
                <span className="text-sm font-medium">Kitkat</span>
              </div>
            </div>
          </div>

          {/* Card 3 - Coffee */}
          <div className="group relative w-full max-w-sm aspect-[3/4] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
            <div
              className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${Coffeeimg})` }}
            ></div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow">
                <span className="text-sm font-medium">Coffee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-8 text-center">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-20 flex items-center justify-center">
              <span><img src={logo} alt="" /></span>
            </div>
            <span style={{color:"#0386c9"}} className="font-medium">
              Khandelwal Enterprises <br/>
              Krishna Tradlinks Pvt. Ltd.
            </span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Your trusted superstockist partner for premium brands. Delivering
              excellence through innovative solutions and seamless communication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#section2"
                    className="hover:text-white transition-colors"
                  >
                    Brands
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <b>Head Office: </b>3rd Floor, Rukmani Mansion, Sarafa
                  Bazaar, <br /> Lashkar, Gwalior-474001
                </li>
                <li>
                  <b>Tel: </b>0751-2450303, 2371408
                </li>
                <li>ktplanuj@yahoo.co.in</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 pt-6 text-gray-400 text-center text-sm">
            <p>&copy; 2025 kektpl. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NestlePage;
