import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer Intern",
    company: "Devagnos",
    date: "June 2022 - July 2022",
    responsibilities: [
      "Developed reusable front-end components.",
    "Contributed to the design of a  web application.", 
    "Proposed UI/UX enhancements in collaboration with the product team.",
    ],
  },
  {
    job: "Data Analyst Intern",
    company: "Mobelite",
    date: "June 2023 - July 2023",
    responsibilities: [
      "Conducted in-depth analysis of HR data to extract strategic insights.",
       "Built interactive dashboards using Power BI.",
      "Modeled and visualized key data to support decision-making processes.",
    ],
  },
  {
    job: "Data Analyst Intern",
    company: "KPMG",
    date: "September 2023 - October 2023",
    responsibilities: [
      "Implemented a dynamic query engine for data analysis.",
    "Analyzed unstructured data using MongoDB and PySpark.",
    "Developed  reports and dashboards using Flask and SQL.",
    ],
  },
   
  {
    job: "Data Analyst Intern",
    company: "Sotacib",
    date: "Mars 2024 - November 2024",
    responsibilities: [
    "Created Power BI dashboards for inventory and consumption monitoring.",
    "Implemented predictive models for future consumption using Python.",
    ],
  },
  
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 3 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
