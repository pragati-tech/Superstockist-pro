import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Reoimg from "../assets/brands/Reo.png";
import Catalogue1 from "../assets/pdfs/Reo_Catalogue1.pdf";
import Catalogue2 from "../assets/pdfs/Reo_Catalogue2.pdf";
import Catalogue1img from "../assets/brands/Reo_Catalogue1.jpg";
import Catalogue2img from "../assets/brands/Reo_Catalogue2.jpg";

const ReoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <img
            src={Reoimg}
            alt="Reo"
            className="h-16 sm:h-20 mx-auto object-contain drop-shadow-lg mb-3"
            loading="lazy"
          />
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Since 2014, we have been distributors of Havells Reo, which includes
            a wide range of wires, MCBs, switches and fans.
          </p>
          <p className="text-xs sm:text-sm font-medium text-gray-400 mt-2">
            For Enquiry, kindly contact : +91-8889513888, 9111004059
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10">
          {/* Card 1 */}
          <a target="_blank" href={Catalogue1} rel="noopener noreferrer">
            <div className="group relative w-full max-w-sm mx-auto h-[380px] sm:h-[420px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
              {/* Image */}
              <div
                className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${Catalogue1img})` }}
              ></div>

              {/* Hover label (desktop only) */}
              <div className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow">
                  <span className="text-xs font-medium">Range Catalogue 2025</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
              {/* Always visible label on mobile */}
              <div className="flex sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="bg-white/90 px-3 py-2 rounded-full text-xs font-medium shadow">
                  Range Catalogue 2025
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
                  <span className="text-xs font-medium">Marval RDP 2025</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
              {/* Always visible label on mobile */}
              <div className="flex sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="bg-white/90 px-3 py-2 rounded-full text-xs font-medium shadow">
                  Marval RDP 2025
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReoPage;
    