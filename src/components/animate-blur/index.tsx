'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function AnimateBlur({children, className}: {children: React.ReactNode, className?: string}) {
  const ref = useRef(null)
  const isInView = useInView(ref,{once: true, margin: '-200px'})

  return (
    <motion.div
      ref={ref}
      initial={{ filter: 'blur(10px)', opacity: 0 , y: 70 }}
      animate={isInView ? { filter: 'blur(0px)', y:0, opacity:1  } : { filter: 'blur(10px)', y: 70, opacity:0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
