import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Tag,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Monitor,
  Smartphone,
  Layout,
  Layers,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Support from "../About/Components/Support";
import Preloader from "../../Components/Preloader";
import hospitalBanner from "../../assets/Hospital Management/Hospital baner.webp";
import hospitalImg1 from "../../assets/Hospital Management/Hospital Management 1.webp";
import hospitalImg2 from "../../assets/Hospital Management/Hospital Management -02.webp";
import hospitalImg3 from "../../assets/Hospital Management/Hospital Management -03.webp";
import hospitalImg4 from "../../assets/Hospital Management/Hospital management -4.webp";
import hospitalImg5 from "../../assets/Hospital Management/Hospital management -5.webp";
import hospitalImg6 from "../../assets/Hospital Management/Hospital management - 6.webp";
import hospitalImg7 from "../../assets/Hospital Management/Hospital management - 7.webp";
import hospitalImg8 from "../../assets/Hospital Management/Hospital managemenet -8.webp";
import clinicDashboard from "../../assets/Clinic Management/Clincal Dashboard.webp";
import clinicInnerBanner from "../../assets/Clinic Management/Clinic inner ban.webp";
import clinicSlide1 from "../../assets/Clinic Management/Clinic slide 1.webp";
import clinicSlide2 from "../../assets/Clinic Management/Clinical dashboard - 01.webp";
import clinicSlide3 from "../../assets/Clinic Management/clinical Patient.webp";
import clinicSlide4 from "../../assets/Clinic Management/Clinical doctor.webp";
import clinicSlide5 from "../../assets/Clinic Management/clinic Appointment.webp";
import clinicSlide6 from "../../assets/Clinic Management/Clinic Billing.webp";
import clinicSlide7 from "../../assets/Clinic Management/clinical lab.webp";
import schoolBanner from "../../assets/School mangemnt/School management.webp";
import schoolInnerBanner from "../../assets/School mangemnt/Banner img.webp";
import schoolSlide1 from "../../assets/School mangemnt/sign up page.webp";
import schoolSlide2 from "../../assets/School mangemnt/School Dashboard.webp";
import schoolSlide3 from "../../assets/School mangemnt/Admission.webp";
import schoolSlide4 from "../../assets/School mangemnt/student data.webp";
import schoolSlide5 from "../../assets/School mangemnt/school staff.webp";
import schoolSlide6 from "../../assets/School mangemnt/Fees school.webp";
import schoolSlide7 from "../../assets/School mangemnt/Billing.webp";
import churchBanner from "../../assets/Church/Church.webp";
import churchInnerBanner from "../../assets/Church/church inner ban.webp";
import churchLogin from "../../assets/Church/login.webp";
import churchDashboard from "../../assets/Church/Dashboard.webp";
import churchAddMember from "../../assets/Church/Add member.webp";
import churchMember from "../../assets/Church/Memnber.webp";
import churchBaptism from "../../assets/Church/Baptism.webp";
import churchSundaySchool from "../../assets/Church/Sunday school'.webp";
import churchLedger from "../../assets/Church/Ledger.webp";
import bookMain from "../../assets/Book depot/Book-main.webp";
import bookInnerBanner from "../../assets/Book depot/book-inner-banner.webp";
import bookLogin from "../../assets/Book depot/Login (3).webp";
import bookDashboard from "../../assets/Book depot/Dashboard (3).webp";
import bookProduct from "../../assets/Book depot/products.webp";
import bookSupplier from "../../assets/Book depot/supplier.webp";
import bookCustomer from "../../assets/Book depot/customer.webp";
import bookBill from "../../assets/Book depot/Bill.webp";
import bookLowStock from "../../assets/Book depot/Low stock.webp";
import bricksLogin from "../../assets/Bricks/login (2).webp";
import bricksDashboard from "../../assets/Bricks/Dashboard (2).webp";
import bricksEmployee from "../../assets/Bricks/Employee.webp";
import bricksAttendance from "../../assets/Bricks/Attendance.webp";
import bricksIncome from "../../assets/Bricks/Income.webp";
import bricksExpenses from "../../assets/Bricks/Expenses.webp";
import bricksPayroll from "../../assets/Bricks/Payroll (2).webp";
import bricksInnerBanner from "../../assets/Bricks/inner banner.webp";

