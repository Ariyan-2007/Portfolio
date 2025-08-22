import '../styles/global.css';
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import projectsData from "@/lib/projects.json";

export default function ProjectSection() {
  return (
    <div className="text-neutral-300 pt-[2rem] flex flex-col items-center gap-[2rem] text-sm">
      <p className="text-center max-w-2xl">
        Here are some of my projects. Click on the cards to visit their GitHub repositories.
      </p>

      <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">
        {projectsData.projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            className="group p-4 rounded-2xl bg-neutral-800 shadow-md flex flex-col gap-3 border-2 border-transparent hover:border-yellow-300 cursor-pointer"
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(250,204,21,0.7)" }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-200 animate-pulse" />
              <h3 className="text-lg font-semibold text-neutral-100">{project.title}</h3>
            </div>
            <p className="text-neutral-400">{project.description}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
