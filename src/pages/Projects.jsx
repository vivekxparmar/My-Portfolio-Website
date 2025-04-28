import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Mental Wellness Tracker",
    description:
      "A comprehensive MERN Stack application featuring mood tracking, journaling with sentiment analysis, and interactive data visualization to help users monitor their mental health over time.",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
    ],
    link: "https://mental-wellness-tracker-app.vercel.app",
    githubLink: "https://github.com/vivekxparmar/Mental-Wellness-Tracker-App",
    image:
      "https://www.healthsource-solutions.com/wp-content/uploads/2024/05/human-brain-growing-from-a-flower-watering-can-web.jpg", // Add your image path
  },
  {
    title: "Alumni Association Platform",
    description:
      "A full-featured networking platform for university alumni with event management, news sharing, and professional networking capabilities to maintain lifelong connections.",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "JWT Auth",
    ],
    link: "https://github.com/RohitChhipa/Alumni_Association_Plateform",
    githubLink: "https://github.com/RohitChhipa/Alumni_Association_Plateform",
    image:
      "https://www.thinqloud.com/wp-content/uploads/2020/03/alumni-img-11-1.jpg", // Add your image path
  },
  {
    title: "Men's Ethnic Wear eCommerce",
    description:
      "A complete eCommerce solution for traditional men's clothing with product catalog, shopping cart, and secure checkout process built with PHP and MySQL.",
    techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/vivekxparmar/Mens-Ethnic-Wear-Website",
    githubLink: "https://github.com/vivekxparmar/Mens-Ethnic-Wear-Website",
    image: "https://southindiafashion.com/wp-content/uploads/2019/11/main.jpg", // Add your image path
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-indigo-600">Projects</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my featured projects. Each one represents unique
            challenges and learning experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                link={project.link}
                githubLink={project.githubLink}
                image={project.image}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Want to see more of my work?
          </h3>
          <a
            href="https://github.com/vivekxparmar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium"
          >
            Visit My GitHub
            <svg
              className="w-4 h-4"
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
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
