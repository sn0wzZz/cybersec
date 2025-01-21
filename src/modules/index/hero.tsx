'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import wave from '../../../public/hero-wave.svg'
import { ChevronRight, TrendingUp } from 'lucide-react'
import Container from '@/components/container'
import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-175, 1750]) 

  return (
    <Container
      outer='bg-gradient-to-b from-[hsla(235,100%,98%,1)] from-5% to-background to-95%  dark:from-background dark:to-background   py-[175px] '
      className='relative flex flex-col lg:flex-row md:py-[150px]  gap-16 from- '
    >
      <div className='absolute inset-0 flex flex-col items-end '>
        <Image src={wave} alt='wave' className='bottom-0 ' />
        <motion.div
          style={{ y }}
          className='w-[512px] h-[256px] relative after:content-[""] -z-0 after:absolute after:inset-0 after:rounded-t-full after:bg-gradient-to-b from-background to-primary-muted dark:from-muted dark:to-background  after:z-20'
        />
      </div>
      <div className=' flex flex-col gap-8 items-start z-10  max-w-[647px]'>
        <h1 className='display-medium md:display-xl text-accent'>
          Our business is to protect yours
        </h1>
        <p className='mb-[42px] text-2xl body-medium text-muted-foreground'>
          Take advantage of innovative solutions to protect your IT
          infrastructure and business security.
        </p>
        <Button size={'lg'} className='mt-[24px] z-10'>
          Get FREE Quote
        </Button>
      </div>
      {/* Card */}
      <div className=' flex flex-col gap-8 items-center lg:items-start z-10  max-w-[647px] shadow-[18px_20px_0px_0px_60px_] dark:shadow-[0px_44px_64px_24px_hsla(240,6%,7%,0.5))] rounded-[32px]'>
        <div className='max-w-[519px] w-full p-6 dark:bg-card dark:border-t bg-gradient-to-b from-background  to-background/10  flex flex-col gap-4 rounded-[32px] relative'>
          {/* Users */}
          <div className='absolute bg-background dark:bg-card dark:border-t shadow-hero dark:shadow-[0px_44px_64px_24px_hsla(240,6%,7%,0.5))] flex p-6 rounded-3xl gap-1.5 md:-top-14 top-[240px] md:-right-6    left-8 sm:left-32 md:left-auto'>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className='h-[51px] aspect-square bg-background rounded-full flex-center border-2 border-muted '
              >
                {i}
              </div>
            ))}
          </div>

          <span className='display-xxs text-accent'>Performance</span>
          <div className='flex gap-[105px] md:gap-[45px] lg:gap-[50px] flex-col md:flex-row bg-background rounded-[28px] p-2'>
            <div className='max-w-[216px] w-full bg-muted p-5 rounded-3xl flex flex-col gap-3'>
              <p className='title-medium text-muted-foreground'>
                Total Stop attacks
              </p>
              <div>
                {/* Memojies */}
                <div className='flex -space-x-4'>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className='h-[41px] aspect-square bg-background rounded-full flex-center border-2 border-muted '
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <p className='display-large text-accent mt-6'>5256.00</p>
              </div>
            </div>

            <div className=' p-5 flex flex-col gap-2.5 '>
              <p className='title-small text-muted-foreground'>Last month</p>
              <div className='flex gap-[40px] flex-col'>
                <div className='flex items-center text-accent display-xs gap-2'>
                  <TrendingUp />
                  <p>8.20%</p>
                </div>

                <Button>
                  <span className='title-medium'>Full Report</span>{' '}
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
