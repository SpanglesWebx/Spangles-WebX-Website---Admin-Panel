// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
//   FaYoutube,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// import team1 from "../../../assets/Team1.jpg";
// import team2 from "../../../assets/Team2.jpg";
// import team3 from "../../../assets/Team3.jpg";

// const team = [
//   {
//     name: "Hal Drummond",
//     role: "Sales Manager",
//     desc: "Driving sales growth and building strong client relationships.",
//     img: team1,
//   },
//   {
//     name: "Devon Lane",
//     role: "Web Designer",
//     desc: "Driving sales growth and building strong client relationships.",
//     img: team2,
//   },
//   {
//     name: "Darlene Robertson",
//     role: "Nursing Assistant",
//     desc: "Driving sales growth and building strong client relationships.",
//     img: team3,
//   },
// ];

// export default function Team() {
//   return (
//     <div className="px-[100px] py-[80px] bg-[#ffffff] max-[1024px]:px-[60px] max-[768px]:px-6 max-[413px]:px-4 max-[768px]:py-[55px] max-[413px]:py-[45px]">
//       {/* Top Title */}
//       <p className=" font-bold text-[14px] leading-[100%] mb-5 text-[#395563] tracking-[1.43px] text-center uppercase max-[768px]:text-[13px] max-[413px]:text-[12px]">
//         OUR TEAM
//       </p>

//       <h2 className="mb-15 font-semibold text-[32px] leading-[42.3px] tracking-[-1.06px] text-center text-[#161C2D] max-[768px]:text-[28px] max-[768px]:leading-[36px] max-[413px]:text-[24px] max-[413px]:leading-[32px]">
//         The Team Behind Impactful <br /> Digital Experiences
//       </h2>

//       {/* Cards */}
//       <div className="grid grid-cols-3 max-[1201px]:grid-cols-2 max-[768px]:grid-cols-1 gap-[50px] max-[1024px]:gap-[40px] max-[768px]:gap-[30px] max-[413px]:gap-[25px]">
//         {team.map((member, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
//             className="bg-white rounded-[18px] p-[10px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
//           >
//             {/* Image */}
//             <div className="w-full h-[350px] max-[1201px]:h-[300px] max-[768px]:h-[400px] max-[413px]:h-[250px] mx-auto mb-5 overflow-hidden rounded-[14px]">
//               <img
//                 src={member.img}
//                 alt={member.name}
//                 className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
//               />
//             </div>

//             {/* Name */}
//             <h3 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0] mb-4 text-center align-middle text-[#395563] max-[768px]:text-[20px] max-[768px]:leading-[28px] max-[413px]:text-[18px] max-[413px]:leading-[24px]">
//               {member.name}
//             </h3>

//             {/* Role Badge */}
//             <div
//               className="inline-block px-4 py-2 rounded-[10px] bg-gray-100 
//   font-normal text-[18px] leading-[28px] tracking-[0] 
//  text-center text-[#182F27] mb-4 max-[768px]:text-[16px] max-[768px]:leading-[24px] max-[413px]:px-3 max-[413px]:py-1 max-[413px]:text-[14px] max-[413px]:leading-[22px]"
//             >
//               {member.role}
//             </div>

//             <p
//               className="mb-5 px-3 
//  font-montserrat font-normal text-[18px] leading-[28px] tracking-[0] 
//  text-center align-middle text-[#6B6A66] max-[768px]:text-[16px] max-[768px]:leading-[24px] max-[413px]:text-[14px] max-[413px]:leading-[22px]"
//             >
//               {member.desc}
//             </p>

//             {/* Social Icons */}
//             <div className="flex justify-center gap-3 mb-2.5">
//               <div className="bg-gray-100 p-3 rounded-[10px] cursor-pointer">
//                 <FaFacebookF size={16} />
//               </div>

//               <div className="bg-gray-100 p-3 rounded-[10px] cursor-pointer">
//                 <FaTwitter size={16} />
//               </div>

//               <div className="bg-gray-100 p-3 rounded-[10px] cursor-pointer">
//                 <FaLinkedinIn size={16} />
//               </div>

//               <div className="bg-gray-100 p-3 rounded-[10px] cursor-pointer">
//                 <FaInstagram size={16} />
//               </div>

//               {/* YouTube Icon */}
//               <div className="bg-gray-100 p-3 rounded-[10px] cursor-pointer">
//                 <FaYoutube size={16} />
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }




import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

import team1 from "../../../assets/IMG_0093.webp";
import team2 from "../../../assets/Team2.jpg";
import team3 from "../../../assets/Team3.jpg";

const team = [
  {
    name: "Robert Vincent C",
    role: "Managing Director",
    desc: "I strongly believe that innovation is the key to every successful business transformation. Our company is built on the foundation of quality service, client satisfaction, and a commitment to delivering solutions that truly make a difference. We strive to understand every client’s unique needs and provide reliable digital strategies that support their growth. Together with our dedicated team, we are shaping a future where technology becomes a powerful tool for success. ",
    img: team1,
  },
  {
    name: "Devon Lane",
    role: "Web Designer",
    desc: "Driving sales growth and building strong client relationships.",
    img: team2,
  },
  {
    name: "Darlene Robertson",
    role: "Nursing Assistant",
    desc: "Driving sales growth and building strong client relationships.",
    img: team3,
  },
];

export default function Team() {
  const member = team[0]; // Displaying only one card
  return (
    <div className="px-[100px] py-[80px] bg-[#ffffff] max-[1024px]:px-[60px] max-[768px]:px-6 max-[413px]:px-4 max-[768px]:py-[55px] max-[413px]:py-[45px]">
      {/* Top Title */}
      <p className=" font-bold text-[14px] leading-[100%] mb-5 text-[#395563] tracking-[1.43px] text-center uppercase max-[768px]:text-[13px] max-[413px]:text-[12px]">
        FROM THE DIRECTOR'S DESK
      </p>

      <h2 className="mb-15 font-semibold text-[32px] leading-[42.3px] tracking-[-1.06px] text-center text-[#161C2D] max-[768px]:text-[28px] max-[768px]:leading-[36px] max-[413px]:text-[24px] max-[413px]:leading-[32px]">
        Guiding Our Journey Toward<br /> Digital Excellence
      </h2>

      {/* Single Card - Modern Split Design */}
      <div className="flex flex-col items-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col min-[768px]:flex-row w-full max-w-[1100px] bg-white rounded-[32px] overflow-hidden shadow-[0_0_80px_-10px_rgba(0,0,0,0.12)] border border-gray-50"
        >
          {/* Image Section */}
          <div className="relative w-full min-[768px]:w-[42%] h-[320px] min-[768px]:h-[500px] overflow-hidden">
            {/* Inner Shade */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10 pointer-events-none" />
            <img
              src={member.img}
              alt={member.name}
              className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 p-8 min-[768px]:p-10 flex flex-col justify-center bg-white">
            <div className="inline-block px-3 py-1 rounded-full bg-[#345261]/10 text-[#345261] font-bold text-[12px] tracking-wider uppercase mb-6 w-fit">
              {member.role}
            </div>

            <h3 className="font-montserrat font-bold text-[32px] min-[1024px]:text-[42px] leading-[1.1] text-[#161C2D] mb-6">
              {member.name}
            </h3>

            <div className="w-70 h-[1px] bg-gradient-to-r from-[#345261] to-transparent mb-8"></div>

            <p className="font-montserrat text-[18px] leading-[1.6] text-[#6B6A66] mb-0 italic text-justify">
              "{member.desc}"
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
