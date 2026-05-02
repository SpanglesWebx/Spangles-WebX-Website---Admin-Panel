import React, { useEffect } from "react";
import Support from "../About/Components/Support";
import bannerImg from "../../assets/Service-banner.jpg";

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#F4F7FA] min-h-screen font-montserrat">
      {/* Banner Section */}
      <div className="relative h-[360px] w-full max-[413px]:h-[300px]">
        <img
          src={bannerImg}
          alt="banner"
          className="w-full h-full object-cover object-center"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* text */}
        <div className="absolute inset-0 flex flex-col justify-end px-[100px] pb-25 text-white 
        max-[1024px]:px-10 max-[1024px]:pb-20 max-[768px]:px-6 max-[768px]:pb-16 max-[413px]:px-4 max-[413px]:pb-10 min-[1024px]:max-[1200px]:px-[72px]">
          <p className="font-[Montserrat] font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase text-white max-[413px]:text-[12px]">
            Home / Terms
          </p>
          <h1 className="font-montserrat font-semibold text-[54px] leading-[62px] text-white mt-2 
          max-[1024px]:text-[48px] max-[1024px]:leading-[56px] max-[768px]:text-[44px] max-[768px]:leading-[52px] max-[413px]:text-[28px] max-[413px]:leading-[32px]">
            Terms and Conditions
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full px-[100px] py-20 text-[#6B6A66] max-[1200px]:px-10 max-[768px]:px-6 max-[768px]:py-12 max-[413px]:px-4 max-[413px]:py-10">
        
        <div className="mb-12">
          <p className="text-[16px] font-bold text-[#345261] mb-6">Terms and Conditions updated on 01/09/2025</p>
          <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
            These Terms and Conditions govern the use of SPANGLES WEBX PRIVATE LIMITED website, services, and associated content. By accessing or using our website or services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, please discontinue use of our services immediately. "We," "Us," or "Our" refers to SPANGLES WEBX PRIVATE LIMITED. "You" "User" refers to the individual accessing or using our services or website. "Services" Includes all products, services, software, and content provided by SPANGLES WEBX PRIVATE LIMITED.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">Acceptance of Terms</h2>
            <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              By accessing or using our website or any of our services, you agree to these Terms and Conditions and consent to our privacy policy. You represent that you are at least 18 years of age or, if under 18, have the consent of a parent or legal guardian to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">Use of Services</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-[#345261] mb-3">Permitted Use</h3>
                <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
                  You may use our website and services for lawful purposes only and in compliance with all applicable laws and regulations.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-[#345261] mb-4">Prohibited Actions</h3>
                <ul className="list-disc pl-6 space-y-3 text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
                  <li>Upload or transmit any harmful code, viruses, or malware.</li>
                  <li>Engage in any fraudulent, abusive, or illegal activity.</li>
                  <li>Interfere with or disrupt the functioning of our services or the servers connected to our website.</li>
                  <li>Impersonate any person or entity or falsely represent your affiliation with a person or entity.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">User Accounts</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-[#345261] mb-3">Account Security</h3>
                <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
                  You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorised access or use of your account.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-[#345261] mb-3">Termination</h3>
                <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
                  We reserve the right to suspend or terminate accounts that are found in violation of these terms or for other reasons at our sole discretion.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">Intellectual Property</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-[#345261] mb-3">Ownership</h3>
                <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
                  All content on our website, including text, images, graphics, logos, and software is the property of SPANGLES WEBX PRIVATE LIMITED or our licensors and is protected by copyright, trademark, and other intellectual property laws.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-[#345261] mb-3">Limited License</h3>
                <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
                  We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our website and services solely for your personal, non-commercial use.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-[#345261] mb-3">Restrictions</h3>
                <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
                  You may not copy, modify, distribute, sell, or lease any part of our content or services without our prior written consent.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">Pricing and Payment</h2>
            <div>
              <h3 className="text-[20px] font-bold text-[#345261] mb-3">Service Fees</h3>
              <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
                Certain services or products may have associated fees, which will be outlined in our service agreements or invoices. All prices are subject to change without notice.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">Third-Party Links and Services</h2>
            <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              Our website and services may contain links to third-party websites or services. SPANGLES WEBX PRIVATE LIMITED is not responsible for the content, privacy policies, or practices of these external sites. Access to any third-party sites is at your own risk, and we encourage you to review their terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">Termination</h2>
            <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              SPANGLES WEBX PRIVATE LIMITED reserves the right to suspend or terminate your access to our website or services, with or without notice, for conduct that violates these terms, for any unlawful activity, or if we determine it is necessary for our operations or other users.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">Governing Law</h2>
            <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              These Terms and Conditions are governed by and construed in accordance with the laws of the State of Tamil Nadu, India, without regard to its conflict of law principles. Any legal action or procedures arising from or relating to these Terms will be brought exclusively in the courts.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">Changes to Terms and Conditions</h2>
            <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              SPANGLES WEBX PRIVATE LIMITED reserves the right to update or modify these Terms and Conditions at any time without prior notice. We will post the revised terms on our website, and the changes will take effect upon posting. Your continued use of our services constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">Entire Agreement</h2>
            <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              These Terms and Conditions constitute the entire agreement between you and SPANGLES WEBX PRIVATE LIMITED regarding your use of our website and services. They supersede any prior understandings, agreements, or representations, whether written or oral, related to the subject matter hereof. Any additional or different terms proposed by you are expressly rejected unless agreed upon in writing by SPANGLES WEBX PRIVATE LIMITED.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">Additional Assistance</h2>
            <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              If you do not understand any part of these Terms and Conditions or if you have questions, please feel free to contact us. Our Customer Service Department is available to assist you.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-100">
            <h2 className="text-[24px] font-bold text-[#345261] mb-4">Contact Info</h2>
            <div className="space-y-1 text-[20px] font-medium text-[#345261]">
              <p>Email : <a href="mailto:webxspangles@gmail.com" className="text-[#395563] font-normal hover:text-[#345261] transition-colors">webxspangles@gmail.com</a></p>
              <p>Phone : <a href="tel:+917708784111" className="text-[#395563] font-normal hover:text-[#345261] transition-colors">+91 7708784111</a></p>
            </div>
          </section>

          <section className="pt-6 border-t border-gray-100">
            <h2 className="text-[24px] font-bold text-[#345261] mb-4">Copyright Notice</h2>
            <div className="space-y-6 text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              <p>
                All website design, graphics, text selections, arrangements, and all software are the exclusive property of SPANGLES WEBX PRIVATE LIMITED or its licensors and are protected by copyright law.
              </p>
              <p className="font-bold text-[#345261] text-center pt-8">
                Copyright © {new Date().getFullYear()}, SPANGLES WEBX PRIVATE LIMITED. ALL RIGHTS RESERVED.
              </p>
            </div>
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
