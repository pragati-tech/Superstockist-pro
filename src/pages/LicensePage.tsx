
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ImageCarousel from "@/components/ImageCarousal";
import { Link } from "react-router-dom";
import { ArrowLeft, Coffee, MapPin, Clock } from "lucide-react";
import Licenseimg from "../assets/brands/Licensed_Brands.png"
import { ArrowRight } from "lucide-react";
import AnneKleinimg from "../assets/brands/Anne_Klein.png"
import Tommyimg from "../assets/brands/Tommy_Hilfiger.png"
import Kennethimg from "../assets/brands/kenneth_Cole.png"
import Policeimg from "../assets/brands/Police.png"
import KC_Catalogue from "../assets/pdfs/KC_Catalogue1.pdf"
// import AnneKleinPage from "./AnneKleinPage";

const LicensePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-5">
          <img
            src= {Licenseimg}
            alt =""
            className="h-20 mx-auto bject-contain drop-shadow-lg mb-2"
            loading="lazy"
          />
            {/* <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We started the Nescafe Kiosks in 2023, operating within the universities and hospitals in Gwalior. We now manage around 5 kisoks across the city.
            </p> */}
        </div>

          <div className="flex justify-between mb-10">
          {/* Card 1 */}
         
         <Link to="/Licensebrands/AnneKlein">
        <div className="group relative w-[300px] h-[400px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">

        <div
            className="w-[300px ] h-[400px] bg-center bg-contain m-auto transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${AnneKleinimg})` }}
        >
        </div>


        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-3 rounded-full shadow">
            <span className="text-xs font-medium">Anne Klein</span>
            <ArrowRight className="w-3 h-3" />
        </div>
        </div>
    </div>
    </Link>
  
          {/* Card 2 - Duplicate for now */}
           <Link to="/Licensebrands/Tommy-Hilfiger">
        <div className="group relative w-[300px] h-[400px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">

        <div
            className="w-[300px] h-[400px] bg-center bg-contain m-auto transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${Tommyimg})` }}
        >
        </div>


        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <div className="flex justify-between items-center text-gray-700 bg-white/80 backdrop-blur-sm px-2 py-3 rounded-full shadow">
            <span className="text-xs font-medium">Tommy Hilfiger</span>
            <ArrowRight className="w-3 h-3" />
        </div>
        </div>
    </div>
    </Link>

          {/* Card 3 */}
          <Link to="/Licensebrands/Kenneth-Cole">
        <div className="group relative w-[300px] h-[400px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">

        <div
            className="w-[280px] h-[400px] bg-center bg-contain m-auto transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${Kennethimg})` }}
        >
        </div>


        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-3 rounded-full shadow">
            <span className="text-xs font-medium">Kenneth Cole</span>
            <ArrowRight className="w-3 h-3" />
        </div>
        </div>
    </div>
    </Link>
          {/* Card 4 */}
          <Link to="/Licensebrands/Police">
        <div className="group relative w-[300px] h-[400px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">

        <div
            className="w-[320px] h-[400px] bg-center bg-contain m-auto transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${Policeimg})` }}
        >
        </div>


        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-3 rounded-full shadow">
            <span className="text-xs font-medium">Police</span>
            <ArrowRight className="w-3 h-3" />
        </div>
        </div>
    </div>
    </Link>

          {/* Repeat above block for more cards */}
        </div>   
      </div>
    <footer className="bg-gray-900 text-white py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-8">
          <div className="flex items-center space-x-2 mb-4  ">
            <div className="w-8 h-8 business-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-3xl font-bold">SuperStock Pro</span>
          </div>
          <p className="text-center text-gray-400 w-100">
            Your trusted superstockist partner for premium brands. 
            Delivering excellence through innovative solutions and seamless communication.
          </p>
        </div>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#section2" className="hover:text-white transition-colors">Brands</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li><b>Head Office : </b>3rd Floor, Rukmani Mansion, Sarafa Bazaar,<br /> Lashkar, Gwalior-474001</li>
                <li><b>Tel : </b>0751-2450303, 2371408</li>
                <li>ktplanuj@yahoo.co.in</li>
              </ul>
            </div>
          </div>
      
        <div className="border-t border-gray-800 mt-4 pt-8 text-gray-400 text-center">
          <p>&copy; 2025 SuperStock Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default LicensePage;
