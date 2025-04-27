import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/vivekxparmar",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/vivek-parmar-047009261/",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      href: "https://x.com/VivekParmar000",
      label: "Twitter",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:vivek@example.com", // Replace with your email
      label: "Email",
    },
  ];

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-12 px-4 md:px-12 lg:px-[210px]">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h3 className="text-2xl font-bold">Vivek Parmar</h3>
        <p className="text-indigo-100">
          Full Stack Developer & IT Engineering Student
        </p>
        <p className="text-indigo-100 text-sm">
          Building digital solutions that make an impact
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h4 className="text-lg font-semibold">Quick Links</h4>
        <ul className="space-y-2">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-indigo-100 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h4 className="text-lg font-semibold">Connect With Me</h4>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ y: -3 }}
              className="text-2xl text-white hover:text-indigo-200 transition-colors duration-200"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        <p className="text-indigo-100 text-sm mt-4">
          Let's collaborate on exciting projects!
        </p>
      </motion.div>

    </div>
  </div>
</footer>

  );
};

export default Footer;
