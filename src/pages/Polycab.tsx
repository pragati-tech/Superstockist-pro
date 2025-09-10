import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Polycabimg from "../assets/brands/Polycab.png";

import Catalogue1img from "../assets/brands/Polycab_Catalogue1.jpg";
import Catalogue2img from "../assets/brands/Polycab_Catalogue.jpg";
import Catalogue3img from "../assets/brands/Polycab_Pricelist.jpg";
import Catalogue4img from "../assets/brands/Polycab_wires.jpg";

import Catalogue1 from "../assets/pdfs/Polycab_Catalogue1.pdf";
import Catalogue2 from "../assets/pdfs/Polycab_Fan_Catalogue.pdf";
import Catalogue3 from "../assets/pdfs/Polycab_Pricelist.pdf";
import Catalogue4 from "../assets/pdfs/Polycab_wires.pdf";
import logo from "../assets/brands/nav_logo.png"

const PolycabPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-5">
          <img
            src={Polycabimg}
            alt=""
            className="h-20 mx-auto object-contain drop-shadow-lg mb-2"
            loading="lazy"
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 2024, we have been the distributor and super-stockist for
            Polycab lightings, Wire, MCB, Fans serving the Gwalior division.
          </p>
          <p className="text-sm font-medium text-gray-400">
            For Enquiry, kindly contact : +91-9109198632, 9109198631
          </p>
        </div>

        {/* Responsive Card Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-10">
          {/* Card 1 */}
          <a target="_blank" href={Catalogue1}>
            <div className="group relative w-full h-[400px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div
                className="w-full h-full bg-right bg-cover transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${Catalogue1img})` }}
              ></div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow">
                  <span className="text-xs font-medium">LED Catalogue</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </a>

          {/* Card 2 */}
          <a target="_blank" href={Catalogue2}>
            <div className="group relative w-full h-[400px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div
                className="w-full h-full bg-right bg-cover transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${Catalogue2img})` }}
              ></div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow">
                  <span className="text-xs font-medium">Fan Catalogue</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </a>

          {/* Card 3 */}
          <a target="_blank" href={Catalogue3}>
            <div className="group relative w-full h-[400px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div
                className="w-full h-full bg-center bg-top bg-cover transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${Catalogue3img})` }}
              ></div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow">
                  <span className="text-xs font-medium">LP Pricelist</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </a>

          {/* Card 4 */}
          <a target="_blank" href={Catalogue4}>
            <div className="group relative w-full h-[400px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div
                className="w-full h-full bg-top bg-cover transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${Catalogue4img})` }}
              ></div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow">
                  <span className="text-xs font-medium">Polycab Wires</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-20 flex items-center justify-center">
              <span><img src={logo} alt="" /></span>
            </div>
            <span style={{color:"#0386c9"}} className="font-medium">
              Khandelwal Enterprises <br/>
              Krishna Tradlinks Pvt. Ltd.
            </span>
            </div>
            <p className="text-center text-gray-400 w-full">
              Your trusted superstockist partner for premium brands. Delivering
              excellence through innovative solutions and seamless communication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#section2" className="hover:text-white transition-colors">
                    Brands
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <b>Head Office : </b>3rd Floor, Rukmani Mansion, Sarafa
                  Bazaar,<br /> Lashkar, Gwalior-474001
                </li>
                <li>
                  <b>Tel : </b>0751-2450303, 2371408
                </li>
                <li>ktplanuj@yahoo.co.in</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-4 pt-8 text-gray-400 text-center">
            <p>&copy; 2025 kektpl. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PolycabPage;
