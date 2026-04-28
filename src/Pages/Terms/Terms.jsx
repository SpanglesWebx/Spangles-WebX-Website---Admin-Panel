import React, { useEffect } from "react";
import Support from "../About/Components/Support";

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#F4F7FA] min-h-screen font-montserrat">
      {/* Header Section */}
      <div className="bg-white py-16 px-6 text-center border-b border-gray-100 max-[768px]:py-10 max-[413px]:py-8">
        <p className="text-[14px] font-bold tracking-[2.24px] leading-[21px] text-[#395563] uppercase mb-2 max-[413px]:text-[12px]">
          SPANGLES WEBX
        </p>
        <h1 className="text-[46px] font-semibold leading-[52.36px] tracking-[0px] text-[#395563] max-[768px]:text-[36px] max-[768px]:leading-[42px] max-[413px]:text-[26px] max-[413px]:leading-[32px]">
          Terms and Conditions
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full px-[100px] py-20 text-[#6B6A66] max-[1200px]:px-10 max-[768px]:px-6 max-[768px]:py-12 max-[413px]:px-4 max-[413px]:py-10">
        <p className="text-[20px] leading-[1.3] font-normal text-[#6B6A66] mb-12 max-[768px]:text-[18px] max-[413px]:text-[16px] max-[413px]:mb-8">
          Welcome to the Spangles Infotech website. By accessing and using our website, you agree to the following terms and conditions.
        </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-[24px] leading-[100%] font-semibold text-[#345261] mb-4">Use of Website</h2>
              <p className="text-[20px] leading-[1.5] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
                You agree to use this website for lawful purposes only. Unauthorized use of the website, including any attempt to compromise its security, is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] leading-[100%] font-semibold text-[#345261] mb-4">Intellectual Property</h2>
              <p className="text-[20px] leading-[1.5] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
                All content on this website, including text, graphics, logos, and images, is the property of Spangles Infotech and is protected by copyright laws. You may not reproduce, distribute, or use any content without our permission.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] leading-[100%] font-semibold text-[#345261] mb-4">Service Terms</h2>
              <p className="text-[20px] leading-[1.5] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
                Any services provided by Spangles Infotech are subject to separate agreements and terms. The website content does not guarantee the availability or specific details of our services.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] leading-[100%] font-semibold text-[#345261] mb-4">Liability Disclaimer</h2>
              <p className="text-[20px] leading-[1.5] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
                While we strive to provide accurate and up-to-date information, Spangles Infotech does not guarantee the completeness or accuracy of the website content. We are not liable for any errors, omissions, or any losses arising from the use of our website.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] leading-[100%] font-semibold text-[#345261] mb-4">Third-Party Links</h2>
              <p className="text-[20px] leading-[1.5] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
                Our website may contain links to third-party websites. We are not responsible for the content or practices of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] leading-[100%] font-semibold text-[#345261] mb-4">Changes to Terms</h2>
              <p className="text-[20px] leading-[1.5] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
                We reserve the right to modify these terms at any time. Changes will be posted on this page.
              </p>
            </section>

            <p className="text-[16px] font-semibold text-[#395563] pt-6">
              By continuing to use our website, you acknowledge and accept these terms.
            </p>
          </div>
      </div>

      {/* Support Section */}
          <div className="-mb-[40px] relative z-10 max-xl:-mt-9 max-lg:-mt-8 max-md:-mt-7 max-sm:-mt-6 max-[413px]:-mt-6 max-[413px]:-mb-[20px]">
              <Support />
            </div>
    </div>
  );
}
