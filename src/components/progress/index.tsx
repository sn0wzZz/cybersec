import { cn } from '@/lib/utils'
import { Clock3 } from 'lucide-react'
import { useState, useEffect } from 'react'

type Sections = {
  id: string
  title: string
}[]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

export default function Progress({
  sections,
  readTime,
  className,
  contentStyle,
}: {
  sections: Sections
  readTime: number
  contentStyle?: string
  className?: string
}) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '')
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      let closestSection = sections[0]?.id || ''
      let closestDistance = Infinity
      const viewportCenter = window.innerHeight / 4 // Adjust for better accuracy

      // Get all section elements
      const sectionElements = sections.map((section) =>
        document.getElementById(section.id)
      )

      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect()
          const distanceFromCenter = Math.abs(rect.top - viewportCenter)

          if (distanceFromCenter < closestDistance) {
            closestDistance = distanceFromCenter
            closestSection = sections[index].id
          }
        }
      })

      // If at the top of the page, default to first section
      if (window.scrollY === 0) {
        closestSection = sections[0]?.id || ''
      }

      setActiveSection(closestSection)

      // Update reading progress
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setReadingProgress((scrollTop / docHeight) * 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  return (
    <div className={cn(`sticky top-32`, className)}>
      <div
        className={cn(
          'bg-gradient-to-b from-primary to-primary-gradient dark:border-t w-[310px] dark:from-background dark:to-background rounded-[40px] p-[38px] flex flex-col gap-8',
          contentStyle
        )}
      >
        <span className='display-xs text-background dark:text-white max-w-[105px]'>
          Table of Contents
        </span>
        <div>
          {sections.map((section) => (
            <div
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                `cursor-pointer transition-all duration-300 ease-out pb-2.5 mb-3.5 border-l border-spacing-y-20 border-dashed relative before:absolute before:-top-4 before:-left-4 before:h-8 before:w-8 before:rounded-full before:border before:border-primary-item after:absolute after:-top-1 dark:border-primary-item after:-left-1 after:h-2 after:w-2 after:bg-secondary after:rounded-full ${
                  activeSection === section.id
                    ? 'opacity-100'
                    : 'opacity-50 dark:opacity-100 dark:after:bg-border dark:before:border-border dark:border-bodred'
                }`
              )}
            >
              <p
                className={cn(
                  'ml-8 pb-[30px] title-medium text-primary-foreground dark:text-white border-b dark:border-primary-item border-dashed',
                  activeSection !== section.id &&
                    'dark:border-border dark:text-border'
                )}
              >
                {section.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full mt-[56px] h-[2px] bg-muted dark:bg-primary rounded-full'>
        <div
          className='h-[2px] bg-primary dark:bg-primary-item rounded-full transition-all duration-200 ease-out'
          style={{ width: `${readingProgress}%` }}
        />
      </div>
      <div className='w-full flex justify-center gap-2 items-center mt-6'>
        <Clock3 className='w-4 h-4 text-primary' />
        <span>{readTime} min read</span>
      </div>
    </div>
  )
}
