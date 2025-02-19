import React from "react";
import logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import LinkedIn from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
const Footer:React.FC = () => {
  return (
    <div>
    <footer className="bg-[#FCF2E5] w-full md:h-[400px] h-full">
        {/* Logo Section */}
        <div className=" mx-auto px-5 max-w-6xl">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <img src={logo} alt="Logo" className="w-15 h-15" />
            
          </div>

          {/* Navigation Sections */}
          <div className="flex flex-wrap justify-around space-y-8 md:space-y-0">
            {/* About Us Section */}
            <div className="w-full md:w-1/4">
              <h2 className="text-[30px] font-semibold text-[#12122D] mb-4 text-center md:text-left">
               Quick Links
              </h2>
              <ul className="space-y-3 text-center md:text-left">
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F] hover:text-[#13274F] transition duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F] hover:text-[#13274F] transition duration-200"
                  >
                   About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F] hover:text-[#13274F] transition duration-200"
                  >
                   WishList
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F] hover:text-[#13274F] transition duration-200"
                  >
                   Adpot
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F] hover:text-[#13274F] transition duration-200"
                  >
                   Donate
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F] hover:text-[#13274F] transition duration-200"
                  >
                   Resources
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F] hover:text-[#13274F] transition duration-200"
                  >
                   Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div className="w-full md:w-1/4">
              <h2 className="text-[30px] font-semibold  mb-4 text-center md:text-left">
              Contact Info
              </h2>
              <ul className="space-y-5 text-center md:text-left">
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F]  hover:text-blue transition duration-200"
                  >
                   Phone Number:908-915-6258
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F]  hover:text-blue transition duration-200"
                  >
                    Email:Bryan11@hotmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#2F2F2F]  hover:text-blue transition duration-200"
                  >
                   Address :849 E 8th Street, South Lornaside 53820-7681
                  </a>
                </li>
                
                
                
              </ul>
            </div>

           

            {/* Stay Connected Section */}
            <div className="w-full md:w-1/4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center md:text-left">
                Stay Connected
              </h2>
              <div className="flex justify-center md:justify-start space-x-5">
                <a href="#">
                  <img
                    src={facebook}
                    alt="Facebook"
                    className="w-5 h-5 hover:opacity-75 transition duration-200"
                  />
                </a>
                <a href="#">
                  <img
                    src={LinkedIn}
                    alt="LinkedIn"
                    className="w-5 h-5 hover:opacity-75 transition duration-200"
                  />
                </a>
                <a href="#">
                  <img
                    src={twitter}
                    alt="Twitter"
                    className="w-5 h-5 hover:opacity-75 transition duration-200"
                  />
                </a>
                <a href="#">
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="w-5 h-5 hover:opacity-75 transition duration-200"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;