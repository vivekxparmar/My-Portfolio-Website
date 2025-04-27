import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaPhp,
  FaJava,
  FaPython,
  FaDatabase,
  FaLightbulb,
  FaPeopleCarry,
  FaBook,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiCplusplus,
  SiPostman,
  SiGithub,
  SiVercel,
  SiRender,
  SiJavascript,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillCategory = ({ category, skills, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay * 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mb-16"
    >
      <motion.h3
        variants={itemVariants}
        className="text-2xl text-indigo-700 mb-8 text-center tracking-wide"
      >
        {category}
      </motion.h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              y: -5,
              scale: 1.05,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 ease-in-out hover:bg-indigo-50 border border-indigo-100"
          >
            <div className="text-4xl text-indigo-600 mb-3 hover:text-indigo-800 transition-colors duration-300">
              {skill.icon}
            </div>
            <h4 className="text-md text-gray-800 tracking-wide text-center">
              {skill.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillCard = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const languages = [
    { name: "C", icon: <SiCplusplus /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
  ];

  const frontend = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
  ];

  const backend = [
    { name: "SQL", icon: <FaDatabase /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "PHP", icon: <FaPhp /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Render", icon: <SiRender /> },
  ];

  const otherSkills = [
    { name: "Problem Solver", icon: <FaLightbulb /> },
    { name: "Team Player", icon: <FaPeopleCarry /> },
    { name: "Continuous Learner", icon: <FaBook /> },
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20 bg-gradient-to-b from-white via-indigo-50 to-white"
      id="skills"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-indigo-700 mb-20 tracking-tight"
        >
          My{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Skills
          </span>
        </motion.h2>

        <SkillCategory category="Languages" skills={languages} delay={0} />
        <SkillCategory category="Frontend" skills={frontend} delay={1} />
        <SkillCategory category="Backend" skills={backend} delay={2} />
        <SkillCategory category="Tools" skills={tools} delay={3} />
        <SkillCategory category="Soft Skills" skills={otherSkills} delay={4} />
      </div>
    </motion.section>
  );
};

export default SkillCard;
