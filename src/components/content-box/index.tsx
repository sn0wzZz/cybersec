'use client'
import { cn } from '@/lib/utils'
import { StaticImageData } from 'next/dist/shared/lib/get-img-props'

import Image from 'next/image'
import AnimateBlur from '../animate-blur'
import AnimateSlideUp from '../animate-slide-up'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function ContentBox({
  title,
  caption,
  images,
  image,
  inner,
  button,
  childrenDiv,
  className,
  children,
}: {
  title: string
  caption?: string
  images?: StaticImageData[]
  image?: StaticImageData | StaticImageData[]
  inner?: string
  button?: { label?: string; href?: string; fn?: () => void }
  childrenDiv?: string
  children?: React.ReactNode
  className?: string
}) {
  return (
    <AnimateSlideUp
      as='article'
      className={cn(
        `flex flex-col xl:flex-row w-full ${
          image ? 'md:mx-[30px] items-center  ' : ''
        }`,
        className
      )}
    >
      <div
        className={cn(
          `flex flex-col gap-6 ${image ? 'xl:w-1/2' : 'w-full'}`,
          inner
        )}
      >
        <div className='flex sm:items-center justify-between w-full flex-col sm:flex-row gap-6 sm:text-nowrap'>
          <div className='flex flex-col gap-2'>
            {caption && (
              <span className='text-primary-gradient dark:text-secondary md:text-[14px] text-[12px] font-medium leading-[14px] tracking-[-3%] uppercase  '>
                {`// ${caption}`}
              </span>
            )}
            {title && (
              <h3 className='text-primary display-xs  md:display-small'>
                {title}
              </h3>
            )}
          </div>

          {button &&
            (button.href ? (
              <Button
                variant={'secondary'}
                className=' mr-auto sm:ml-auto sm:mr-0'
                asChild
              >
                <Link href={button.href}>{button.label ?? 'Get Quote'}</Link>
              </Button>
            ) : (
              <Button
                variant={'secondary'}
                className=' mr-auto sm:ml-auto sm:mr-0'
                onClick={button?.fn}
              >
                {button.label ?? 'Get Quote'}
              </Button>
            ))}
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

        <div
          className={cn(
            `[&&_ol>li]:list-decimal [&&_ul>li]:list-disc [&&_:is(ul,ol)>li]:ml-6 relative w-full [&_:is(h1,h2,h3,h4,h5,h6)]:text-primary [&_:is(h4,h5,h6)]:title-small [&_:is(h1,h2,h3)]:display-xxs`,
            childrenDiv
          )}
        >
          {children}
        </div>
      </div>
      {image &&
        (Array.isArray(image) ? (
          <div className='flex flex-col justify-evenly w-full'>
            {image.map((img, i) => (
              <AnimateBlur
                key={i}
                className={`relative w-full xl:w-1/2 h-[509px] max-w-[509px] mx-auto ${
                  i > 0 ? 'hidden xl:block' : ''
                }`}
              >
                <Image
                  src={img}
                  alt={`Web Security ${i + 1}`}
                  fill
                  className='object-cover'
                />
              </AnimateBlur>
            ))}
          </div>
        ) : (
          <AnimateBlur className='relative w-full xl:w-1/2 h-[509px] max-w-[509px] mx-auto'>
            <Image
              src={image}
              alt='Web Security'
              fill
              className='object-cover'
            />
          </AnimateBlur>
        ))}
    </AnimateSlideUp>
  )
}
