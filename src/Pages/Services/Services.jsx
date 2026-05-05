import React, { useState, useEffect } from "react";
import ServiceImg from "../../assets/Service-banner.jpg";
import cyberImg from "../../assets/portfolio1.jpg";
import digitalImg from "../../assets/portfolio2.jpg";
import productImg from "../../assets/portfolio3.jpg";
import webImg from "../../assets/portfolio4.jpg";
import testingImg from "../../assets/portfolio5.jpg";
import appImg from "../../assets/portfolio6.jpg";
import Support from "../About/Components/Support";
import { useNavigate } from "react-router-dom";
import Serviceicon from "../../assets/Service-icon.png"; // change to your icon
import Preloader from "../../Components/Preloader";
import { motion } from "framer-motion";

export const services = [
  {
    title: "Website Development",
    image: cyberImg,
    description:
      "The task of thinking about, planning, and formatting electronic data to define their layout, colours, text, styles, structures, graphics, and images—as well as the usage of interactive features that show pages to site visitors—is known as web design.",
    detailedDescription: "The task of thinking about, planning, and formatting electronic data to define their layout, colours, text, styles, structures, graphics, and images—as well as the usage of interactive features that show pages to site visitors—is known as web design. With eight years of expertise under our belt, we can handle any client requirement for web design and development.",
    advantages: [
      "First Impressions Matter : Your website is often the first interaction potential customers have with your business. A well-designed website creates a positive first impression and establishes credibility.",
      "Brand Identity : A professionally designed website reflects your brand identity, reinforcing your brand's values, mission, and uniqueness.",
      "User Experience (UX) : Good web design ensures an intuitive and enjoyable user experience, making it easy for visitors to navigate your site and find the information they need.",
      "SEO Optimization : A well-designed website with proper SEO practices improves your search engine rankings, making it easier for potential customers to find you online.",
      "Mobile Responsiveness : With the increasing use of mobile devices, having a responsive website design ensures your site looks and functions well on all screen sizes.",
      "Competitive Advantage : A unique and modern website design sets you apart from competitors, making your business more attractive to potential customers.",
      "Conversion Rates : Effective web design includes clear calls-to-action and optimized landing pages, which can significantly improve conversion rates and drive sales.",
      "Customer Trust : A professional and aesthetically pleasing website builds trust with your audience, making them more likely to engage with your business.",
      "Business Growth : A well-designed website can scale with your business, allowing you to add new features, services, and content as your business grows.",
      "Cost-Effective Marketing : Your website acts as a 24/7 marketing tool, providing information, attracting leads, and promoting your products or services at all times.",
      "Customer Engagement : Interactive and engaging web design elements, such as blogs, forums, and social media integration, encourage user interaction and foster a community around your brand.",
    ],
    keyComponents: [
      "Expertise and Professionalism",
      "Comprehensive Service Offerings",
      "User Experience (UX) Focus",
      "SEO and Digital Marketing Integration",
      "Innovation and Technology",
      "Client-Centric Approach",
      "Affordability and Value",
      "Proven Results",
      "Scalability and Flexibility",
      "Commitment to Quality",
    ],
    advantageHeading: "Why a Professional Website is the Foundation of Your Business Success",
  },

  {
    title: "Web App Development",
    image: digitalImg,
    description:
      "Elevate your digital presence with our web application development service. We craft bespoke solutions tailored to your unique needs, combining innovation with functionality to deliver seamless user experiences.",
    detailedDescription: "Elevate your digital presence with our web application development service. We craft bespoke solutions tailored to your unique needs, combining innovation with functionality to deliver seamless user experiences. Let's turn your ideas into reality and propel your business forward in the digital age. Software that runs within your web browser is dubbed an application. Companies need to provide services remotely and share information. Web applications are used by them to safely and conveniently communicate with customers.",
    advantages: [
      "Custom Solutions : Tailored web applications that meet specific business requirements and goals.",
      "Improved Efficiency : Streamlined processes and automated tasks that improve operational efficiency.",
      "Enhanced User Engagement : Interactive and user-friendly applications that engage and retain users.",
      "Scalability : Applications designed to grow with your business, accommodating new features and increased traffic.",
      "Competitive Advantage : Unique and innovative web applications that set your business apart from competitors.",
      "Data Security : Robust security measures to protect sensitive data and ensure compliance with regulations.",
      "Cost-Effective : Efficient use of resources and technology to deliver high-quality applications within budget.",
      "Seamless Integration : We ensure your web app integrates flawlessly with existing systems and third-party APIs for a unified workflow.",
      "Real-Time Data Processing : Our solutions leverage modern technologies for instant data updates and high-performance user interactions.",
      "Advanced Cloud Hosting : We deploy your applications on secure, scalable cloud infrastructure to ensure maximum uptime and global accessibility.",
    ],
    keyComponents: [
      "Consultation and Planning",
      "UI/UX Design",
      "Front-End Development",
      "Back-End Development",
      "API Development and Integration",
      "Security Implementation",
      "Testing and Quality Assurance",
      "Deployment and Hosting",
      "Maintenance and Support",
      "Performance Optimization",
    ],
    advantageHeading: "Building Powerful and Scalable Web Applications for Modern Businesses",
  },

  {
    title: "Mobile App Development",
    image: productImg,
    description:
      "Experience the power of mobile with our app development service. We specialize in creating intuitive and feature-rich applications that engage users and drive results.",
    detailedDescription: "Experience the power of mobile with our app development service. We specialize in creating intuitive and feature-rich applications that engage users and drive results. From concept to launch, we're with you every step of the way, ensuring your app stands out in a crowded marketplace. Let's build something incredible together. The development of mobile apps is comparable to the production of other software, including web apps. Planning a smart digital solution, though, can be challenging.",
    advantages: [
      "Expertise and Experience : With years of experience in the industry, we boast a team of highly skilled developers and designers who excel in crafting mobile apps.",
      "Customized Solutions : We take a customized approach to mobile app development, ensuring that each app is tailored to meet specific needs of your audience.",
      "Strategic Planning : We offer strategic consulting to help clients define their app's goals and features, ensuring alignment with business objectives.",
      "User-Centric Design : We place a strong emphasis on creating intuitive, visually appealing, and engaging user interfaces that enhance usability.",
      "Quality Assurance : Our dedicated team conducts rigorous testing at every stage of development to ensure the final product meets the highest standards.",
      "Timely Delivery : We understand the importance of meeting deadlines and strive to deliver projects on time and within budget through efficient practices.",
      "App Store Optimization (ASO) : We develop with visibility in mind, ensuring your app meets all criteria for high ranking in Apple and Google stores.",
      "Multi-Platform Consistency : Our cross-platform solutions provide a native-like experience on both iOS and Android from a single codebase.",
      "Offline Functionality : We implement smart caching and offline capabilities so your users can access core features without an internet connection.",
      "Post-Launch Support : We provide continuous monitoring and updates to ensure your app stays compatible with the latest OS versions and devices.",
    ],
    keyComponents: [
      "Expertise and Experience",
      "Customized Solutions",
      "Strategic Planning and Consulting",
      "User-Centric Design",
      "Quality Assurance and Testing",
      "Timely Delivery",
    ],
    advantageHeading: "Innovative Mobile Solutions Tailored to Your Business Goals",
  },

  {
    title: "Software Testing",
    image: webImg,
    description:
      "At Spangles Webx Pvt Ltd, we believe that successful software is built not only with great design and development but also with precise and reliable testing. Our software testing services are designed to identify errors, improve functionality, and ensure smooth performance before deployment.",
    detailedDescription: "At Spangles Webx Pvt Ltd, we believe that successful software is built not only with great design and development but also with precise and reliable testing. Our software testing services are designed to identify errors, improve functionality, and ensure smooth performance before deployment. We perform detailed quality checks including functional testing, security testing, usability testing, and cross-platform compatibility testing. This helps us deliver software solutions that are secure, bug-free, and highly efficient. By maintaining strict quality assurance standards, we ensure every product meets client expectations and performs seamlessly in real-time business environments.",
    advantages: [
      "Precision and Reliability : We believe that successful software is built not only with great design but also with precise and reliable testing.",
      "Comprehensive Quality Checks : We perform detailed checks including functional, security, and usability testing to ensure bug-free solutions.",
      "Optimized Performance : Our testing ensures that your application handles traffic seamlessly and performs optimally under pressure.",
      "Rigorous Security Standards : We identify and eliminate vulnerabilities through rigorous security testing, protecting your data and users.",
      "Enhanced Product Reliability : By maintaining strict quality assurance, we ensure every product meets expectations and performs flawlessly.",
      "Automated Efficiency : We leverage advanced automation testing tools to reduce manual errors and significantly speed up the release cycle of your software.",
      "User-Centric Validation : Our usability testing ensures that the final product is intuitive, accessible, and meets the real-world needs of your target audience.",
      "Scalability Assurance : We conduct rigorous load and stress testing to ensure your application remains stable and performant even during peak traffic periods.",
      "Regression Testing Excellence : Every update is thoroughly tested against existing features to ensure new changes never break your established functionality.",
      "Global Compatibility : We verify your software across multiple browsers, operating systems, and network conditions to ensure a flawless experience for all users.",
    ],
    keyComponents: [
      "Expertise and Experience",
      "Comprehensive Testing Solutions",
      "Quality Assurance",
      "Tailored Testing Strategies",
      "Cutting-Edge Tools and Technologies",
      "Cost-Effective Solutions",
      "Timely Delivery",
      "Client-Centric Approach",
      "Continuous Support and Improvement",
      "Proven Track Record",
    ],
    advantageHeading: "Successful Software is Built with Precise and Reliable Testing",
  },

  {
    title: "UI / UX Designing",
    image: testingImg,
    description: "At Spangles Webx Pvt Ltd, we craft visually appealing and user-friendly UI/UX designs that create meaningful digital experiences. Our design approach focuses on understanding user behavior, business goals, and market trends to build interfaces that are both attractive and highly functional.",
    detailedDescription: "At Spangles Webx Pvt Ltd, we craft visually appealing and user-friendly UI/UX designs that create meaningful digital experiences. Our design approach focuses on understanding user behavior, business goals, and market trends to build interfaces that are both attractive and highly functional. From wireframing to final prototyping, we ensure every screen is designed with clarity, simplicity, and smooth navigation in mind. We prioritize responsive layouts, engaging visuals, and seamless user journeys to increase customer interaction and satisfaction. With our creative UI/UX solutions, businesses can deliver products that not only look impressive but also provide exceptional usability across all devices.",
    advantages: [
      "User Research : We conduct thorough user research to understand your target audience, their behaviors, needs, and pain points, informing our design decisions.",
      "Wire framing : We create wireframes to outline the structure and layout of the interface, focusing on functionality and content organization before moving to visual design.",
      "Prototyping : We develop interactive prototypes to visualize the user flow and interactions, allowing for user testing and validation before finalizing the design.",
      "Visual Design : We craft visually appealing designs that align with your brand identity, incorporating colors, typography, imagery, and other visual elements to create a cohesive and engaging user interface.",
      "Interaction Design : We design intuitive interactions and animations that enhance usability and provide feedback to users, creating a seamless and enjoyable user experience.",
      "Responsive Design : We ensure that designs are responsive and adaptable to different devices and screen sizes, providing a consistent experience across desktop, tablet, and mobile platforms.",
      "Usability Testing : We conduct usability testing to gather feedback from real users, identifying usability issues and areas for improvement to refine the design and enhance user satisfaction.",
      "Accessibility : We design with accessibility in mind, ensuring that the interface is usable by all users, including those with disabilities, and complies with relevant accessibility standards and guidelines.",
      "Iterative Design Process : We follow an iterative design process, continuously refining and improving the design based on user feedback and insights to achieve the best possible outcome.",
      "Collaboration and Communication : We work closely with stakeholders to ensure the design aligns with business goals and user needs through constant feedback loops.",
    ],
    keyComponents: [
      "Expertise and Experience",
      "Innovative Approach",
      "Client-Centric Focus",
      "Customized Solutions",
      "Quality Assurance",
      "Collaborative Partnership",
      "Proven Track Record",
      "Timely Delivery",
      "Continuous Support",
      "Value for Investment",
    ],
    advantageHeading: "Crafting Intuitive and Engaging Digital Experiences for Your Users",
  },

  {
    title: "Software Development",
    image: appImg,
    description: "At Spangles Webx Pvt Ltd, we provide innovative and scalable software development solutions tailored to meet diverse business requirements. Our expert developers build custom software applications that streamline operations, improve productivity, and support long-term business growth.",
    detailedDescription: "At Spangles Webx Pvt Ltd, we provide innovative and scalable software development solutions tailored to meet diverse business requirements. Our expert developers build custom software applications that streamline operations, improve productivity, and support long-term business growth. From requirement analysis to deployment, we follow a structured development process that ensures quality, security, and performance at every stage. We specialize in creating user-centric, feature-rich, and technology-driven software that adapts to changing market demands. With a commitment to excellence and modern development practices, we transform ideas into powerful digital solutions that help businesses stay ahead in a competitive world.",
    advantages: [
      "Custom Business Solutions : Tailor-made software designed to match unique business operations and workflow requirements.",
      "Improved Productivity : Automation of repetitive tasks helps employees save time and work more efficiently.",
      "Better Data Management : Organized software systems make storing, accessing, and managing business data easier.",
      "Enhanced Security : Advanced software solutions protect sensitive information from cyber threats and data breaches.",
      "Scalability & Flexibility : Software can be upgraded and expanded easily as your business grows over time.",
      "Cost Effective Operations : Reduces manual effort, paperwork, and operational expenses through digital automation.",
      "Faster Decision Making : Real-time reports and analytics help management make quick and accurate decisions.",
      "Seamless Integration : Custom software can connect with existing tools, applications, and business platforms smoothly.",
      "Improved Customer Experience : Efficient software systems ensure faster service delivery and better customer satisfaction.",
      "Competitive Advantage : Modern software technology gives businesses a stronger position in the digital marketplace.",
    ],
    keyComponents: [
      "Consultation and Planning",
      "UI/UX Design",
      "Front-End Development",
      "Back-End Development",
      "API Development and Integration",
      "Security Implementation",
      "Testing and Quality Assurance",
      "Deployment and Hosting",
      "Maintenance and Support",
      "Performance Optimization",
    ],
    advantageHeading: "Custom Software Solutions to Streamline Your Business Growth",
  },
];

