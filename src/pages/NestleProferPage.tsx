import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Nestleimg from "../assets/brands/nestle_profer.png";
import Catalogueimg from "../assets/brands/Nestle_Catalogue.jpg";
import Catalogue1 from "../assets/pdfs/Nestle_Catalogue.pdf";

const NestleProferPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Heading */}
        <div className="text-center mb-5">
          <img
            src={Nestleimg}
            alt="Nestle Professional"
            className="h-20 mx-auto object-contain drop-shadow-lg mb-2"
            loading="lazy"
          />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We have been a Nestle Professional distributor since 2018, providing
            coffee vending machines and services to hotels, restaurants, and
            colleges in the Gwalior region. We have also established kiosks at
            multiple locations within the area.
          </p>
          <p className="text-sm font-medium text-gray-400">
            For Enquiry, kindly contact : +91-9111004059, 9111005821
          </p>
        </div>

        {/* Catalogue Card */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
          <a target="_blank" href={Catalogue1} className="group">
            <div className="relative w-full sm:w-[350px] h-[400px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div
                className="w-full h-full bg-center bg-contain bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${Catalogueimg})` }}
              ></div>

              {/* Hover/Active Label */}
              <div
                className="
                  absolute bottom-4 left-1/2 -translate-x-1/2
                  opacity-0 sm:group-hover:opacity-100 sm:translate-y-0
                  translate-y-4
                  active:opacity-100
                  transition-all duration-500
                "
              >
                <div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-3 rounded-full shadow">
                  <span className="text-xs font-medium">
                    NP Product Catalogue
                  </span>
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
              <div className="w-8 h-8 business-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-3xl font-bold">SuperStock Pro</span>
            </div>
            <p className="text-center text-gray-400 w-full max-w-lg">
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
                  <a
                    href="#section2"
                    className="hover:text-white transition-colors"
                  >
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
                  Bazaar,
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
            <p>&copy; 2025 SuperStock Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NestleProferPage;
