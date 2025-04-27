import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiBook, FiCode, FiCpu, FiTarget, FiMail } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";

const About = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const aboutPoints = [
    {
      icon: <FaHandshake className="text-indigo-600 text-xl" />,
      text: "Hello, I'm Vivek Parmar, an IT Engineering student passionate about building impactful web applications.",
    },
    {
      icon: <FiBook className="text-indigo-600 text-xl" />,
      text: "Currently in 3rd year at GCET College pursuing a degree in Information Technology.",
    },
    {
      icon: <FiCode className="text-indigo-600 text-xl" />,
      text: "I work with the MERN Stack (MongoDB, Express, React, Node.js), and I'm proficient in C++, Java, Python.",
    },
    {
      icon: <FiCpu className="text-indigo-600 text-xl" />,
      text: "I love creating user-centric, dynamic web applications and continuously improving my skills.",
    },
    {
      icon: <FiCpu className="text-indigo-600 text-xl" />,
      text: "I am deeply interested in AI/ML technologies and keep up with the latest industry advancements.",
    },
    {
      icon: <FiTarget className="text-indigo-600 text-xl" />,
      text: "My goal is to secure an internship where I can contribute, learn, and grow as a full-stack developer.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 py-16 px-4 sm:px-6">
      {/* Main Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="max-w-6xl mx-auto"
      >
        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center"
        >
          About <span className="text-indigo-600">Me</span>
        </motion.h1>

        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Profile Photo */}
          <motion.div variants={item} className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-1">
                <img
                  src="Peters.jpg" // Replace with your image path
                  alt="Vivek Parmar"
                  className="w-full h-full rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-white rounded-full p-2 shadow-md">
                <div className="bg-indigo-600 text-white rounded-full p-2">
                  <FiCode className="text-xl" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div variants={container} className="max-w-2xl">
            <ul className="space-y-5">
              {aboutPoints.map((point, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex-shrink-0">{point.icon}</div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {point.text}
                  </p>
                </motion.li>
              ))}
            </ul>

            {/* Call to Action */}
            <motion.div
              variants={item}
              className="mt-12 text-center lg:text-left"
            >
              <p className="text-gray-600 mb-6 text-lg">
                Let's connect and explore opportunities to collaborate on
                exciting projects!
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-colors duration-200 text-lg font-medium"
              >
                <FiMail />
                Let's Connect
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Education Timeline (Optional) */}
        <motion.div variants={item} className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            My <span className="text-indigo-600">Education</span>
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 h-full w-0.5 bg-indigo-200 top-0"></div>

            {/* Timeline items */}
            <div className="space-y-8">
              {/* Current Education */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white">
                  <FiBook />
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900">
                    G H Patel College of Engineering & Technology
                  </h3>
                  <p className="text-indigo-600 font-medium">2022 - 2026</p>
                  <p className="text-gray-600 mt-2">
                    Bachelor of Technology in Information Technology
                  </p>
                  <p className="text-gray-500 mt-2">
                    Currently in 4th year with focus on web development and
                    software engineering
                  </p>
                </div>
              </div>

              {/* Previous Education */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white">
                  <FiBook />
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900">
                    St. Xavier's School, Gamdi, Anand
                  </h3>
                  <p className="text-indigo-600 font-medium">2009 - 2022</p>
                  <p className="text-gray-600 mt-2">
                    Schooling from KG to 12th
                  </p>
                  <p className="text-gray-500 mt-2">
                    Learnt foundational concepts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