const Services = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[360px] w-full max-[413px]:h-[300px]">
        <img
          src={ServiceImg} // change to your image
          alt="banner"
          className="w-full h-full object-cover object-center"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* text */}
        <div
          className="absolute inset-0 flex flex-col justify-end px-[100px] pb-25 text-white 
    max-[1024px]:px-10 max-[1024px]:pb-20 
    max-[768px]:px-6 max-[768px]:pb-16 
    max-[413px]:px-4 max-[413px]:pb-10 
    min-[1024px]:max-[1200px]:px-[72px]"
        >
          {/* breadcrumb */}
          <p className="font-[Montserrat] font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase text-white max-[413px]:text-[12px]">
            Home / Services {/* change text */}
          </p>

          {/* heading */}
          <h1
            className="font-montserrat font-semibold text-[54px] leading-[62px] text-white mt-2 
      max-[1024px]:text-[48px] max-[1024px]:leading-[56px] 
      max-[768px]:text-[44px] max-[768px]:leading-[52px] 
      max-[413px]:text-[28px] max-[413px]:leading-[32px]"
          >
            Services We Offer {/* change title */}
          </h1>
        </div>
      </div>

      {/* Services Grid */}
      <div
        className="px-[100px] pt-[60px] pb-[100px] border-b-[0.8px] border-[#E5E5E5]