const allProjects = [
  {
    id: 1,
    title: "Hospital Management",
    image: hospitalBanner,
    gallery: [
      hospitalImg1,
      hospitalImg2,
      hospitalImg3,
      hospitalImg4,
      hospitalImg5,
      hospitalImg6,
      hospitalImg7,
      hospitalImg8,
    ],
    slideTitles: [
      "Welcome",
      "Hospital Dashboard",
      "Patient",
      "Doctor",
      "Billing",
      "Specialities",
      "Laboratory",
      "Consultation",
    ],
    desc: "Streamlining patient care, doctor scheduling, and administrative operations.",
    fullDesc:
      "The Hospital Management System (HMS) is a centralized platform designed to manage hospital operations efficiently. It connects patient care, doctors, nurses, laboratory, pharmacy, billing, insurance, and administration in one system. The system simplifies complex workflows and provides role-based access for different hospital staff. The goal is to create a clear, organized, and user-friendly experience for managing daily hospital activities.",
    clientInfo:
      "The project was developed for a hospital organization seeking to modernize and streamline its operational processes through a centralized digital platform. The system was designed to bring together clinical, administrative, and support functions, enabling healthcare professionals and hospital staff to efficiently manage patient care, resources, and day-to-day hospital operations within a unified system.",
    projectChallenges: [
      "The organization was facing difficulties in managing hospital operations because different departments followed separate processes. Patient information, appointments, doctors, nurses, laboratory, pharmacy, billing, staff, and inventory were not connected in one place.",
      "This made it difficult to access information quickly, coordinate between departments, and monitor overall hospital activities.",
      "I solved this problem by designing a centralized HMS that connects the major hospital workflows in one system, making information easier to manage, access, and track.",
    ],
    technologies: {
      intro:
        "The HMS was designed and developed using a combination of design and development technologies:",
      list: [
        {
          name: "Figma",
          desc: "UI/UX design, wireframes, prototypes, and high-fidelity screens.",
        },
        {
          name: "FigJam",
          desc: "User flows, process mapping, and workflow planning.",
        },
        {
          name: "Design System",
          desc: "Reusable components, typography, colors, spacing, and UI patterns.",
        },
        {
          name: "HTML, CSS & JavaScript",
          desc: "Frontend structure, styling, and interactions.",
        },
        {
          name: "React",
          desc: "Frontend development and component-based UI implementation.",
        },
        {
          name: "Node.js",
          desc: "Backend development and server-side operations.",
        },
        {
          name: "MongoDB",
          desc: "Database management for storing and managing hospital data.",
        },
      ],
    },
    keyFeaturesDeveloped:
      "The Hospital Management System provides a centralized platform for managing hospital operations, including patient registration, OPD and IPD management, appointments, clinical consultations, departments and medical specialities, hospital facilities such as Emergency Care, ICU, CCU, ICCU and Dialysis, laboratory services, pharmacy and medicine inventory, staff and designation management, billing, insurance, blood requests, and administrative reporting. The system connects these workflows to improve coordination, information accessibility, and overall hospital operational efficiency.",
    users:
      "The HMS was designed to support multiple hospital user roles, including administrators, doctors, nurses, receptionists, laboratory technicians, pharmacists, billing staff, and other hospital employees. Each role is provided with access to the relevant modules and workflows required for their responsibilities, ensuring secure and efficient hospital operations.",
    projectOutcomes:
      "The redesigned Hospital Management System provides a structured and centralized platform for managing hospital operations. The improved information architecture and user interface make complex workflows easier to navigate, while role-based access helps staff quickly access the functions relevant to their responsibilities. Overall, the solution improves workflow organization, information accessibility, and coordination across different hospital departments.",
    before:
      "The existing design presented a wide range of hospital information across multiple operational areas. Users had to work through different sections to access patient and department-related information. Large amounts of information made some screens difficult to scan and understand. Related activities were not always visually connected within the interface. The overall structure required better clarity and information organization.",
    after:
      "The redesigned interface establishes a structured environment for managing hospital operations. Patient and operational information is arranged into clear and meaningful sections. Complex content is prioritized using improved information hierarchy and visual grouping. Related functions are positioned together to support smoother navigation. The consistent interface structure provides a clearer experience across hospital modules.",
  },

  {
    id: 2,
    title: "Clinical Management",
    image: clinicInnerBanner,
    gallery: [
      clinicSlide1,
      clinicSlide2,
      clinicSlide3,
      clinicSlide4,
      clinicSlide5,
      clinicSlide7,
      clinicSlide6,
    ],
    slideTitles: [
      "Login Screen",
      "Clinical Dashboard",
      "Patient Management",
      "Doctor Management",
      "Appointment Management",
      "Laboratory",
      "Billing & Invoicing",
    ],
    desc: "Clinical assessment is the systematic evaluation of a patient's health condition through medical history, vital signs, and examinations.",
    fullDesc:
      "Clinical assessment is the systematic evaluation of a patient’s health condition through medical history, symptoms, vital signs, physical examination, and clinical findings. It helps healthcare professionals identify health problems, determine the patient’s condition, and plan appropriate diagnosis and treatment.",
    clientInfo:
      "The project was developed for a hospital organization seeking to improve and streamline its clinical management processes. The organization needed a structured solution to support healthcare professionals in assessing patients, documenting clinical findings, managing diagnoses and treatments, and maintaining accurate clinical records throughout the patient care journey.",
    projectChallenges:
      "Clinical information was handled across different consultation and speciality workflows, making it difficult for healthcare professionals to maintain complete and consistent patient records. Managing clinical assessments, medical history, diagnoses, prescriptions, treatment plans, and follow-up information required a more organized and connected approach.",
    technologies:
      "The Clinical Management solution was designed and developed using Figma for UI/UX design and prototyping, FigJam for clinical workflow mapping, React for frontend development, Node.js for backend development, and MongoDB for storing and managing clinical data.",
    keyFeaturesDeveloped:
      "The Clinical Management system supports patient clinical assessment, medical history, vital signs, physical examination, clinical findings, diagnosis, treatment planning, prescriptions, clinical notes, consultation records, speciality-based workflows, and follow-up care.",
    users:
      "The system is designed for general physicians, specialist doctors, nurses, and authorized clinical staff involved in patient assessment, consultation, diagnosis, treatment, and follow-up. Role-based access allows each user to work with the clinical functions relevant to their responsibilities.",
    projectOutcomes:
      "The Clinical Management solution provides a structured approach to managing patient care and clinical information. It improves the organization of clinical records, simplifies assessment and consultation workflows, and enables healthcare professionals to efficiently document and track diagnoses, treatments, prescriptions, and follow-up care throughout the patient journey.",
    before:
      "The previous clinical interface contained extensive patient information across different sections. Healthcare professionals needed to review multiple areas to understand relevant clinical details. Patient findings, medical information, and treatment details were not always presented with clear prioritization. The information structure made it harder to quickly identify important clinical details. The interface required a more focused approach to clinical information presentation.",
    after:
      "The redesigned clinical interface places important patient information within a clear and structured framework. Clinical details are organized according to the stages of patient care and professional requirements. Assessment findings, diagnoses, treatments, and prescriptions receive clearer visual priority. Relevant information can be reviewed with less visual complexity. The improved structure supports a more focused and consistent clinical user experience.",
  },

  {
    id: 3,
    title: "School Management Software",
    image: schoolInnerBanner,
    gallery: [
      schoolSlide1,
      schoolSlide2,
      schoolSlide3,
      schoolSlide4,
      schoolSlide5,
      schoolSlide6,
      schoolSlide7,
    ],
    slideTitles: [
      "Sign Up Page",
      "School Dashboard",
      "Admission",
      "Student Data",
      "School Staff",
      "Fees Management",
      "Billing",
    ],
    desc: "A comprehensive School Management platform streamlining student admissions, attendance, grading, fee management, and academic administration.",
    fullDesc:
      "The School Management System is a centralized digital platform designed to streamline academic and administrative operations within an educational institution. It enables schools to efficiently manage student information, teachers, classes, subjects, attendance, examinations, schedules, fees, staff, and academic activities through an organized and connected system. The platform improves information accessibility, simplifies day-to-day workflows, and supports effective coordination between different users across the institution.",
    clientInfo:
      "The project was developed for a school organization seeking to streamline and centralize its academic and administrative processes. The organization needed a structured solution to manage students, teachers, classes, examinations, schedules, staff, and other day-to-day academic activities through a unified platform.",
    projectChallenges:
      "The organization faced challenges in managing academic information and examination processes across different workflows. Student records, class management, exam schedules, hall allocation, staff information, and academic activities required better coordination and organization.",
    technologies:
      "The School Management System was designed and developed using Figma for UI/UX design and prototyping, FigJam for workflow mapping, React for frontend development, Node.js for backend development, and MongoDB for storing and managing school data.",
    keyFeaturesDeveloped:
      "The School Management System includes student management, teacher management, class and subject management, attendance, fee management, examination management, exam scheduling, theory and practical hall allocation, automatic student seating, invigilator allocation, staff management, and academic reporting.",
    users:
      "The system is designed for administrators, teachers, students, examination coordinators, and other authorized school staff. Role-based access allows each user to access the academic and administrative functions relevant to their responsibilities.",
    projectOutcomes:
      "The School Management System provides a structured and centralized platform for managing academic and administrative activities. It simplifies examination planning, improves coordination between school staff, organizes student and academic information, and makes complex processes such as exam scheduling and hall allocation easier to manage.",
    before:
      "The previous design had multiple academic and administrative functions distributed across different sections. Users had to navigate through several screens to locate required information and complete tasks. Examination-related activities were not presented with a clear visual hierarchy. Important student, class, and examination information could be difficult to identify quickly. The overall interface required better organization and consistency.",
    after:
      "The redesigned interface introduces a clearer structure for academic and administrative activities. Information is grouped according to user needs and task priorities. Examination-related content is presented in a more organized and accessible manner. Improved navigation helps users move between related functions more easily. Consistent layouts and reusable UI patterns create a more unified experience.",
  },

  {
    id: 4,
    title: "Church Management Software",
    image: churchInnerBanner,
    gallery: [
      churchLogin,
      churchDashboard,
      churchAddMember,
      churchMember,
      churchBaptism,
      churchSundaySchool,
      churchLedger,
    ],
    slideTitles: [
      "Login Screen",
      "Church Dashboard",
      "Add Member",
      "Member Directory",
      "Baptism Records",
      "Sunday School",
      "Accounts & Ledger",
    ],
    desc: "A centralized church management platform streamlining member records, donations, and ministry activities.",
    fullDesc:
      "The Church Management System is an all-in-one digital platform designed to help churches and religious organizations manage memberships, contributions, event scheduling, volunteers, and ministry communications with ease and clarity.",
    clientInfo:
      "The client was CSI Christ Church, Coimbatore, a Christian church community. The project was developed to digitally manage the church’s administrative and ministry operations. It supports church staff, office administrators, pastors, fellowship teams, teachers, and members. The system centralizes church records, financial activities, member information, and events. It provides a unified platform for efficient and organized day-to-day church management.",
    projectChallenges:
      "The church was handling multiple administrative activities across separate records and manual processes. Member, family, financial, offering, fellowship, event, certificate, and cemetery information needed centralized management. The project reduced dependency on manual record-keeping and scattered data management. It improved accessibility, organization, tracking, reporting, and control of church operations. The solution created a single digital platform for managing the church’s major operational activities.",
    technologies:
      "The frontend was developed using React.js, Vite, JavaScript, React Router, Axios, Material UI, Ant Design, and Bootstrap. The backend was built using Node.js and Express.js with RESTful APIs. MongoDB with Mongoose was used for database management and structured church records. JWT, bcrypt, Socket.IO, Nodemailer, Node Cron, Puppeteer, jsPDF, and ExcelJS were used for security, communication, automation, and reporting. Additional integrations and libraries support payments, PDF generation, Excel exports, notifications, dashboards, and real-time communication.",
    keyFeaturesDeveloped:
      "The system includes member and family management, authentication, role-based access, dashboards, and notifications. It manages church accounts, receipts, payments, expenses, journals, ledgers, bank reconciliation, and financial reports. Modules were developed for Sunday School, Endeavour School, men’s, women’s, youth, couples’ fellowships, choir, and church activities. It also includes baptism, marriage, death certificates, cemetery management, marriage hall booking, auctions, offerings, donations, subscriptions, and church staff management. Advanced reporting, PDF/Excel exports, search, filtering, attendance, events, examinations, and administrative controls are also included.",
    users:
      "The platform is designed to support multiple categories of users through role-based access control. User roles include administrators, treasurers, secretaries, accountants, office staff, pastors, teachers, fellowship teams, cemetery managers, and church members. Members can access relevant personal and church services through their own login. Administrative users receive access according to their assigned responsibilities and permissions. The exact number of active users depends on the church’s live deployment and registered user base.",
    projectOutcomes:
      "The project transformed major church administration activities into a centralized digital management system. Staff can manage records, finances, events, fellowships, education, certificates, and reports from one platform. Role-based access improves security by ensuring users see and manage only the functions relevant to them. Automated reporting, search, document generation, notifications, and dashboards reduce repetitive administrative work. Overall, the system provides a more organized, efficient, transparent, and scalable approach to church management.",
    before:
      "Church operations relied heavily on manual records, separate files, and disconnected administrative processes. Finding records and preparing reports required more manual effort and time.",
    after:
      "Member, family, finance, ministry, event, certificate, and cemetery information is managed in one centralized system. Search, filtering, dashboards, automated reports, PDF/Excel exports, and structured workflows make information easier to access. Overall improvement: From fragmented manual administration → to a centralized, secure, role-based digital church-management platform.",
  },

  {
    id: 5,
    title: "Book Depot Management System",
    image: bookInnerBanner,
    gallery: [
      bookLogin,
      bookDashboard,
      bookProduct,
      bookSupplier,
      bookCustomer,
      bookBill,
      bookLowStock,
    ],
    slideTitles: [
      "Login Screen",
      "Dashboard Overview",
      "Product & Inventory Management",
      "Supplier Management",
      "Customer Management",
      "POS Billing & Invoicing",
      "Low Stock Alerts",
    ],
    desc: "A centralized platform designed to manage bookstore operations efficiently across multiple branches.",
    fullDesc:
      "The Book Depot Management System is a centralized platform designed to manage bookstore operations efficiently across multiple branches. It connects sales, purchases, inventory, customers, suppliers, staff, expenses, accounting, and reporting in one system. The platform simplifies daily bookstore workflows and provides role-based access for different users.",
    projectChallenges: [
      "Managing multiple branches, book inventory, sales, purchases, suppliers, customers, and financial activities through separate processes made it difficult to track operations efficiently. Stock visibility, sales monitoring, and maintaining accurate records were major challenges.",
      "We solved these challenges by developing a centralized system that connects the major bookstore workflows and provides better control, tracking, and accessibility of operational information.",
    ],
    technologies: {
      intro:
        "The Book Depot Management System was developed using modern web technologies and tools:",
      list: [
        {
          name: "React.js",
          desc: "Frontend development and component-based UI.",
        },
        {
          name: "Node.js & Express.js",
          desc: "Backend development and REST APIs.",
        },
        {
          name: "MongoDB & Mongoose",
          desc: "Database management.",
        },
        {
          name: "Tailwind CSS",
          desc: "Responsive UI styling.",
        },
        {
          name: "JWT & bcrypt",
          desc: "Authentication and role-based access.",
        },
        {
          name: "jsPDF",
          desc: "Invoice and report generation.",
        },
        {
          name: "QZ Tray & Barcode Tools",
          desc: "Thermal printing and barcode operations.",
        },
      ],
    },
    keyFeaturesDeveloped:
      "The system includes multi-branch management, role-based access, POS billing, barcode-based book handling, inventory and stock management, purchase and GRN workflows, purchase returns, customer and supplier management, low-stock monitoring, expenses and ledger management, payments and receipts, dashboards, reports, audit logs, PDF invoices, and thermal printing.",
    users:
      "The system supports Mega Admins, Managers, Sales Officers, and Branch Users, with access based on their responsibilities.",
    projectOutcomes:
      "The system provides a centralized and structured platform for managing bookstore operations, improving stock visibility, billing efficiency, branch coordination, financial tracking, and reporting while reducing dependency on manual processes.",
    before:
      "Manual and disconnected bookstore operations.",
    after:
      "Centralized, automated, multi-branch management with integrated billing, inventory, and reporting.",
  },

  {
    id: 6,
    title: "Brick Manufacturing Industry",
    image: bricksInnerBanner,
    gallery: [
      bricksLogin,
      bricksDashboard,
      bricksEmployee,
      bricksAttendance,
      bricksIncome,
      bricksExpenses,
      bricksPayroll,
    ],
    slideTitles: [
      "Login Screen",
      "Dashboard Overview",
      "Employee Management",
      "Attendance Tracking",
      "Income Management",
      "Expenses Management",
      "Payroll & Salary",
    ],
    desc: "A centralized platform for managing brick sales, expenses, credits, employees, and payroll operations efficiently.",
    fullDesc:
      "Elyon Bricks is a comprehensive business and workforce management platform developed to support day-to-day brick manufacturing and sales operations. It provides a centralized digital solution for tracking customers, sales, expenses, credits, employee attendance, and payroll.",
    clientInfo:
      "Elyon Bricks, a brick manufacturing and sales business. The system was developed to support the company’s day-to-day sales and workforce management operations. It provides a centralized platform for managing customers, sales, expenses, credits, employees, and payroll. The application is designed for internal business and administrative use. It helps the business move its operational records from manual processes to a structured digital system.",
    projectChallenges:
      "The project solved the difficulty of managing brick sales, payments, expenses, credits, and employee records separately. It reduced dependence on manual calculations and scattered records for financial and employee management. The system tracks invoices, advance payments, outstanding balances, and payment histories in one place. Employee attendance and salary calculations are also organized through a centralized system. This gives management better visibility and control over daily business operations.",
    technologies: {
      list: [
        {
          name: "Frontend",
          desc: "React.js, Vite, JavaScript, React Router",
        },
        {
          name: "UI & Styling",
          desc: "Material UI (MUI), Ant Design, Bootstrap",
        },
        {
          name: "Backend",
          desc: "Node.js, Express.js",
        },
        {
          name: "Database",
          desc: "MongoDB",
        },
      ],
    },
    keyFeaturesDeveloped:
      "The system includes brick sales and income management with invoice, customer, quantity, pricing, tax, advance, and balance tracking. It provides expense and credit management with payment history and outstanding balance tracking. Employee management includes employee registration, auto-generated employee IDs, editing, viewing, and deletion. Attendance and payroll modules calculate working days, salary, advance payments, and remaining balances. Follow-ups, reports, authentication, search, date filtering, pagination, and payment tracking were also implemented.",
    users:
      "The application is designed for internal users of Elyon Bricks rather than public customers. It includes a user authentication system with signup and login functionality. Registered users can access the business management dashboard after authentication. The system supports multiple operational areas through a centralized dashboard. The exact number of active users is not defined in the provided source code, so a specific user count should not be claimed.",
    projectOutcomes:
      "Elyon Bricks gained a centralized digital platform for managing sales and employee-related operations. Financial records such as income, expenses, credits, advances, and balances can be maintained systematically. Employee attendance and payroll calculations became easier to organize and review. Reports and follow-up information provide better visibility into business performance and pending payments. Overall, the system improves operational organization, reduces manual record keeping, and supports faster decision-making.",
    before:
      "Manual sales and financial records → Centralized digital income and expense management. Manual payment calculations → Automated balance and payment-history tracking. Separate employee records → Centralized employee management with unique employee IDs. Manual attendance and salary calculations → Digital attendance and payroll calculation. Scattered business information → One dashboard for sales, expenses, credits, employees, payroll, reports, and follow-ups.",
    after:
      "Centralized digital income and expense management with automated balance and payment-history tracking, structured employee profiles with auto-generated IDs, automated attendance and payroll computation, and unified reporting across all operational branches.",
  },
];

