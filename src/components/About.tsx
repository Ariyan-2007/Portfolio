import { useState, type JSX } from "react";
import '../styles/global.css';
import { Button } from "./ui/button";
import profileInfo from "@/lib/profile-info.json";
import activityDesc from "@/lib/activity-desc.json";
import { Boxes, Brain, Monitor, Server } from "lucide-react";
import TwinkleStar from "./animation/TwinkleStar";
import React from "react";
import { motion } from "framer-motion";

const iconClass= "w-12 h-12 text-yellow-200";

const iconMap: Record<string, JSX.Element> = {
  "System Design": <Boxes className={iconClass} />,
  "Backend Development": <Server className={iconClass} />,
  "Frontend Development": <Monitor className={iconClass} />,
  "Machine Learning": <Brain className={iconClass} />,
};




export default function About() {
  const dob = new Date(profileInfo.DOB);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
 
  return (
    <div className="text-neutral-300 pt-[1rem] flex flex-col gap-[2rem] text-sm">
      <span>
        Hi, I'm Ariyan Jahangir, a {age}-year-old software engineer from Chittagong. 
        I specialize in fullstack development and love exploring new technologies and frameworks. 
        Recently, my curiosity led me to build my own portfolio using Astro, a modern and fancy framework that lets me combine creativity with performance. 
        I enjoy turning ideas into real, interactive web experiences and am always on the lookout for exciting challenges to expand my skills.
      </span>
      <span>
        Currently, I live and work in {profileInfo.City}, a city that constantly inspires me with its opportunities. 
        In the future, I hope to establish my own software firm. 
        My vision for this venture is to create innovative products that tackle a variety of real-world problems, 
        bringing practical solutions to both individuals and businesses. 
        I’m passionate about turning ideas into impactful software, and I aspire to build a team and culture that thrives on creativity, learning, and problem-solving.
      </span>
      <span>
        I also have a strong passion for research, particularly in the field of Machine Learning and Deep Learning. 
        So far, I have published two research papers—one in the journal MJSAT and another in an IEEE Xplore conference—both exploring innovative applications of ML/DL. 
        Currently, I am working on another ML project, which is both challenging and exciting. 
        For me, research in AI is more than work; it’s a hobby fueled by curiosity and fascination for how intelligent systems can solve real-world problems. 
        I love experimenting, learning, and pushing the boundaries of what AI can do.
      </span>

      <h2 className="text-xl font-bold">
      What I'm Doing
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {activityDesc.activities.map((activity, index) => (
        <motion.div
          key={index}
          className="group p-4 rounded-2xl bg-neutral-800 flex items-start gap-3 cursor-pointer border-2 border-transparent shadow-md"
          whileHover={{
            boxShadow: "0 0 20px rgba(250,204,21,0.8)",
            borderColor: "rgba(250,204,21,0.8)",
            scale: 1.02,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          {React.cloneElement(iconMap[activity.title], {
            className:
              "w-12 h-12 text-yellow-200 transition group-hover:drop-shadow-[0_0_12px_rgba(250,204,21,0.8)]",
          })}
          <div>
            <h3 className="text-lg font-semibold text-neutral-100">{activity.title}</h3>
            <p className=" text-neutral-400">{activity.description}</p>
          </div>
        </motion.div>
      ))}
      </div>

    </div>
  )
}
