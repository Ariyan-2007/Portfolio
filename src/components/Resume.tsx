import '../styles/global.css';
import { DownloadIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <div className="text-neutral-300 pt-[2rem] flex flex-col items-center gap-[2rem] text-sm">
      <p className="text-center max-w-2xl">
        You can download my full resume below.  
        It contains details about my experience, projects, and skills.
      </p>

      <motion.a
        href="/Resume.pdf" 
        download
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 px-6 py-3 bg-neutral-800 border border-yellow-300 
                   text-yellow-200 font-semibold rounded-2xl shadow-md 
                   hover:bg-neutral-700 transition duration-300"
      >
        <DownloadIcon className="w-6 h-6 animate-bounce" />
        <span>Download Resume</span>
      </motion.a>
    </div>
  );
}
