import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";

const Home = () => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  const skills = [
    "C", "C++", "JAVA", "Python", "HTML", "CSS", "Tailwind CSS", "Node JS", "React JS", "Express JS", "SQL", "Mongo DB", "Git", "Github",
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 bg-gradient-to-b from-white to-indigo-50">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto py-16 md:py-16 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-800">
            MERN Stack Developer
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight"
        >
          Hi, I'm <span className="text-indigo-600">Vivek Parmar</span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          IT Engineering Student passionate about building digital solutions
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto"
        >
          I specialize in creating responsive, performant web applications with
          clean code and intuitive user experiences. Currently pursuing my
          degree while building projects that solve real problems.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium"
          >
            <FiMail className="text-lg" />
            Contact Me
          </Link>
          <a
            href="/Vivek_Resume.pdf"
            download
            className="flex items-center justify-center gap-2 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium"
          >
            <FiDownload className="text-lg" />
            Download Resume
          </a>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-xl shadow-sm p-8 sm:p-10"
        >
          <h3 className="text-2xl sm:text-3xl text-gray-900 mb-6 text-center">
            About Me
          </h3>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I'm currently pursuing my 3rd year in Information Technology at
              GCET College. With a strong foundation in both frontend and
              backend technologies, I'm focused on building full-stack
              applications that deliver real value.
            </p>
            <p>
              My journey in web development started with curiosity and has grown
              into a passion. I love the challenge of transforming complex
              problems into elegant, user-friendly solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source, or mentoring fellow students in
              programming.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Projects Preview Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl text-gray-900 mb-3">
              Featured Projects
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent works that showcase my skills and
              approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 w-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-lg font-medium">
                  Mental Wellness Tracker
                </span>
              </div>
              <div className="p-6">
                <h4 className="text-xl mb-2 text-gray-900">
                  Mental Wellness Tracker
                </h4>
                <p className="text-gray-600 mb-4">
                  A comprehensive MERN Stack application featuring mood
                  tracking, journaling with sentiment analysis, and data
                  visualization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800">
                    React
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800">
                    Node.js
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800">
                    MongoDB
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800">
                    Chart.js
                  </span>
                </div>
                <Link
                  to="/projects"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                >
                  View Project Details
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Project 2 Placeholder */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 w-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center">
                <span className="text-white text-lg font-medium">
                  E-commerce Platform
                </span>
              </div>
              <div className="p-6">
                <h4 className="text-xl mb-2 text-gray-900">
                  E-commerce Platform
                </h4>
                <p className="text-gray-600 mb-4">
                  Full-featured online store with product management, cart
                  functionality, and secure payment processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800">
                    HTML
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800">
                    CSS
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800">
                    SQL
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800">
                    PHP
                  </span>
                </div>
                <Link
                  to="/projects"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                >
                  View Project Details
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition-colors duration-200 font-medium"
            >
              View All Projects
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl text-gray-900 mb-3">
              Technical Skills
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I work with regularly
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-indigo-600 font-medium">{skill}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/skills"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition-colors duration-200 font-medium"
            >
              View All Skills
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Contact CTA Section */}
      <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 sm:p-10 text-white"
        >
          <h3 className="text-2xl sm:text-3xl mb-4">Have a project in mind?</h3>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance work or internship
            opportunities. Let's discuss how I can help bring your ideas to
            life!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full transition-colors duration-200 font-medium"
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
