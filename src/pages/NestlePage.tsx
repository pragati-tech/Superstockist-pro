
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Coffee, Heart, Award } from "lucide-react";
import Nestleimg from "../assets/brands/Nestle.png"
import { ArrowRight } from "lucide-react";
import Maggieimg from "../assets/brands/Maggie.jpg"
import Kitkatimg from "../assets/brands/Kitkat.png"
import Coffeeimg from "../assets/brands/Coffee.png"

const NestlePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-5">
          <img
            src= {Nestleimg}
            alt =""
            className="h-20 mx-auto bject-contain drop-shadow-lg mb-2"
            loading="lazy"
          />
          <p className="text-xl text-gray-600 max-w-5xl mx-auto">
            We have been Nestle's distributor since 1985, covering Gwalior city and over 1500 retailers.
           <br />Product : Maggie, KitKat, Nescafe
          </p>
          <p className="text-s font-medium text-gray-400">For Enquiry, kindly contact : +91-9111005821, 9111004059</p>
        </div>

        <div className="flex justify-around gap-8 mb-10">
          {/* Card 1 */}
        
        <div className="group relative w-[400px] h-[350px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">

  {/* Image Section */}
  <div className="flex justify-center items-center h-[250px]">
    <img
      src={Maggieimg}
      alt="Maggie"
      className="object-contain transition-transform duration-500 group-hover:scale-110 mt-20"
    />
  </div>

  {/* Title Always Visible Below Image */}
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
    <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-3 rounded-full shadow">
      <span className="text-xs font-medium">Maggie</span>
    </div>
  </div>
</div>

          {/* Card 2 */}
   <div className="group relative w-[400px] h-[350px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">

  {/* Image Section */}
  <div className="flex justify-center items-center h-[250px]">
    <img
      src={Kitkatimg}
      alt="Maggie"
      className="object-contain transition-transform duration-500 group-hover:scale-110 mt-20"
    />
  </div>

  {/* Title Always Visible Below Image */}
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
    <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-3 rounded-full shadow">
      <span className="text-xs font-medium">Kitkat</span>
    </div>
  </div>
</div>

      {/* Card 3 */}

      <div className="group relative w-[400px] h-[350px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">

    <div
  className="w-[400px] h-[350px] bg-center bg-cover m-auto transition-transform duration-500 group-hover:scale-110"
  style={{ backgroundImage: `url(${Coffeeimg  })` }}
>
</div>

    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 opacity-100 translate-y-4 translate-y-0 transition-all duration-500">
      <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-3 rounded-full shadow">
        <span className="text-xs font-medium">Coffee</span>
      </div>
    </div>
  </div>
    
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

export default NestlePage;
