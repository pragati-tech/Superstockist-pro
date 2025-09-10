  import Navigation from "@/components/Navigation";
  import Footer from "@/components/Footer";
  import { ArrowRight } from "lucide-react";
  import Havellsimg from "../assets/brands/Havells.png";
  import Catalogueimg from "../assets/brands/Havells_Catalogue1.jpg";
  import Catalogue2img from "../assets/brands/Havells_Catalogue2.jpg";
  import Catalogue1 from "../assets/pdfs/Havells_Catalogue1.pdf";
  import Catalogue2 from "../assets/pdfs/Havells_Catalogue2.pdf";
  import logo from "../assets/brands/nav_logo.png"

  const HavellsPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <Navigation />

        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <img
              src={Havellsimg}
              alt="Havells"
              className="h-16 sm:h-20 mx-auto object-contain drop-shadow-lg mb-3"
              loading="lazy"
            />

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Since 2014, we have managed the distribution of Havells appliances
              in Gwalior city and upcountry towns, reaching a network of over 200
              retailers.
            </p>
            <p className="text-xs sm:text-sm font-medium text-gray-400 mt-2">
              For Enquiry, kindly contact : +91-9111005823, 9111004059
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10">
            {/* Card 1 */}
            <a target="_blank" href={Catalogue1} rel="noopener noreferrer">
              <div className="group relative w-full max-w-sm mx-auto h-[380px] sm:h-[420px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
                {/* Image */}
                <div
                  className="w-full h-full bg-top bg-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${Catalogueimg})` }}
                ></div>

                {/* Hover label (desktop only) */}
                <div className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow">
                    <span className="text-xs font-medium">Home Appliances</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>

                {/* Always visible label on mobile */}
                <div className="flex sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2">
                  <div className="bg-white/90 px-3 py-2 rounded-full text-xs font-medium shadow">
                    Home Appliances
                  </div>
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <a target="_blank" href={Catalogue2} rel="noopener noreferrer">
              <div className="group relative w-full max-w-sm mx-auto h-[380px] sm:h-[420px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
                {/* Image */}
                <div
                  className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${Catalogue2img})` }}
                ></div>

                {/* Hover label (desktop only) */}
                <div className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow">
                    <span className="text-xs font-medium">Personal Grooming</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>

                {/* Always visible label on mobile */}
                <div className="flex sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2">
                  <div className="bg-white/90 px-3 py-2 rounded-full text-xs font-medium shadow">
                    Personal Grooming
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
              <p className="text-center text-gray-400 w-full sm:w-3/4">
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
                    <b>Head Office : </b>3rd Floor, Rukmani Mansion, Sarafa Bazaar,
                    <br /> Lashkar, Gwalior-474001
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

  export default HavellsPage;
