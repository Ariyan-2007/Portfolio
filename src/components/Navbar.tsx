"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const links = [
    { name: "About", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="flex gap-[3rem] p-[1.25rem] px-[2.5rem] text-sm border-b w-3/5 bg-neutral-800 rounded-bl-xl float-right">
      {links.map((link) => (
        <a
          key={link.path}
          href={link.path}
          className={`${
            currentPath === link.path
              ? "text-yellow-200 font-bold"
              : "text-gray-300 hover:text-yellow-200"
          }`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}
