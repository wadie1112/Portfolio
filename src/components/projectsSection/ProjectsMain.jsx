import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import cardGameimage from "../../public/images/cardgame.png";
import ecomerceimage from "../../public/images/ecomerce.PNG";
import trackappimage from "../../public/images/trackapp.PNG";
const projects = [
  {
    name: "Le Voyant — Card Game",
    year: "May 2025",
    align: "left",
    image: "/images/cardgame.png", 
    link: "https://jeuvoyant.onrender.com",
  },
  {
    name: "E-commerce Website",
    year: "Mars 2025",
    align: "right",
    image: "/images/ecomerce.PNG", 
    link: "#",
  },
 
  {
    name: "Track Cars Website",
    year: "January 2025-Present",
    align: "left",
    image: "/images/trackapp.PNG", 
    link: "#",
  },
  
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