max-[1400px]:px-[50px]
max-[1200px]:px-10
max-[768px]:px-6
max-[413px]:px-5 max-[413px]:pt-8 max-[413px]:pb-20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-[1030px]:grid-cols-2 max-[413px]:!grid-cols-1 gap-x-[30px] min-[1441px]:gap-x-[20px] min-[1441px]:justify-center gap-y-[50px] min-[1441px]:gap-y-[40px] max-[413px]:gap-y-10">
          {services.map((service, index) => {
            const isLeft = index % 3 === 0;
            const isCenter = index % 3 === 1;
            const isRight = index % 3 === 2;

            return (
              <motion.div
                key={index}
                initial={
                  isLeft
                    ? { opacity: 0, x: -150, y: 30, rotate: -5, filter: "blur(10px)" }
                    : isRight
                      ? { opacity: 0, x: 150, y: 30, rotate: 5, filter: "blur(10px)" }
                      : { opacity: 0, scale: 0.4, y: 100, filter: "blur(10px)" }
                }
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 15,
                  mass: 1,
                  delay: (index % 3) * 0.15,
                }}
                onClick={() =>
                  navigate("/service-details", {
                    state: {
                      ...service,
                      gallery: [service.image], // can expand later
                    },
                  })
                }
                className="relative group cursor-pointer rounded-xl overflow-hidden w-[390px] h-[432px] min-[1441px]:w-[480px] min-[1441px]:h-[540px] max-[1400px]:w-full max-[1400px]:max-w-[390px] max-[1400px]:mx-auto max-[413px]:h-[430px] shadow-[0px_0px_19.22px_0px_#00000012]"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />

                {/* 🔹 Gradient (default) */}
                <div
                  className="absolute inset-0 
          bg-[linear-gradient(0deg,_#395563_0%,_rgba(20,34,92,0)_100%)]
          transition-all duration-500 ease-in-out 
          group-hover:opacity-0"
                />

                {/* 🔹 Default Content */}
                <div className="absolute bottom-14 left-15 right-6 text-white transition-all duration-500 group-hover:opacity-0 max-[413px]:hidden">
                  {/* ICON — #FFFFFF default; #395563 when card hovered (hover panel icon) */}
                  <div
                    className="relative w-12 h-12 mb-4 bg-white"
                    style={{
                      WebkitMaskImage: `url(${Serviceicon})`,
                      WebkitMaskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskImage: `url(${Serviceicon})`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                    }}
                    aria-hidden
                  />

                  <h3 className="font-[Montserrat] font-medium text-[20px] leading-[23.07px] tracking-[0%] align-middle text-[#ffffff]">
                    {service.title}
                  </h3>
                </div>

                {/* 🔹 Hover White Card */}
                <div
                  className="absolute bottom-6 left-6 right-6 bg-white rounded-xl px-5 pt-5 pb-6  
          opacity-0 translate-y-6 
          group-hover:opacity-100 group-hover:translate-y-0 
          transition-all duration-500 ease-in-out
          max-[413px]:opacity-100 max-[413px]:translate-y-0 max-[413px]:bottom-5 max-[413px]:left-5 max-[413px]:right-5"
                >
                  {/* ICON — #395563 (visible on card hover with this panel) */}
                  <div
                    className="w-12 h-12 mb-4 bg-[#395563]"
                    style={{
                      WebkitMaskImage: `url(${Serviceicon})`,
                      WebkitMaskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskImage: `url(${Serviceicon})`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                    }}
                    aria-hidden
                  />

                  <h3 className="mb-5 font-[Montserrat] font-medium text-[20px] leading-[23.07px] text-[#395563] max-[413px]:text-[18px] max-[413px]:mb-3">
                    {service.title}
                  </h3>

                  <p className="font-normal text-[16px] leading-[23.07px] text-[#3955638F] max-[413px]:text-[14px] line-clamp-2 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="-mt-[40px] relative z-10">
        <Support />
      </div>
    </div>
  );
};

export default Services;
