import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import logo25 from "../../../assets/Webx-nav-Logo_03.jpg"; // Make sure to have this image in your assets folder

export default function Footer() {
  return (
    <footer className="bg-white px-18.75 pt-22.5 pt-[270px] pb-5 text-sm max-[413px]:px-4 max-[413px]:pt-10 max-[413px]:pt-[60px] max-[413px]:pb-3">
      <div className="grid md:grid-cols-3 gap-10 mb-20 max-[413px]:gap-6 max-[413px]:mb-4">
        {/* Left Section */}
        <div>
          <Link to="/">
            <img
              src={logo25}
              alt="Spanglez Webx"
              className="h-[40px] w-auto object-contain mb-4 max-[413px]:h-[36px] max-[413px]:mb-3"
            />
          </Link>
          <p className="font-montserrat text-[16px] leading-[24px] text-[#6B6A66] max-w-xs">
            We are the best world Information Technology Company. Providing the
            highest quality in hardware, Software & Network solutions.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="font-montserrat font-semibold text-[18px] leading-[21.6px] text-[#345261] mb-7.5">
            Quick Links
          </h3>

          <div className="grid grid-cols-2 gap-6 text-[#161C2D] font-montserrat text-[16px] leading-[100%]">
            <ul className="space-y-[30px] max-[413px]:space-y-[18px]">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
            </ul>

            <ul className="space-y-[30px] max-[413px]:space-y-[18px]">
              <li>
                <Link to="/career">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="ml-auto text-left max-[413px]:ml-0">
          <h3 className="font-montserrat font-semibold text-[18px] leading-[21.6px] text-[#345261] mb-7.5 max-[413px]:mb-4">
            News Letter
          </h3>
          <p className="font-montserrat text-[16px] leading-[24px] text-[#161C2D] mb-5 max-w-xs max-[413px]:mb-4">
            Sign up today for hints, tips and the latest product news
          </p>

          <div className="relative max-w-xs">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md py-4 pl-5 pr-12 
             font-montserrat text-[14px] leading-[100%] 
             placeholder:text-[#677289] placeholder:font-normal 
             focus:outline-none max-[413px]:py-3 max-[413px]:pl-4 max-[413px]:pr-10"
            />
            <button className="absolute right-1 top-1 bg-[#345261] hover:bg-[#2c434f] text-white p-3 rounded-md transition">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center py-5 text-gray-400 text-xs max-[413px]:py-3 max-[413px]:gap-2 max-[413px]:text-center">
        <p className="font-montserrat text-[16px] leading-[24px] text-[#6B6A66] max-[413px]:text-[14px] max-[413px]:leading-[20px] max-[413px]:order-2">
          Copyright © 2021 Spangles Webx. All Rights Reserved.
        </p>

        <div className="flex gap-4 mt-3 md:mt-0 max-[413px]:flex-col max-[413px]:gap-2 max-[413px]:order-1 max-[413px]:items-center">
          <div className="flex gap-4 max-[413px]:gap-2">
            <Link
              to="/privacy"
              className="font-montserrat font-semibold text-[16px] leading-[100%] text-[#00000078]"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              to="/terms"
              className="font-montserrat font-semibold text-[16px] leading-[100%] text-[#00000078]"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
