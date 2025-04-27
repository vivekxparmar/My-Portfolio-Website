import { motion } from "framer-motion";
import { FaLink, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
  title,
  description,
  techStack,
  link,
  githubLink,
  image,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
    >
      {/* Project Image */}
      {image && (
        <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      )}

      {/* Project Content */}
      <div className="p-6">
        {/* Project Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>

        {/* Project Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs sm:text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              <FiExternalLink />
              Live Demo
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              <FaGithub />
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
