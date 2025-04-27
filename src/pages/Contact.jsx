import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, like sending it to an email or API
    alert("Message sent! We will get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-indigo-50 py-12 px-4 sm:px-6 lg:py-24"
      id="contact"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center text-indigo-700 mb-12"
        >
          Get In{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Touch
          </span>
        </motion.h1>

        <div className="flex flex-col lg:flex-row justify-center gap-12">
          {/* Left Section - Contact Info */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/3 space-y-8"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 text-center lg:text-left"
            >
              I'm currently open to new opportunities and collaborations.
              Whether you have a question or just want to say hi, I'll do my
              best to get back to you!
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="flex flex-col space-y-4"
            >
              <motion.a
                variants={itemVariants}
                href="mailto:parmarvivek04102004@gmail.com"
                className="flex items-center gap-3 text-indigo-600 hover:text-indigo-800 transition-colors p-3 rounded-lg hover:bg-indigo-50"
              >
                <div className="bg-indigo-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span>parmarvivek04102004@gmail.com</span>
              </motion.a>

              <motion.a
                variants={itemVariants}
                href="https://github.com/vivekxparmar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-indigo-600 hover:text-indigo-800 transition-colors p-3 rounded-lg hover:bg-indigo-50"
              >
                <div className="bg-indigo-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <span>github.com/vivekxparmar</span>
              </motion.a>

              <motion.a
                variants={itemVariants}
                href="https://www.linkedin.com/in/vivek-parmar-047009261/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-indigo-600 hover:text-indigo-800 transition-colors p-3 rounded-lg hover:bg-indigo-50"
              >
                <div className="bg-indigo-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <span>linkedin.com/in/vivek-parmar</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div variants={itemVariants} className="w-full lg:w-2/3">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
            >
              <motion.div
                variants={itemVariants}
                className="flex flex-col space-y-2"
              >
                <label
                  htmlFor="name"
                  className="text-lg text-gray-700 font-medium"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="Your Full Name"
                  required
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col space-y-2"
              >
                <label
                  htmlFor="email"
                  className="text-lg text-gray-700 font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="Your Email"
                  required
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col space-y-2"
              >
                <label
                  htmlFor="message"
                  className="text-lg text-gray-700 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition min-h-[150px]"
                  placeholder="Your Message"
                  required
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex justify-center"
              >
                <button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
