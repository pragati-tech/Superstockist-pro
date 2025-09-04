import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";

// Distributor
import NestleImg from '../assets/brands/Nestle.png';
import ReoImg from '../assets/brands/Reo.png';
import HavellsImg from '../assets/brands/Havells.png';
import NestleProfImg from '../assets/brands/nestle_profer.png';

// Super Stockists
import TitanImg from '../assets/brands/Titan.png';
import SonataImg from '../assets/brands/Sonata.png';
import FastrackImg from '../assets/brands/Fastrack.png';
import PolycabImg from '../assets/brands/Polycab.png';
import Licensedimg from '../assets/brands/Licensed_Brands.png'

// Exclusive Stores
import TitanWorldImg from '../assets/brands/titan_world.png';
import HeliosImg from '../assets/brands/Helios.png';
import FastrackStoreImg from '../assets/brands/Fastrack_Store.png';
import NescafeKiosksImg from '../assets/brands/Nescafe.png';
import MiaImg from '../assets/brands/mia.png';
import TitanCare from "../assets/brands/Titan_Care.png"

const ClientsSection = () => {
  const businessCategories = [
    {
      title: "Distributor",
      gradient: "from-[#112438] via-[#0e1d2f] to-[#073f67]",
      bgGradient: "from-blue-50/80 via-indigo-50/60 to-cyan-50/80",
      shadowColor: "shadow-blue-500/20",
      brands: [
        { name: "NESTLE", img: NestleImg, description: "Since 1985", path: "/brands/nestle" },
        { name: "REO", img: ReoImg, description: "Since 2014", path: "/brands/reo" },
        { name: "Havells", img: HavellsImg, description: "Since 2014", path: "/brands/havells" },
        { name: "Nestle Professional", img: NestleProfImg, description: "Since 2018", path: "/brands/nestle-profer" },
      ]
    },
    {
      title: "Super Stockists",
      gradient: "from-[#112438] via-[#0e1d2f] to-[#073f67]",
      bgGradient: "from-blue-50/80 via-indigo-50/60 to-cyan-50/80",
      shadowColor: "shadow-blue-500/20",
      brands: [
        { name: "Titan", img: TitanImg, description: "Since 1995", path: "/brands/titan" },
        { name: "Sonata", img: SonataImg, description: "Since 1998", path: "/brands/sonata" },
        { name: "Fastrack", img: FastrackImg, description: "Since 1999", path: "/brands/fastrack" },
        { name: "Polycab", img: PolycabImg, description: "Since 2025", path: "/brands/polycab" },
        { name: "Licensed Brands", img: Licensedimg, description: "Since 2025", path: "/brands/License" }
      ]
    },  
    {
      title: "Exclusive Stores",
      gradient: "from-[#112438] via-[#0e1d2f] to-[#073f67]",
      bgGradient: "from-blue-50/80 via-indigo-50/60 to-cyan-50/80",
      shadowColor: "shadow-blue-500/20",  
      brands: [
        { name: "Titan World", img: TitanWorldImg, description: "Since 2008", path: "/brands/titan-world" },
        { name: "Helios", img: HeliosImg, description: "Since 2018", path: "/brands/helios" },
        { name: "Fastrack Store", img: FastrackStoreImg, description: "Since 2018", path: "/brands/fastrack-store" },
        { name: "Nescafe Kiosks", img: NescafeKiosksImg, description: "Since 2023", path: "/brands/nescafe-kiosks" },
        { name: "Mia by Tanishq", img: MiaImg, description: "Since 2024", path: "/brands/mia" },
        { name: "Titan Care", img:TitanCare, description: "Since 1995", path: "/brands/titan-care"}
      ]
    }
  ];

  return (
    <section id="section2" className="py-10 bg-white relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-business-400 to-business-600 rounded-full opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>  

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-business-100/80 to-business-200/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full text-business-700 text-xs sm:text-sm font-medium mb-3 sm:mb-4 shadow-lg border border-business-200/30">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-4 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="font-semibold">Premium Partnerships</span>
            <Star className="w-4 h-4" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            <span style={{ color: "rgba(14, 45, 80, 1)" }}>Trusted by</span>
            <span className="block mt-1 sm:mt-2 drop-shadow-sm mb-3 sm:mb-5">
              <span className="bg-gradient-to-r from-business-600 via-business-700 to-business-800 bg-clip-text text-transparent">
                Premium Brands
              </span>
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-4xl mx-auto leading-relaxed font-500" style={{color: "rgba(19, 44, 73, 0.63)"}}>
            We serve as authorized partners across three key business verticals, delivering excellence 
            in distribution and retail with <span className="font-semibold text-business-700" style={{color: "rgba(12, 73, 143, 1)"}}>unmatched commitment</span> to quality and service.
          </p>
        </div>

        {/* Business Categories */}
        <div>
          {businessCategories.map((category) => {
            const sectionId =
              category.title === "Distributor"
                ? "distributor-section"
                : category.title === "Super Stockists"
                ? "super-stockist-section"
                : "exclusive-stores-section";

            return (
              <div key={category.title} id={sectionId} className="relative group">
                <div className="text-center mb-5">
                  <div className={`inline-block bg-gradient-to-r ${category.gradient} text-white px-6 sm:px-8 py-2 rounded-lg sm:rounded-xl font-bold text-lg sm:text-2xl mb-2 shadow-xl ${category.shadowColor}`}>
                    <span className="flex items-center gap-2 sm:gap-3 justify-center">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                      {category.title}
                    </span>
                  </div>
                </div>

                {/* Brand Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-20">
                  {category.brands.map((brand) => (
                    <Link 
                      key={brand.name}
                      to={brand.path}
                      className="group/card cursor-pointer"
                    > 
                      <div className={`bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm rounded-2xl sm:rounded-3xl p-0 shadow-md sm:shadow-xl group-hover/card:shadow-2xl ${category.shadowColor} transition-all duration-700 border border-white/50 relative overflow-hidden h-40 sm:h-48`}>
                        
                        {/* Description */}
                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20">
                          <p className="text-[10px] sm:text-xs text-gray-600 bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md font-medium">
                            {brand.description}
                          </p>
                        </div>

                        {/* Image */}
                        <div className="relative z-10 h-full flex items-center justify-center p-8 sm:p-12 md:p-16">
                          <img
                            src={brand.img}
                            alt={brand.name}
                            className="max-h-16 sm:max-h-20 md:max-h-24 w-auto object-contain drop-shadow-lg mx-auto"
                            loading="lazy"
                          />
                        </div>

                        {/* Explore button */}
                        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 sm:opacity-0 sm:group-hover/card:opacity-100 transition-all duration-500 sm:translate-y-4 sm:group-hover/card:translate-y-0 z-20">
                          <div className="flex items-center gap-1 sm:gap-2 text-[11px] sm:text-xs md:text-sm text-gray-600 bg-white/90 px-2 sm:px-3 py-1 rounded-full shadow">
                            <span className="font-medium">Explore</span>
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ); 
          })}
        </div>

        {/* Footer Stats */}
        <div className="bg-gradient-to-r from-white/90 via-business-50/90 to-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/60 shadow-2xl relative">
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-business-100/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full text-business-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Partnership Excellence</span>
            </div>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-business-800 mb-6 sm:mb-8">
              Comprehensive Solutions Across 
              <span className="block text-business-600 mt-1 sm:mt-2">Diverse Market Segments</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mt-8 sm:mt-16">
              {[
                { number: "15+", label: "Premium Brands" },
                { number: "3", label: "Business Verticals" },
                { number: "100%", label: "Customer Satisfaction" }
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3" style={{ color: "rgba(14, 45, 80, 1)" }}>
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold tracking-wide" style={{ color: "rgba(14, 45, 80, 1)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
