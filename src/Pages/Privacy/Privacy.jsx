import React, { useEffect } from "react";
import Support from "../About/Components/Support";
import bannerImg from "../../assets/portfolio-banner.jpg";

export default function Privacy() {
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
            Home / Privacy
          </p>
          <h1 className="font-montserrat font-semibold text-[54px] leading-[62px] text-white mt-2 
          max-[1024px]:text-[48px] max-[1024px]:leading-[56px] max-[768px]:text-[44px] max-[768px]:leading-[52px] max-[413px]:text-[28px] max-[413px]:leading-[32px]">
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full px-[100px] py-20 text-[#6B6A66] max-[1200px]:px-10 max-[768px]:px-6 max-[768px]:py-12 max-[413px]:px-4 max-[413px]:py-10">
        
        <div className="mb-12">
          <p className="text-[16px] font-bold text-[#345261] mb-6">Privacy Policy updated on 01/09/2025</p>
          <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
            At SPANGLES WEBX PRIVATE LIMITED, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you interact with our website.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">Information We Collect</h2>
            <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] mb-6">
              We collect information to better serve our clients, improve our services, and enhance user experience. The information collected may include:
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-[#345261] mb-3">Personal Information</h3>
                <ul className="space-y-3 text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
                  <li><strong>Contact Information :</strong> Including, but not limited to, your name, email address and phone number, postal address, job title, and organization.</li>
                  <li><strong>Communication Details :</strong> Information you provide in communications with us, such as feedback, or requests for support.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-[#345261] mb-3">Automatically Collected Data</h3>
                <ul className="space-y-3 text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
                  <li><strong>Usage Data :</strong> This includes information about your interaction with our website, such as pages visited, time spent on each page, links clicked, and other actions taken.</li>
                  <li><strong>Device Information :</strong> Information about the device and browser you use to access our website, including IP address, operating system, browser type, and device identifiers.</li>
                  <li><strong>Location Information :</strong> We may infer your approximate location based on your IP address to improve our service relevance.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">Cookies and Tracking Technologies</h2>
            <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px] mb-6">
              We use cookies, web beacons, and similar tracking technologies to collect information about your use of our site, personalise your experience, and provide analytical insights.
            </p>
            <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              You can control cookie preferences through your browser settings, but some functionality may be impacted if cookies are disabled.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">How We Use Your Information</h2>
            <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] mb-6">
              We use your information to provide, improve, and personalise our services, as well as to enhance our customer interactions. The primary ways we use your information include:
            </p>
            <div className="space-y-8 text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              <p><strong>To Provide and Improve Our Services</strong> This includes responding to inquiries, processing service requests, managing customer accounts, and improving our offerings based on customer needs.</p>
              <p><strong>Communication</strong> We may use your contact information to send important notices, updates, promotional content, and other relevant information. You can opt out of marketing communications at any time.</p>
              <p><strong>Analysis and Research</strong> We analyse data on website usage and interactions to improve site functionality, service relevance, and user experience.</p>
              <p><strong>Legal Compliance and Security</strong> We may use or disclose information as required by law or to protect our rights, property, and the security of our users and services.</p>
            </div>
          </section>

          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">Information Sharing and Disclosure</h2>
            <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] mb-6">
              We are committed to protecting your privacy and will not sell, rent, or lease your personal information to third parties. However, there are specific circumstances where we may share your information:
            </p>
            <div className="space-y-8 text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              <p><strong>Service Providers and Business Partners</strong> We may share data with trusted partners who perform functions on our behalf, such as hosting, analytics, payment processing, or customer support. These parties are bound by confidentiality agreements.</p>
              <p><strong>Legal Requirements</strong> We may disclose information if required by law, such as responding to a subpoena or court order, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.</p>
              <p><strong>Business Transfers</strong> In the event of a merger, acquisition, or sale of assets, we may transfer information as part of the business transaction, subject to confidentiality terms.</p>
            </div>
          </section>

          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">Data Retention</h2>
            <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              We retain personal information only as long as necessary for the purposes outlined in this policy. After this period, we securely delete or anonymize the data. The retention period may vary depending on the type of data and applicable legal or contractual requirements.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">Data Security</h2>
            <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              We implement standard industry practices to protect your personal information from unauthorised access, disclosure, alteration, or destruction. These security measures include administrative, technical, and physical safeguards. However, no data transmission or storage system is guaranteed to be fully secure, and we cannot ensure absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">Your Rights and Choices</h2>
            <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] mb-6">
              Depending on your jurisdiction, you may have the following rights regarding your personal information:
            </p>
            <div className="space-y-8 text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              <p><strong>Access and Correction</strong> You may request access to, correction of, or updates to your personal information.</p>
              <p><strong>Deletion</strong> You may request the deletion of your personal information, subject to certain legal limitations.</p>
              <p><strong>Restriction</strong> You may request that we restrict the processing of your personal information under certain circumstances.</p>
              <p><strong>Data Portability</strong> You may request to receive your personal information in a structured, commonly used, and machine-readable format.</p>
              <p><strong>Instruction</strong> To exercise your rights, please contact us.</p>
            </div>
          </section>

          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">International Data Transfers</h2>
            <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              If you are located outside India, please be aware that your information may be transferred to, stored, or processed in India or other jurisdictions. We take appropriate measures to ensure adequate protection of your information in compliance with applicable legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] leading-[100%] font-semibold text-[#345261] mb-6">Changes to This Privacy Policy</h2>
            <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] max-[768px]:text-[18px] max-[413px]:text-[16px]">
              SPANGLES WEBX PRIVATE LIMITED may update this privacy policy periodically to reflect changes in our practices, technologies, legal requirements, or for other operational reasons. We encourage you to review this policy regularly to stay informed about how we protect your privacy. Significant Changes will be communicated via our website or direct communication channels.
            </p>
          </section>

          <section className="border-t border-gray-100">
            <h2 className="text-[28px] font-bold text-[#345261] mb-6">Contact Us</h2>
            <p className="text-[20px] leading-[1.6] font-normal text-[#6B6A66] mb-6">
              If you have any questions, concerns, or requests related to this privacy policy or our data practices, please contact us at:
            </p>
            <div className="space-y-4 text-[20px] font-medium text-[#345261]">
              <p className="font-bold text-[22px]">SPANGLES WEBX PRIVATE LIMITED</p>
              <p className="font-normal text-[#6B6A66]">
                Address : 7-15C, 1st Floor, Puthuval Villai, Kattathurai,<br />
                Kattathurai POST, Tamil Nadu - 629158
              </p>
              <p>Phone : <a href="tel:+917708784111" className="text-[#395563] font-normal hover:text-[#345261] transition-colors">+91 7708784111</a></p>
              <p>Email : <a href="mailto:webxspangles@gmail.com" className="text-[#395563] font-normal hover:text-[#345261] transition-colors">webxspangles@gmail.com</a></p>
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
