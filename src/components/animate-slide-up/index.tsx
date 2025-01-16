'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

type AnimateBlurProps<T extends React.ElementType> = {
  as?: T
  children: React.ReactNode
  className?: string
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

export default function AnimateSlideUp<T extends React.ElementType = 'div'>({
  as,
  children,
  className,
  ...props
}: AnimateBlurProps<T>) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-200px' })

  const Component = as ? motion(as) : motion.div

  return (
    <Component
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  )
}