function ProjectImageSlider({ images, title, slideTitles = [] }) {
  const list = Array.isArray(images) && images.length > 0 ? images : [];

  const [index, setIndex] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);

  const slideCount = list.length;
  const sliderItems = slideCount > 0 ? [...list, ...list] : [];
  const activeDotIndex =
    slideCount > 0 ? ((index % slideCount) + slideCount) % slideCount : 0;

  useEffect(() => {
    if (slideCount === 0 || index < slideCount) return undefined;
    const timeout = setTimeout(() => {
      setIndex(0);
    }, 700);
    return () => clearTimeout(timeout);
  }, [index, slideCount]);

  useEffect(() => {
    if (sliderPaused || slideCount <= 1) return undefined;
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [sliderPaused, slideCount]);

  const [slideStep, setSlideStep] = useState(460 + 30);
  const sliderViewportRef = useRef(null);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 413px)");

    const updateSlideStep = () => {
      if (mq.matches && sliderViewportRef.current) {
        setSlideStep(sliderViewportRef.current.clientWidth);
      } else {
        setSlideStep(460 + 30);
      }
    };

    updateSlideStep();
    mq.addEventListener("change", updateSlideStep);
    window.addEventListener("resize", updateSlideStep);

    const el = sliderViewportRef.current;
    const ro =
      typeof ResizeObserver !== "undefined" && el
        ? new ResizeObserver(() => updateSlideStep())
        : null;
    if (el && ro) ro.observe(el);

    return () => {
      mq.removeEventListener("change", updateSlideStep);
      window.removeEventListener("resize", updateSlideStep);
      ro?.disconnect();
    };
  }, []);

  if (slideCount === 0) return null;

  return (
    <div
      className="w-full"
      onMouseEnter={() => setSliderPaused(true)}
      onMouseLeave={() => setSliderPaused(false)}
      onClick={(e) => e.preventDefault()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") e.preventDefault();
      }}
      role="presentation"
    >
      <div
        ref={sliderViewportRef}
        className="overflow-hidden w-full pt-[60px] max-lg:pt-12 max-md:pt-10 max-sm:pt-8 max-[413px]:pt-6"
      >
        <div
          className={`flex ${index === 0 ? "" : "transition-transform duration-700 ease-in-out"}`}
          style={{
            transform: `translateX(calc(-${index * slideStep}px))`,
          }}
        >
          {sliderItems.map((src, i) => {
            const originalIndex = i % slideCount;
            const slideHeading = slideTitles[originalIndex] || title;
            return (
              <div
                key={`${i}-${src}`}
                className="group flex-shrink-0 cursor-pointer max-[413px]:!mr-0 max-[413px]:!h-[230px] max-[413px]:!w-full max-[413px]:!min-w-0 max-[413px]:!shrink-0 max-[413px]:!grow-0 max-[413px]:!basis-full"
                style={{ width: "460px", height: "380px", marginRight: "30px" }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[15px]">
                  <img
                    src={src}
                    alt={slideHeading || ""}
                    draggable={false}
                    className="h-full w-full object-cover select-none rounded-[15px] transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Bottom Gradient Shade on hover */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#345261]/95 via-[#345261]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none rounded-b-[15px]" />

                  {/* Heading / Title on hover */}
                  <div className="absolute bottom-5 left-6 right-6 text-white z-10 transition-all duration-300 pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                    <h3 className="font-montserrat font-bold text-[22px] leading-[28px] text-white max-sm:text-[18px] max-sm:leading-[24px] line-clamp-1">
                      {slideHeading}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="flex justify-center items-center gap-2 pt-8 max-[413px]:pt-5"
        role="tablist"
        aria-label="Project images"
      >
        {list.map((src, i) => (
          <button
            key={`indicator-${src}-${i}`}
            type="button"
            role="tab"
            aria-selected={i === activeDotIndex}
            aria-label={`Go to slide ${i + 1} of ${slideCount}`}
            className="group py-2 px-1 cursor-pointer border-0 bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-[#345261] rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setIndex(i);
            }}
          >
            <span
              className={`block h-[5px] rounded-full transition-all duration-400 ease-out ${i === activeDotIndex
                ? "w-10 bg-[#345261] shadow-sm"
                : "w-3.5 bg-gray-300 group-hover:bg-[#345261]/60 group-hover:w-5"
                }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

const PortfolioDetails = () => {
  const location = useLocation();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    type: "quote",
  });

  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);


  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (form.name.length > 30) {
      newErrors.name = "Name cannot exceed 30 characters.";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!form.phone.trim()) {
      newErrors.phone = "Enter your phone number.";
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message field cannot be empty.";
    } else if (form.message.length > 1000) {
      newErrors.message = "Message cannot exceed 1000 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "name") {
      newValue = value.slice(0, 30);
    } else if (name === "phone") {
      newValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (name === "subject") {
      newValue = value.slice(0, 50);
    } else if (name === "message") {
      newValue = value.slice(0, 1000);
    }

    setForm({ ...form, [name]: newValue });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (validate() && !isSubmitting) {
      setIsSubmitting(true);
      try {
        const res = await fetch(`${API_BASE}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        if (!res.ok) throw new Error("Submission failed");

        setShowToast(true);
        setForm({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } catch (err) {
        console.error("Error submitting form:", err);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const stateProject = location.state;
  const projectFromData =
    allProjects.find(
      (p) => p.id === stateProject?.id || p.title?.toLowerCase() === stateProject?.title?.toLowerCase()
    ) || allProjects[0];

  const currentProject = {
    ...projectFromData,
    ...stateProject,
    image: projectFromData.image || stateProject?.image || stateProject?.img,
    gallery: projectFromData.gallery || stateProject?.gallery || [projectFromData.image],
    slideTitles: projectFromData.slideTitles || stateProject?.slideTitles || [],
    clientInfo: projectFromData.clientInfo || stateProject?.clientInfo,
    projectChallenges: projectFromData.projectChallenges || stateProject?.projectChallenges,
    technologies: projectFromData.technologies || stateProject?.technologies,
    keyFeaturesDeveloped: projectFromData.keyFeaturesDeveloped || stateProject?.keyFeaturesDeveloped,
    users: projectFromData.users || stateProject?.users,
    projectOutcomes: projectFromData.projectOutcomes || stateProject?.projectOutcomes,
    before: projectFromData.before || stateProject?.before,
    after: projectFromData.after || stateProject?.after,
  };

  return (
    <div className="font-sans text-gray-700 max-xl:overflow-x-clip max-[413px]:overflow-x-clip">
      {/* HERO SECTION */}
      <div className="relative h-[360px] w-full max-xl:h-[340px] max-lg:h-[330px] max-md:h-[310px] max-[413px]:h-[300px]">
        <img
          src={currentProject.image}
          alt={currentProject.title}
          className="w-full h-full object-cover object-bottom"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* text */}
        <div className="absolute inset-0 flex flex-col justify-end px-[100px] pb-[100px] text-white max-xl:px-16 max-xl:pb-20 max-lg:px-12 max-lg:pb-16 max-md:px-8 max-md:pb-14 max-sm:px-6 max-sm:pb-12 max-[413px]:px-5 max-[413px]:pb-10">
          <p className="font-montserrat font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase text-white max-lg:text-[13px] max-lg:leading-5 max-md:text-[13px] max-sm:text-[12px] max-sm:leading-[18px] max-sm:tracking-[1.8px] max-[413px]:text-[12px] max-[413px]:leading-[18px] max-[413px]:tracking-[1.6px]">
            Home / Portfolio
          </p>

          <h1 className="font-montserrat font-semibold text-[54px] leading-[62px] text-white mt-2 max-xl:text-[48px] max-xl:leading-[56px] max-lg:text-[44px] max-lg:leading-[52px] max-md:text-[38px] max-md:leading-[46px] max-sm:text-[34px] max-sm:leading-[40px] max-[413px]:text-[22px] max-[413px]:leading-[28px]">
            {currentProject.title}
          </h1>
        </div>
      </div>

      {/* SLIDER SECTION */}
      {/* SLIDER SECTION */}
      <div className="pl-[100px] pb-[60px] max-xl:pl-16 max-xl:pr-8 max-xl:pb-14 max-lg:pl-12 max-lg:pr-6 max-lg:pb-12 max-md:pl-8 max-md:pr-5 max-md:pb-11 max-sm:pl-6 max-sm:pr-4 max-sm:pb-10 max-[413px]:pl-4 max-[413px]:pr-4 max-[413px]:pb-10">
        <ProjectImageSlider
          key={currentProject.id}
          images={currentProject.gallery ?? [currentProject.image]}
          title={currentProject.title}
          slideTitles={currentProject.slideTitles}
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="flex items-start gap-[120px] px-[100px] pb-[120px] border-b border-[#E5E5E5] max-xl:gap-24 max-xl:px-16 max-xl:pb-24 max-lg:gap-20 max-lg:px-12 max-lg:pb-20 max-md:flex-col max-md:gap-12 max-md:px-8 max-md:pb-16 max-sm:gap-11 max-sm:px-6 max-sm:pb-19 max-[413px]:flex-col max-[413px]:gap-10 max-[413px]:px-5 max-[413px]:pb-12">
        {/* LEFT SIDE */}
        <div className="flex-[2] max-md:w-full max-md:min-w-0 max-[413px]:w-full max-[413px]:min-w-0">
          <h3 className="mb-5 font-montserrat font-semibold text-[38px] leading-[52px] tracking-[0%] text-[#345261] align-middle max-xl:mb-4 max-xl:text-[34px] max-xl:leading-[46px] max-lg:text-[32px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[40px] max-sm:text-[28px] max-sm:leading-[36px] max-[413px]:mb-4 max-[413px]:text-[22px] max-[413px]:leading-[28px]">
            Description
          </h3>

          <p className="font-montserrat font-normal text-[18px] leading-[28px] tracking-[0%] text-[#6B6A66] text-justify align-middle max-lg:text-[17px] max-lg:leading-[27px] max-md:text-left max-md:text-[16px] max-md:leading-[26px] max-sm:text-[15px] max-sm:leading-[25px] max-[413px]:text-left max-[413px]:text-[16px] max-[413px]:leading-[26px]">
            {currentProject.fullDesc}
          </p>

          {currentProject.clientInfo && (
            <>
              <h4 className="mt-9 mb-4 font-montserrat font-semibold text-[26px] leading-[36px] tracking-[0%] text-[#345261] align-middle max-xl:mt-8 max-xl:mb-3.5 max-xl:text-[24px] max-xl:leading-[34px] max-lg:mt-7 max-lg:text-[22px] max-lg:leading-[30px] max-md:mt-6 max-md:text-[20px] max-md:leading-[28px] max-sm:mt-5 max-sm:text-[19px] max-sm:leading-[26px] max-[413px]:mt-5 max-[413px]:mb-3 max-[413px]:text-[18px] max-[413px]:leading-[24px]">
                Client Information
              </h4>
              <p className="font-montserrat font-normal text-[18px] leading-[28px] tracking-[0%] text-[#6B6A66] text-justify align-middle max-lg:text-[17px] max-lg:leading-[27px] max-md:text-left max-md:text-[16px] max-md:leading-[26px] max-sm:text-[15px] max-sm:leading-[25px] max-[413px]:text-left max-[413px]:text-[16px] max-[413px]:leading-[26px]">
                {currentProject.clientInfo}
              </p>
            </>
          )}

          {currentProject.projectChallenges && (
            <>
              <h4 className="mt-9 mb-4 font-montserrat font-semibold text-[26px] leading-[36px] tracking-[0%] text-[#345261] align-middle max-xl:mt-8 max-xl:mb-3.5 max-xl:text-[24px] max-xl:leading-[34px] max-lg:mt-7 max-lg:text-[22px] max-lg:leading-[30px] max-md:mt-6 max-md:text-[20px] max-md:leading-[28px] max-sm:mt-5 max-sm:text-[19px] max-sm:leading-[26px] max-[413px]:mt-5 max-[413px]:mb-3 max-[413px]:text-[18px] max-[413px]:leading-[24px]">
                Project Challenges
              </h4>
              {Array.isArray(currentProject.projectChallenges) ? (
                currentProject.projectChallenges.map((para, idx) => (
                  <p
                    key={idx}
                    className="font-montserrat font-normal text-[18px] leading-[28px] tracking-[0%] text-[#6B6A66] text-justify align-middle mb-4 max-lg:text-[17px] max-lg:leading-[27px] max-md:text-left max-md:text-[16px] max-md:leading-[26px] max-md:mb-3 max-sm:text-[15px] max-sm:leading-[25px] max-[413px]:text-left max-[413px]:text-[16px] max-[413px]:leading-[26px] last:mb-0"
                  >
                    {para}
                  </p>
                ))
              ) : (
                <p className="font-montserrat font-normal text-[18px] leading-[28px] tracking-[0%] text-[#6B6A66] text-justify align-middle max-lg:text-[17px] max-lg:leading-[27px] max-md:text-left max-md:text-[16px] max-md:leading-[26px] max-sm:text-[15px] max-sm:leading-[25px] max-[413px]:text-left max-[413px]:text-[16px] max-[413px]:leading-[26px]">
                  {currentProject.projectChallenges}
                </p>
              )}
            </>
          )}

          {currentProject.technologies && (
            <>
              <h4 className="mt-9 mb-4 font-montserrat font-semibold text-[26px] leading-[36px] tracking-[0%] text-[#345261] align-middle max-xl:mt-8 max-xl:mb-3.5 max-xl:text-[24px] max-xl:leading-[34px] max-lg:mt-7 max-lg:text-[22px] max-lg:leading-[30px] max-md:mt-6 max-md:text-[20px] max-md:leading-[28px] max-sm:mt-5 max-sm:text-[19px] max-sm:leading-[26px] max-[413px]:mt-5 max-[413px]:mb-3 max-[413px]:text-[18px] max-[413px]:leading-[24px]">
                Technologies Used
              </h4>
              {typeof currentProject.technologies === "string" ? (
                <p className="font-montserrat font-normal text-[18px] leading-[28px] tracking-[0%] text-[#6B6A66] text-justify align-middle max-lg:text-[17px] max-lg:leading-[27px] max-md:text-left max-md:text-[16px] max-md:leading-[26px] max-sm:text-[15px] max-sm:leading-[25px] max-[413px]:text-left max-[413px]:text-[16px] max-[413px]:leading-[26px]">
                  {currentProject.technologies}
                </p>
              ) : (
                <>
                  {currentProject.technologies.intro && (
                    <p className="font-montserrat font-normal text-[18px] leading-[28px] tracking-[0%] text-[#6B6A66] text-justify align-middle mb-4 max-lg:text-[17px] max-lg:leading-[27px] max-md:text-left max-md:text-[16px] max-md:leading-[26px] max-md:mb-3 max-sm:text-[15px] max-sm:leading-[25px] max-[413px]:text-left max-[413px]:text-[16px] max-[413px]:leading-[26px]">
                      {currentProject.technologies.intro}
                    </p>
                  )}
                  {currentProject.technologies.list && (
                    <ul className="space-y-3 pl-5 list-disc max-lg:space-y-2.5 max-md:pl-4 max-sm:space-y-2.5 max-[413px]:space-y-2.5 max-[413px]:pl-4">
                      {currentProject.technologies.list.map((tech, idx) => (
                        <li
                          key={idx}
                          className="leading-[28px] text-[18px] align-middle max-lg:text-[17px] max-lg:leading-[27px] max-md:text-[16px] max-md:leading-[26px] max-sm:text-[15px] max-sm:leading-[25px] max-[413px]:text-[15px] max-[413px]:leading-[24px]"
                        >
                          {/* Name (SemiBold) */}
                          <span className="font-semibold text-[#161C2D]">
                            {tech.name}
                          </span>{" "}
                          –{" "}
                          {/* Description (Regular) */}
                          <span className="font-normal text-[#6B6A66]">
                            {tech.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </>
          )}

          {(currentProject.keyFeaturesDeveloped || (currentProject.functionalities && currentProject.functionalities.length > 0)) && (
            <>
              <h4 className="mt-9 mb-4 font-montserrat font-semibold text-[26px] leading-[36px] tracking-[0%] text-[#345261] align-middle max-xl:mt-8 max-xl:mb-3.5 max-xl:text-[24px] max-xl:leading-[34px] max-lg:mt-7 max-lg:text-[22px] max-lg:leading-[30px] max-md:mt-6 max-md:text-[20px] max-md:leading-[28px] max-sm:mt-5 max-sm:text-[19px] max-sm:leading-[26px] max-[413px]:mt-5 max-[413px]:mb-3 max-[413px]:text-[18px] max-[413px]:leading-[24px]">
                {currentProject.keyFeaturesDeveloped ? "Key Features Developed" : "The key functionalities include:"}
              </h4>
              {currentProject.keyFeaturesDeveloped && (
                <p className="font-montserrat font-normal text-[18px] leading-[28px] tracking-[0%] text-[#6B6A66] text-justify align-middle max-lg:text-[17px] max-lg:leading-[27px] max-md:text-left max-md:text-[16px] max-md:leading-[26px] max-sm:text-[15px] max-sm:leading-[25px] max-[413px]:text-left max-[413px]:text-[16px] max-[413px]:leading-[26px]">
                  {currentProject.keyFeaturesDeveloped}
                </p>
              )}
              {currentProject.functionalities && currentProject.functionalities.length > 0 && (
                <ul className="mt-4 space-y-3 pl-5 list-disc max-lg:space-y-2.5 max-md:mt-3 max-md:pl-4 max-sm:space-y-2.5 max-[413px]:mt-3 max-[413px]:space-y-2.5 max-[413px]:pl-4">
                  {currentProject.functionalities.map((func, idx) => (
                    <li
                      key={idx}
                      className="leading-[28px] text-[18px] align-middle max-lg:text-[17px] max-lg:leading-[27px] max-md:text-[16px] max-md:leading-[26px] max-sm:text-[15px] max-sm:leading-[25px] max-[413px]:text-[15px] max-[413px]:leading-[24px]"
                    >
                      {/* Title (SemiBold) */}
                      <span className="font-semibold text-[#161C2D]">
                        {func.title}:
                      </span>{" "}
                      {/* Description (Regular) */}
                      <span className="font-normal text-[#6B6A66]">
                        {func.description}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}

          {currentProject.users && (
            <>
              <h4 className="mt-9 mb-4 font-montserrat font-semibold text-[26px] leading-[36px] tracking-[0%] text-[#345261] align-middle max-xl:mt-8 max-xl:mb-3.5 max-xl:text-[24px] max-xl:leading-[34px] max-lg:mt-7 max-lg:text-[22px] max-lg:leading-[30px] max-md:mt-6 max-md:text-[20px] max-md:leading-[28px] max-sm:mt-5 max-sm:text-[19px] max-sm:leading-[26px] max-[413px]:mt-5 max-[413px]:mb-3 max-[413px]:text-[18px] max-[413px]:leading-[24px]">
                Target Users
              </h4>
              <p className="font-montserrat font-normal text-[18px] leading-[28px] tracking-[0%] text-[#6B6A66] text-justify align-middle max-lg:text-[17px] max-lg:leading-[27px] max-md:text-left max-md:text-[16px] max-md:leading-[26px] max-sm:text-[15px] max-sm:leading-[25px] max-[413px]:text-left max-[413px]:text-[16px] max-[413px]:leading-[26px]">
                {currentProject.users}
              </p>
            </>
          )}

          {currentProject.projectOutcomes && (
            <>
              <h4 className="mt-9 mb-4 font-montserrat font-semibold text-[26px] leading-[36px] tracking-[0%] text-[#345261] align-middle max-xl:mt-8 max-xl:mb-3.5 max-xl:text-[24px] max-xl:leading-[34px] max-lg:mt-7 max-lg:text-[22px] max-lg:leading-[30px] max-md:mt-6 max-md:text-[20px] max-md:leading-[28px] max-sm:mt-5 max-sm:text-[19px] max-sm:leading-[26px] max-[413px]:mt-5 max-[413px]:mb-3 max-[413px]:text-[18px] max-[413px]:leading-[24px]">
                Project Outcomes
              </h4>
              <p className="font-montserrat font-normal text-[18px] leading-[28px] tracking-[0%] text-[#6B6A66] text-justify align-middle max-lg:text-[17px] max-lg:leading-[27px] max-md:text-left max-md:text-[16px] max-md:leading-[26px] max-sm:text-[15px] max-sm:leading-[25px] max-[413px]:text-left max-[413px]:text-[16px] max-[413px]:leading-[26px]">
                {currentProject.projectOutcomes}
              </p>
            </>
          )}

          {currentProject.before && (
            <>
              <h4 className="mt-9 mb-4 font-montserrat font-semibold text-[26px] leading-[36px] tracking-[0%] text-[#345261] align-middle max-xl:mt-8 max-xl:mb-3.5 max-xl:text-[24px] max-xl:leading-[34px] max-lg:mt-7 max-lg:text-[22px] max-lg:leading-[30px] max-md:mt-6 max-md:text-[20px] max-md:leading-[28px] max-sm:mt-5 max-sm:text-[19px] max-sm:leading-[26px] max-[413px]:mt-5 max-[413px]:mb-3 max-[413px]:text-[18px] max-[413px]:leading-[24px]">
                Before — Existing Workflow & Experience
              </h4>
              {Array.isArray(currentProject.before) ? (
                currentProject.before.map((para, idx) => (
                  <p
                    key={idx}
                    className="font-montserrat font-normal text-[18px] leading-[28px] tracking-[0%] text-[#6B6A66] text-justify align-middle mb-4 max-lg:text-[17px] max-lg:leading-[27px] max-md:text-left max-md:text-[16px] max-md:leading-[26px] max-md:mb-3 max-sm:text-[15px] max-sm:leading-[25px] max-[413px]:text-left max-[413px]:text-[16px] max-[413px]:leading-[26px] last:mb-0"
                  >
                    {para}
                  </p>
                ))
              ) : (
                <p className="font-montserrat font-normal text-[18px] leading-[28px] tracking-[0%] text-[#6B6A66] text-justify align-middle max-lg:text-[17px] max-lg:leading-[27px] max-md:text-left max-md:text-[16px] max-md:leading-[26px] max-sm:text-[15px] max-sm:leading-[25px] max-[413px]:text-left max-[413px]:text-[16px] max-[413px]:leading-[26px]">
                  {currentProject.before}
                </p>
              )}
            </>
          )}

          {currentProject.after && (
            <>
              <h4 className="mt-9 mb-4 font-montserrat font-semibold text-[26px] leading-[36px] tracking-[0%] text-[#345261] align-middle max-xl:mt-8 max-xl:mb-3.5 max-xl:text-[24px] max-xl:leading-[34px] max-lg:mt-7 max-lg:text-[22px] max-lg:leading-[30px] max-md:mt-6 max-md:text-[20px] max-md:leading-[28px] max-sm:mt-5 max-sm:text-[19px] max-sm:leading-[26px] max-[413px]:mt-5 max-[413px]:mb-3 max-[413px]:text-[18px] max-[413px]:leading-[24px]">
                After — Redesigned Workflow & Experience
              </h4>
              {Array.isArray(currentProject.after) ? (
                currentProject.after.map((para, idx) => (
                  <p
                    key={idx}
                    className="font-montserrat font-normal text-[18px] leading-[28px] tracking-[0%] text-[#6B6A66] text-justify align-middle mb-4 max-lg:text-[17px] max-lg:leading-[27px] max-md:text-left max-md:text-[16px] max-md:leading-[26px] max-md:mb-3 max-sm:text-[15px] max-sm:leading-[25px] max-[413px]:text-left max-[413px]:text-[16px] max-[413px]:leading-[26px] last:mb-0"
                  >
                    {para}
                  </p>
                ))
              ) : (
                <p className="font-montserrat font-normal text-[18px] leading-[28px] tracking-[0%] text-[#6B6A66] text-justify align-middle max-lg:text-[17px] max-lg:leading-[27px] max-md:text-left max-md:text-[16px] max-md:leading-[26px] max-sm:text-[15px] max-sm:leading-[25px] max-[413px]:text-left max-[413px]:text-[16px] max-[413px]:leading-[26px]">
                  {currentProject.after}
                </p>
              )}
            </>
          )}
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="flex-1 max-md:w-full max-md:min-w-0 max-[413px]:w-full max-[413px]:min-w-0 md:sticky md:top-[150px] self-start">
          <h4 className="mb-9 font-montserrat font-semibold text-[24px] leading-[32px] tracking-[0%] text-[#345261] align-middle max-lg:mb-8 max-md:mb-7 max-sm:mb-6 max-[413px]:mb-6 max-[413px]:text-[22px] max-[413px]:leading-[28px]">
            Get A Quote
          </h4>
          <div className="flex-1 p-[30px] rounded-md bg-white shadow h-fit max-xl:p-7 max-lg:p-6 max-md:p-5 max-sm:p-5 max-[413px]:p-5">
            <form
              className="space-y-3 max-xl:space-y-3.5 max-lg:space-y-3 max-md:space-y-3.5 max-sm:space-y-4 max-[413px]:space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex gap-[30px] mb-4 max-xl:gap-6 max-lg:gap-5 max-md:gap-4 max-sm:gap-3 max-sm:mb-3 max-[413px]:flex-col max-[413px]:gap-4 max-[413px]:mb-0">
                <div className="flex-1 flex flex-col max-md:min-w-0 max-[413px]:w-full relative">
                  <label
                    htmlFor="name"
                    className="mb-2 font-montserrat font-medium text-[14px] uppercase leading-[14px] text-[#182F27] max-md:text-[13px] max-md:leading-[13px] max-sm:mb-1.5"
                  >
                    Your Name *
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name *"
                      value={form.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300"} px-3 py-3 text-[12px] font-montserrat font-medium placeholder-[#34526166] leading-[12px] rounded-[10px] outline-none focus:border-[#345261] max-lg:py-3.5 max-md:py-3.5 max-sm:px-3 max-sm:text-[11px]`}
                    />
                    {focusedField === "name" && (
                      <span className="absolute right-3 bottom-2 text-[10px] text-gray-400 font-montserrat pointer-events-none">
                        {form.name.length}/30
                      </span>
                    )}
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="flex-1 flex flex-col max-md:min-w-0 max-[413px]:w-full">
                  <label
                    htmlFor="email"
                    className="mb-2 font-montserrat font-medium text-[14px] uppercase leading-[14px] text-[#182F27] max-md:text-[13px] max-md:leading-[13px] max-md:mb-1.5 max-sm:mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={handleInputChange}
                    className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"} px-3 py-3 text-[12px] font-montserrat font-medium placeholder-[#34526166] leading-[12px] rounded-[10px] outline-none focus:border-[#345261] max-lg:py-3.5 max-md:py-3.5 max-sm:px-3 max-sm:text-[11px]`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="flex gap-[30px] mb-4 max-xl:gap-6 max-lg:gap-5 max-md:gap-4 max-sm:gap-3 max-sm:mb-3 max-[413px]:flex-col max-[413px]:gap-4 max-[413px]:mb-0">
                <div className="flex-1 flex flex-col max-md:min-w-0 max-[413px]:w-full">
                  <label
                    htmlFor="phone"
                    className="mb-2 font-montserrat font-medium text-[14px] uppercase leading-[14px] text-[#182F27] max-md:text-[13px] max-md:leading-[13px] max-md:mb-1.5 max-sm:mb-1.5"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Phone Number *"
                    value={form.phone}
                    onChange={handleInputChange}
                    className={`w-full border ${errors.phone ? "border-red-500" : "border-gray-300"} px-3 py-3 text-[12px] font-montserrat font-medium placeholder-[#34526166] leading-[12px] rounded-[10px] outline-none focus:border-[#345261] max-lg:py-3.5 max-md:py-3.5 max-sm:px-3 max-sm:text-[11px]`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>
                  )}
                </div>
                <div className="flex-1 flex flex-col max-md:min-w-0 max-[413px]:w-full">
                  <label
                    htmlFor="subject"
                    className="mb-2 font-montserrat font-medium text-[14px] uppercase leading-[14px] text-[#182F27] max-md:text-[13px] max-md:leading-[13px] max-md:mb-1.5 max-sm:mb-1.5"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      value={form.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full border ${errors.subject ? "border-red-500" : "border-gray-300"} px-3 py-3 text-[12px] font-montserrat font-medium placeholder-[#34526166] leading-[12px] rounded-[10px] outline-none focus:border-[#345261] max-lg:py-3.5 max-md:py-3.5 max-sm:px-3 max-sm:text-[11px]`}
                    />
                    {focusedField === "subject" && (
                      <span className="absolute right-3 bottom-2 text-[10px] text-gray-400 font-montserrat pointer-events-none">
                        {form.subject.length}/50
                      </span>
                    )}
                  </div>
                  {errors.subject && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.subject}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col max-md:w-full max-[413px]:w-full relative">
                <label
                  htmlFor="message"
                  className="mb-2 font-montserrat font-medium text-[14px] uppercase leading-[14px] text-[#182F27] max-lg:mb-4 max-md:mb-3 max-md:text-[13px] max-md:leading-[13px] max-sm:mb-4"
                >
                  Message *
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message *"
                    value={form.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full border mb-3 ${errors.message ? "border-red-500" : "border-gray-300"} px-3 py-4 text-[12px] font-montserrat font-medium placeholder-[#34526166] leading-[12px] rounded-[10px] h-[80px] outline-none focus:border-[#345261] max-lg:mb-4 max-lg:py-3.5 max-md:mb-4 max-sm:min-h-[88px] max-[413px]:min-h-[100px]`}
                  ></textarea>
                  {focusedField === "message" && (
                    <span className="absolute right-3 bottom-4 text-[10px] text-gray-400 font-montserrat pointer-events-none">
                      {form.message.length}/1000
                    </span>
                  )}
                </div>
                {errors.message && (
                  <p className="text-red-500 text-[11px] mb-4">{errors.message}</p>
                )}
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="cursor-pointer px-[26px] py-[15px] bg-[#345261] text-white text-[18px] leading-[100%] tracking-[0%] text-center align-middle font-bold font-[Montserrat] rounded-[10px] hover:bg-[#2a3d45] transition duration-300 max-lg:px-6 max-lg:py-3.5 max-lg:text-[17px] max-md:w-full max-md:py-3.5 max-md:text-[16px] max-sm:px-5 max-[413px]:block max-[413px]:w-full disabled:opacity-50"
                >
                  {isSubmitting ? "SENDING..." : "Submit"}
                </button>

                {/* Success Toast */}
                <div
                  className={`flex items-center gap-2 px-4 py-3 rounded-[10px] transition-all duration-500 ease-out ${showToast
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4 pointer-events-none"
                    }`}
                  style={{
                    background: "linear-gradient(135deg, #2f4858 0%, #395563 100%)",
                  }}
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-400/30 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-emerald-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-white font-montserrat text-[12px] font-medium whitespace-nowrap">
                    Message sent successfully!
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Support Section */}
      <div className="-mt-[40px] relative z-10 max-xl:-mt-9 max-lg:-mt-8 max-md:-mt-7 max-sm:-mt-6 max-[413px]:-mt-6">
        <Support />
      </div>
    </div>
  );
};

export default PortfolioDetails;
