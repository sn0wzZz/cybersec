'use client'
import { cn } from '@/lib/utils'
import { StaticImageData } from 'next/dist/shared/lib/get-img-props'
import { useInView } from 'motion/react'
import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'

import Image from 'next/image'
import AnimateBlur from '../animate-blur'

export default function ContentBox({
  title,
  caption,
  images,
  image,
  className,
  children,
}: {
  title: string
  caption: string
  images?: StaticImageData[]
  image?: StaticImageData
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-150px' })

  useEffect(() => {
    console.log('Element is in view: ', isInView)
  }, [isInView])
  //flex flex-col lg:flex-row justify-between items-center lg:mx-[30px]

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        `flex flex-col xl:flex-row ${image ? 'mx-[30px] ' : ''}`,
        className
      )}
    >
      <div className={cn(`flex flex-col gap-6 ${image ? 'xl:w-1/2' : ''}`)}>
        <div className='flex flex-col gap-2'>
          <span className='text-primary-gradient text-[14px] font-medium leading-[14px] tracking-[-3%] uppercase '>
            {`// ${caption}`}
          </span>
          <h3 className='text-primary display-small'>{title}</h3>
        </div>

        {images?.length && (
          <div className='mt-6'>
            {images.map((image, i) => (
              <AnimateBlur key={i}>
                <Image
                  key={i}
                  src={image}
                  alt={`image-${i}`}
                  width={image.width}
                  height={image.height}
                  className='mx-auto '
                />
              </AnimateBlur>
            ))}
          </div>
        )}

        <div className='text-foreground [&&_ul>li]:list-disc [&&_ul>li]:ml-6'>
          {children}
        </div>
      </div>
      {image && (
        <AnimateBlur className='relative w-full xl:w-1/2 h-[509px] max-w-[509px] mx-auto'>
          <Image src={image} alt='Web Security' fill className='object-cover' />
        </AnimateBlur>
      )}
    </motion.article>
  )
}
