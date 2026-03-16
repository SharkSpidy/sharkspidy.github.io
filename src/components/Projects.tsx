import { useState } from "react";
import { motion } from "framer-motion";

export const projects = [
  {
    title: "JoyStick Website",
    category: "Web Dev",
    description:
      "Designed, built, and deployed a sleek website built with React + Tailwind.",
    image: "/images/joystick.png",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
    repoUrl: "https://joystick-ae-org.vercel.app/",
  },
  {
    title: "PRIME",
    category: "Web Dev",
    description:
      "Project Repository and Integrated Monitoring Environment.",
    image: "/images/PRIME.jpg",
    technologies: ["Figma", "React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    repoUrl: "https://github.com/sharkspidy/backupprime",
  },
  {
    title: "EventureX",
    category: "Initiatives",
    description:
      "Designed an Event management platform for students to earn.",
    image: "/images/eventurex.png",
    technologies: ["React", "Firebase", "TailwindCSS"],
    repoUrl: "https://eventurex25.github.io/",
  },
  {
    title: "SHN Design",
    category: "Web Dev",
    description: "Created a Retro gaming design for SHN's website.",
    image: "/images/shndesign.png",
    technologies: ["Figma", "HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/sharkspidy/shn_website",
  },
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
    title: "Zoom-In Zoom-Out",
    category: "Computer Vision",
    description:
      "Dual hand zooming in and zooming out! Inspiration: Tom Cruise 😜",
    image: "/images/p3.png",
    technologies: ["OpenCV", "Numpy", "MediaPipe", "Python", "CVZone"],
    repoUrl: "https://github.com/sharkspidy/ZoomIn_ZoomOut",
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
                🔗 View Project
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
