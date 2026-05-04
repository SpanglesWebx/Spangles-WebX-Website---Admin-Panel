import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
const logo = "/Web-Support.jpg"; // Reference public assets as absolute strings, not imports

export default function SupportBar() {
  return (
    <div className="px-[75px] max-[1440px]:px-12 max-[1280px]:px-8 max-[1024px]:px-6 mb-1 max-[768px]:px-4 max-[413px]:px-0 max-[413px]:flex max-[413px]:justify-center">
      <div className="bg-white rounded-[14px] shadow-[0px_0px_20px_2px_#00000012] px-[75px] max-[1440px]:px-10 max-[1280px]:px-8 pt-[37px] pb-[45px] flex items-center justify-between max-[1024px]:flex-wrap max-[1024px]:justify-center max-[1024px]:gap-x-12 max-[1024px]:gap-y-10 max-[1024px]:px-6 max-[768px]:px-4 max-[413px]:px-[28px] max-[413px]:flex-col max-[413px]:gap-[25px] max-[413px]:max-w-[360px] max-[413px]:w-full">
        {/* Logo */}

        <div className="flex items-center justify-center max-[1024px]:w-full max-[1024px]:justify-center max-[413px]:justify-start max-[413px]:items-center">
          <Link to="/" className="cursor-pointer">
            <img
              src={logo}
              alt="Spanglez Webx"
              className="h-[100px] w-[200px] object-contain max-[413px]:h-[46px]"
            />
          </Link>
        </div>


        {/* Divider (Desktop only) */}
        {/* <div className="h-[100px] w-[1px] bg-gray-200 max-[767px]:hidden max-[1200px]:hidden"></div> */}

        {/* Call for support */}
        <div className="text-start max-[1024px]:text-center max-[413px]:w-full">
          <p className="font-bold text-[14px] mb-4 leading-[15.6px] tracking-[0] align-middle uppercase text-[#34515F]">
            CALL FOR SUPPORT
          </p>
          <a
            href="tel:+917708784111"
            className="block mt-1 font-montserrat font-normal text-[16px] leading-[36px] tracking-[0] align-middle uppercase text-[#EE6196] max-[413px]:text-[14px] max-[413px]:leading-[26px]"
          >
            +91 7708784111
          </a>
          <a
            href="mailto:webxspangles@gmail.com"
            className="font-montserrat font-normal text-[16px] leading-[18px] tracking-[0] 
  align-middle text-[#6B6A66] max-[413px]:text-[14px]"
          >
            webxspangles@gmail.com
          </a>

        </div>

        {/* Divider */}
        <div className="h-[100px] w-[1px] bg-gray-200 max-[1024px]:hidden max-[767px]:hidden max-[413px]:hidden max-[413px]:h-[1px] max-[413px]:w-full"></div>

        {/* Address */}
        <div className="max-[1024px]:text-center max-[413px]:w-full">
          <p className="font-bold text-[14px] mb-4 leading-[15.6px] tracking-[0] align-middle uppercase text-[#34515F]">
            ADDRESS
          </p>
          <p className="mt-1 font-montserrat font-normal text-[16px] leading-[24px] tracking-[0] align-middle text-[#6B6A66] max-[413px]:text-[14px] max-[413px]:leading-[20px]">
            7-15C, 1st Floor, Puthuval Vilai, Kattathurai,
            <br />
            Kattathurai POST, Tamil Nadu - 629158
          </p>
        </div>

        {/* Divider (mobile) */}
        <div className="hidden max-[413px]:hidden h-[1px] w-full bg-gray-200" />

        {/* Follow */}
        <div className="max-[1024px]:text-center max-[413px]:w-full">
          <p className="mb-4 font-bold text-[14px] leading-[15.6px] tracking-[0] align-middle uppercase text-[#34515F]">
            FOLLOW US
          </p>

          <div className="flex max-[1024px]:justify-center max-[413px]:gap-[12px]">
            <div className="p-[10px] rounded-[10px] cursor-pointer max-[413px]:p-[9px]">
              <FaFacebookF className="text-[#B3BDD1] text-[18px] hover:text-[#345261] transition max-[413px]:text-[14px]" />
            </div>

            <div className="p-[10px] rounded-[10px] cursor-pointer max-[413px]:p-[9px]">
              <FaTwitter className="text-[#B3BDD1] text-[18px] hover:text-[#345261] transition max-[413px]:text-[14px]" />
            </div>

            <div className=" p-[10px] rounded-[10px] cursor-pointer max-[413px]:p-[9px]">
              <FaLinkedinIn className="text-[#B3BDD1] text-[18px] hover:text-[#345261] transition max-[413px]:text-[14px]" />
            </div>

            <div className=" p-[10px] rounded-[10px] cursor-pointer max-[413px]:p-[9px]">
              <FaInstagram className="text-[#B3BDD1] text-[18px] hover:text-[#345261] transition max-[413px]:text-[14px]" />
            </div>

            <div className=" p-[10px] rounded-[10px] cursor-pointer max-[413px]:p-[9px]">
              <FaYoutube className="text-[#B3BDD1] text-[18px] hover:text-[#345261] transition max-[413px]:text-[14px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
