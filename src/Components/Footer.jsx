import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logo from "../assets/Webx-nav-Logo_03.jpg"; // Make sure to have this image in your assets folder

export default function Footer() {
  return (
    <footer className="bg-white px-18.75 pt-22.5 pb-5 text-sm max-[413px]:px-4 max-[413px]:pt-10 max-[413px]:pb-3">
      <div className="grid md:grid-cols-3 gap-10 mb-20 max-[413px]:gap-6 max-[413px]:mb-4">
        {/* Left Section */}
        <div>
          <Link to="/">
            <img
              src={logo}
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
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/career">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section - Unique CTA Card */}
        <div className="flex justify-end max-[1024px]:justify-start">
          <Link
            to="/contact#contact-form"
            className="bg-[#345261]/5 p-8 rounded-[32px] border border-[#345261]/10 max-w-[340px] relative overflow-hidden group block transition-all duration-500 hover:-translate-y-1"
          >
            {/* Animated Background Accent */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#345261]/10 rounded-full group-hover:scale-[2.5] transition-transform duration-1000 ease-in-out"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-[#345261]/5 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>

            <div className="relative z-10">
              <h3 className="font-montserrat font-bold text-[24px] leading-[1.2] text-[#345261] mb-4">
                Have a project in mind?
              </h3>
              <p className="text-gray-500 font-montserrat text-[14px] leading-relaxed mb-8">
                Connect with our experts to turn your digital vision into a reality with expert digital products.
              </p>

              <div
                className="inline-flex items-center gap-3 bg-[#395563] text-white px-8 py-4 rounded-[10px] font-bold text-[12px] group-hover:bg-[#2a3d45] transition-all duration-500 group/btn"
              >
                GET IN TOUCH
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>





      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center py-5 text-gray-400 text-xs max-[413px]:py-3 max-[413px]:gap-2 max-[413px]:text-center">
        <p className="font-montserrat text-[16px] leading-[24px] text-[#6B6A66] max-[413px]:text-[14px] max-[413px]:leading-[20px] max-[413px]:order-2">
          Copyright © {new Date().getFullYear()} Spangles Webx Pvt Ltd. All Rights Reserved.
        </p>

        <div className="flex gap-4 mt-3 md:mt-0 max-[413px]:flex-col max-[413px]:gap-2 max-[413px]:order-1 max-[413px]:items-center">
          <div className="flex gap-4 max-[413px]:gap-2">
            <Link
              to="/privacy"
              className="font-montserrat font-semibold text-[16px] leading-[100%] text-[#00000078] hover:text-[#345261] transition-colors"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              to="/terms"
              className="font-montserrat font-semibold text-[16px] leading-[100%] text-[#00000078] hover:text-[#345261] transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
