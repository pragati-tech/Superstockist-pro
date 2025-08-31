import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import Fastrackimg from "../assets/brands/Fastrack.png";
import Fastrack_Catalogue from "../assets/pdfs/Fastrack_Catalogue1.pdf"
import Fastrack_Catalogue1img from "../assets/brands/Fastrack_Catalogue1img.jpg"
import Fastrack_Catalogue2 from "../assets/pdfs/Fastrack_Catalogue2.pdf"
import Fastrack_Catalogue2img from "../assets/brands/Fastrack_Catalogue2img.jpg"
import Fastrack_Catalogue3 from "../assets/pdfs/Fastrack_Catalogue3.pdf";
import Fastrack_Catalogue3img from "../assets/brands/Fastrack_Catalogue3img.jpg"
import ImageCarousel from "@/components/ImageCarousal";
import { ArrowRight } from "lucide-react";

const FastrackPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-5">
          <img
            src={Fastrackimg}
            alt=""
            className="h-20 mx-auto object-contain drop-shadow-lg"
            loading="lazy"
          />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We have been the ditributors of Fastrack since 1999, providing services to multi-brand outlets in the Gwalior division. Over 50 dealers are being covered in districts like Shivpuri, Datia, Bhind, Morena, Chattarpur and Guna.  
          </p>
          <p className="text-s font-medium text-gray-400">For Enquiry, kindly contact : +91-9111004080</p>
        </div>

                <div className="flex justify-around gap-8 mb-10">
          {/* Card 1 */}
          <a target="_blank" href={Fastrack_Catalogue}>
        <div className="group relative w-[350px] h-[400px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">

    <div
        className="w-[350px] h-[400px] bg-top bg-cover m-auto transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${Fastrack_Catalogue1img})` }}
      >
      </div>


    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
      <div className="flex items-center justify-between text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-3 rounded-full shadow">
        <span className="text-xs font-medium">Analog Watch Catalogue</span>
        <ArrowRight className="w-3 h-3" />
      </div>
    </div>
  </div>
</a>
{/* Card 2 */}
          <a target="_blank" href={Fastrack_Catalogue2}>
        <div className="group relative w-[350px] h-[400px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">

    <div
        className="w-[350px] h-[400px] bg-left bg-cover m-auto transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${Fastrack_Catalogue2img})` }}
      >
      </div>


    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
      <div className="flex items-center justify-between text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-3 rounded-full shadow">
        <span className="text-xs font-medium">VYB Catalogue</span>
        <ArrowRight className="w-3 h-3" />
      </div>
    </div>
  </div>
</a>
{/* Card 3 */}
<a target="_blank" href={Fastrack_Catalogue3}>
        <div className="group relative w-[350px] h-[400px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">

    <div
        className="w-[350px] h-[320px] bg-center bg-cover m-auto transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${Fastrack_Catalogue3img})` }}
      >
      </div>


    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
      <div className="flex items-center justify-between text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-3 rounded-full shadow">
        <span className="text-xs font-medium">Smart Watch Catalogue</span>
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

export default FastrackPage;
