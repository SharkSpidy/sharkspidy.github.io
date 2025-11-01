import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-4 
                 bg-white/70 dark:bg-gray-900/30 backdrop-blur-lg 
                 border-b border-gray-200 dark:border-gray-700/40"
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-gray-900 dark:text-white text-2xl font-bold">Joseph Shibu</h1>
        <ul className="flex gap-6 text-gray-700 dark:text-gray-300 font-medium">
          <li><a href="#about" className="hover:text-purple-600 dark:hover:text-purple-400">About</a></li>
          <li><a href="#projects" className="hover:text-purple-600 dark:hover:text-purple-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400">Contact</a></li>
        </ul>
      </nav>
    </motion.header>
  );
}
