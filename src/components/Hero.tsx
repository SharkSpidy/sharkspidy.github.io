import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      {/* Greeting */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
          Joseph Shibu
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl"
      >
        A passionate Computer Vision & Web Developer, turning ideas into
        interactive realities.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8 flex gap-4 flex-wrap justify-center"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-2xl bg-purple-600 text-white font-medium hover:bg-purple-700 dark:hover:bg-purple-500 transition transform hover:scale-105 shadow-lg"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="px-6 py-3 rounded-2xl bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition transform hover:scale-105 shadow-lg"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
