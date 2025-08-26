
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ImageCarousel from "@/components/ImageCarousal";
import { Link } from "react-router-dom";
import { ArrowLeft, Coffee, MapPin, Clock } from "lucide-react";
import Nescafeimg from "../assets/brands/Nescafe.png"
import { ArrowRight } from "lucide-react";
import Store1a from "../assets/brands/Nescafe_Store1a.jpeg"
import Store1b from "../assets/brands/Nescafe_Store1b.jpeg"
import Store1c from "../assets/brands/Nescafe_Store1c.jpeg"
import Store2a from "../assets/brands/Nescafe_Store2a.jpeg"
import Store2b from "../assets/brands/Nescafe_Store2b.jpeg"
import Store3a from "../assets/brands/Nescafe_Store3a.jpeg"
import Store3b from "../assets/brands/Nescafe_Store3b.jpeg"
import Store3c from "../assets/brands/Nescafe_Store3c.jpeg"

const NescafeKiosksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-5">
          <img
            src= {Nescafeimg}
            alt =""
            className="h-20 mx-auto bject-contain drop-shadow-lg mb-2"
            loading="lazy"
          />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We started the Nescafe Kiosks in 2023, operating within the universities and hospitals in Gwalior. We now manage around 5 kisoks across the city.
          </p>
        </div>

          <div className="flex justify-around gap-8 mb-10 flex-wrap">
          {/* Card 1 */}
         
         <div className="group relative w-[400px] h-auto rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
            <ImageCarousel images={[Store1a, Store1b, Store1c]} />
            <div className="w-full text-center py-3 bg-white/80 backdrop-blur-sm border-t border-gray-200">
              <span className="text-sm font-medium text-gray-700">ITM University Jhansi Rd, Turari, Gwalior, Lakhnotikhurd, Madhya Pradesh</span><br/>
              <span className="text-sm font-medium text-gray-700">474001</span>
            </div>
          </div>

  
          {/* Card 2 */}
           <div className="group relative w-[400px] h-auto rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
            <ImageCarousel images={[Store2a, Store2b]} />
            <div className="w-full text-center py-3 bg-white/80 backdrop-blur-sm border-t border-gray-200">
              <span className="text-sm font-medium text-gray-700">Amity University opposite Airport, Maharajpura, Gwalior, Madhya Pradesh</span><br/>
              <span className="text-sm font-medium text-gray-700">474005</span>
            </div>
          </div>

          {/* Card 3 */}
           <div className="group relative w-[400px] h-auto rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
            <ImageCarousel images={[Store3a, Store3b, Store3c]} />
            <div className="w-full text-center py-3 bg-white/80 backdrop-blur-sm border-t border-gray-200">
              <span className="text-sm font-medium text-gray-700">IIITM University Morena Rd, IIITM Campus, Gwalior , Madhya Pradesh</span><br/>
              <span className="text-sm font-medium text-gray-700">474015</span>
            </div>
          </div>

          {/* Card 4 Need to change images*/}
          <div className="group relative w-[400px] h-auto rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
            <ImageCarousel images={[Store3a, Store3b, Store3c]} />
            <div className="w-full text-center py-3 bg-white/80 backdrop-blur-sm border-t border-gray-200">
              <span className="text-sm font-medium text-gray-700">5566+34J, Plot No.1, Green South Avenue ShivpuriLink Road, Gwalior, Madhya Pradesh</span><br/>
              <span className="text-sm font-medium text-gray-700">474015</span>
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

export default NescafeKiosksPage;
