import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { DiMysql } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { RiSvelteFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
import { IoLogoTableau } from "react-icons/io5";
import { SiGooglecloud } from "react-icons/si";
const skills = [
 
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "SQL",
    icon: DiMysql,
  },

  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill:"Linux",
    icon: FaLinux,
  },
  {
    skill:"Docker",
    icon: FaDocker,
  },
  {
    skill: "Tableau",
    icon: IoLogoTableau,
  },
  {
    skill: "Aws",
    icon: FaAws,
  },
 
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
