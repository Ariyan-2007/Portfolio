import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import React from 'react'

export default function TwinkleStar() {
  return (
    <div className="relative flex justify-center items-center gap-6 mt-6">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="text-yellow-200 relative"
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2 + i * 0.5,
              ease: "easeInOut",
            }}
          >
            {/* Outline Star */}
            <Star className="w-6 h-6 absolute" />

            {/* Filled Star */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 absolute fill-yellow-200"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2 + i * 0.5,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.497.04.701.663.321.987l-4.208 3.602a.563.563 0 00-.182.557l1.272 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L7.265 20.54a.562.562 0 01-.84-.61l1.272-5.385a.563.563 0 00-.182-.557L3.307 10.39a.563.563 0 01.321-.987l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </motion.svg>
          </motion.div>
        ))}
      </div>
  )
}
