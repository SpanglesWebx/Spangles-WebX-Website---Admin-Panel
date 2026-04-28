import React, { useEffect } from "react";
import Support from "../About/Components/Support";

export default function Privacy() {
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
          Privacy Policy
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full px-[100px] py-20 text-[#6B6A66] max-[1200px]:px-10 max-[768px]:px-6 max-[768px]:py-12 max-[413px]:px-4 max-[413px]:py-10">
        <p className="text-[20px] leading-[1.3] font-normal text-[#6B6A66] mb-12 max-[768px]:text-[18px] max-[413px]:text-[16px] max-[413px]:mb-8">
          At Spangles Infotech, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you interact with our website.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-[24px] leading-[100%] font-semibold text-[#345261] mb-4">Information We Collect</h2>
            <p className="text-[20px] leading-[1.5] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              We may collect personal details such as your name, email address, and other contact information when you submit inquiries or requests through our website.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] leading-[100%] font-semibold text-[#345261] mb-4">How We Use Your Information</h2>
            <p className="text-[20px] leading-[1.5] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              We use the collected data to respond to your inquiries, provide services, and improve our website's functionality. Your information will not be sold, shared, or disclosed to third parties unless required by law.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] leading-[100%] font-semibold text-[#345261] mb-4">Cookies</h2>
            <p className="text-[20px] leading-[1.5] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              Our website uses cookies to enhance user experience and analyze website traffic. You can disable cookies through your browser settings, which may affect site performance.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] leading-[100%] font-semibold text-[#345261] mb-4">Data Security</h2>
            <p className="text-[20px] leading-[1.5] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              We implement strict security measures to protect your data from unauthorized access or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] leading-[100%] font-semibold text-[#345261] mb-4">Your Right</h2>
            <p className="text-[20px] leading-[1.5] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              You have the right to access, update, or request the deletion of your personal information any time. Please feel free to contact us for help.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] leading-[100%] font-semibold text-[#345261] mb-4">Changes to This Policy</h2>
            <p className="text-[20px] leading-[1.5] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              We reserve the right to update this privacy policy as needed. Changes will be posted on this page.
            </p>
          </section>
        </div>
      </div>

      {/* Support Section */}
      <div className="-mb-[40px] relative z-10 max-xl:-mt-9 max-lg:-mt-8 max-md:-mt-7 max-sm:-mt-6 max-[413px]:-mt-6 max-[413px]:-mb-[20px]">
        <Support />
      </div>
    </div>
  );
}
