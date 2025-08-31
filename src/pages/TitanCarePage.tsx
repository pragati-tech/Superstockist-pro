
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ImageCarousel from "@/components/ImageCarousal";
import { Link } from "react-router-dom";
import { ArrowLeft, Rocket, Gamepad2, Store } from "lucide-react";
import TitanCareimg from "../assets/brands/Titan_Care.png"
import { ArrowRight } from "lucide-react";
import Catalogue1 from "../assets/pdfs/Titan_Care_Catalogue.pdf"
import Catalogue1img from "../assets/brands/Titan_Care_Catalogueimg.jpg"

const TitanCarePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4   ">

        <div className="text-center mb-5">
          <img
            src= {TitanCareimg}
            alt =""
            className="h-20 mx-auto bject-contain drop-shadow-lg"
            loading="lazy"      
          />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We are the only Authorised Service Centre for Titan Company Ltd. covering Titan, Fastrack, Sonata and Helios brands in Gwalior.
            </p>
        </div>

        <div className="flex justify-around gap-8 mb-10">
          {/* Card 1 */}
         <a target="_blank" href={Catalogue1}>
        <div className="group relative w-[350px] h-[400px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">

    <div
        className="w-[350px] h-[400px] bg-center bg-cover m-auto transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${Catalogue1img})` }}
      >
      </div>


    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
      <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-3 rounded-full shadow">
        <span className="text-xs font-medium">Leather Strap Catalogue</span>
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
               <li><b>Store 1 : </b>Ground floor, DB Mall, Opp. Railway Station, Gwalior(M.P.)</li>
               <li>0751-4924138, +91-9111006214</li>
               <li><b>Store 2 : </b>Opp. Chetakpuri Petrol Pump, Lashkar, Gwalior(M.P.)</li>
                <li>0751-4033491, +91-911100456</li>
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

export default TitanCarePage;
