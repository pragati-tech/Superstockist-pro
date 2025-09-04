import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Star, Users } from "lucide-react";
import AnneKleinimg from "../assets/brands/Anne_KleinPageimg.png"
import { ArrowRight } from "lucide-react";
import Catalogue1 from "../assets/pdfs/AK_Catalogue1.pdf"
import Catalogue1img from "../assets/brands/AK_Catalogue1img.jpg"
import Catalogue2 from "../assets/pdfs/AK_Catalogue2.pdf"
import Catalogue2img from "../assets/brands/AK_Catalogue2img.jpg"
import Catalogue3 from "../assets/pdfs/AK_Catalogue3.pdf"
import Catalogue3img from "../assets/brands/AK_Catalogue3img.jpg"

const AnneKleinPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-5">
          <img
            src= {AnneKleinimg}
            alt =""
            className="h-20 mx-auto bject-contain drop-shadow-lg mb-2"
            loading="lazy"
          />
          {/* <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We have been the ditributors of Sonata since 1998, providing services to multi-brand outlets in the Gwalior division. Over 50 dealers are being covered in districts like Shivpuri, Datia, Bhind, Morena, Chattarpur and Guna.  
          </p>
          <p className="text-s font-medium text-gray-400">For Enquiry, kindly contact : +91-9111004080</p> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
  {/* Card 1 */}
  <a target="_blank" href={Catalogue1}>
    <div className="group relative w-full h-[450px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
      <div
        className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${Catalogue1img})` }}
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-3 rounded-full shadow">
          <span className="text-xs font-medium">Summer Catalogue</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  </a>

  {/* Card 2 */}
  <a target="_blank" href={Catalogue2}>
    <div className="group relative w-full h-[450px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
      <div
        className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${Catalogue2img})` }}
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-3 rounded-full shadow">
          <span className="text-xs font-medium">Oct'24 Catalogue</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  </a>

  {/* Card 3 */}
  <a target="_blank" href={Catalogue3}>
    <div className="group relative w-full h-[450px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
      <div
        className="w-full h-full bg-left bg-cover transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${Catalogue3img})` }}
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-3 rounded-full shadow">
          <span className="text-xs font-medium">Feb'25 Catalogue</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  </a>
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
          <div className="grid md:grid-cols-2 gap-9 text-center">
            
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

export default AnneKleinPage;
