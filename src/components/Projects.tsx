import { useState } from "react";
import { motion } from "framer-motion";

export const projects = [
  {
    title: "Volume Control",
    category: "Computer Vision",
    description:
      "Control your system volume like a Jedi — just by moving your fingers! No buttons, no knobs — just the power of your hand.",
    image: "/images/p1.png",
    technologies: ["Python", "OpenCV", "MediaPipe", "numpy", "pycaw"],
    repoUrl: "https://github.com/sharkspidy/VolumeCtrl",
  },
  {
    title: "Background Changer",
    category: "Computer Vision",
    description: "Just a simple background changer!",
    image: "/images/p2.png",
    technologies: ["Python", "OpenCV", "MediaPipe", "Numpy", "CVZone"],
    repoUrl: "https://github.com/sharkspidy/BGRemove_CV",
  },
  {
    title: "Zoom-In Zoom-Out",
    category: "Computer Vision",
    description:
      "Dual hand zooming in and zooming out! Inspiration: Tom Cruise 😜",
    image: "/images/p3.png",
    technologies: ["OpenCV", "Numpy", "MediaPipe", "Python", "CVZone"],
    repoUrl: "https://github.com/sharkspidy/ZoomIn_ZoomOut",
  },
  {
    title: "Portfolio Website",
    category: "Web Dev",
    description:
      "A sleek personal portfolio built with React + Tailwind.",
    image: "/images/p4.png",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
    repoUrl: "#",
  },
  {
    title: "Smart Glove ISL",
    category: "Hardware",
    description:
      "Glove that converts Indian Sign Language to speech.",
    image: "/images/p5.png",
    technologies: ["Arduino", "Flex Sensors", "ML Model"],
    repoUrl: "#",
  },
  {
    title: "EventureX",
    category: "Initiatives",
    description:
      "Event management platform for students to earn.",
    image: "/images/p6.png",
    technologies: ["React", "Firebase", "TailwindCSS"],
    repoUrl: "#",
  },
];

const categories = ["All", "Web Dev", "Computer Vision", "Hardware", "Initiatives"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
        My <span className="text-purple-400">Projects</span>
      </h2>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition ${
              filter === cat
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {filtered.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="p-6 rounded-2xl bg-gray-900/40 backdrop-blur-lg shadow-lg hover:shadow-purple-500/30 transition border border-gray-700/40"
          >
            <img
              src={p.image}
              alt={p.title}
              className="rounded-lg mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm mb-3">{p.category}</p>
            <p className="text-gray-300 mb-3">{p.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-3">
              {p.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Repo Link */}
            {p.repoUrl && (
              <a
                href={p.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 text-sm hover:underline"
              >
                🔗 View Repository
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
