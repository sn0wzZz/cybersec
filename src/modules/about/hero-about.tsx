'use client'
import Image from 'next/image'
import wave from '../../../public/hero-wave.svg'

import Container from '@/components/container'
import hero from '../../../public/about/hero-about.png'
import BarChartIcon from '@/components/icons/bar-chart'
import CountUp from 'react-countup'

import { useRef } from 'react'
import { useScroll, useTransform, motion} from 'motion/react'
import AnimateBlur from '@/components/animate-blur'
import AnimateSlideUp from '@/components/animate-slide-up'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-175, 1750]) 
  const growY = useTransform(scrollYProgress, [0, 1], [205, -1000]) 

  return (
    <AnimateSlideUp>
      <Container
        outer='bg-gradient-to-b from-[hsla(235,100%,98%,1)] from-5% to-background to-95%  dark:from-background dark:to-background py-[135px] '
        className='relative flex flex-col lg:flex-row md:py-[150px]  gap-[75px]'
      >
        <div className='absolute inset-0 flex flex-col items-end top-10'>
          <Image src={wave} alt='wave' className='bottom-0 ' />
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
            className='w-[512px] h-[256px] relative after:content-[""] -z-0 after:absolute after:inset-0 after:rounded-t-full after:bg-gradient-to-b from-background to-primary-muted dark:from-muted dark:to-background  after:z-20'
          />
        </div>
        <div className=' flex flex-col gap-8 items-start z-10  max-w-[647px]'>
          <h1 className='display-medium md:display-xl text-accent'>
            We envision a world where businesses can operate with confidence
          </h1>
          <p className='mb-[42px] text-lg md:text-2xl body-medium text-muted-foreground max-w-[553px]'>
            We take a thorough and comprehensive approach to information
            security in your organization. We identify weaknesses, ensure
            compliance and recommend actionable helpful moves to improve your
            overall security framework.
          </p>
        </div>
        <AnimateBlur noDelay>
          <div className=' relative flex flex-col gap-8 items-start z-10 ml-auto max-w-[250px] sm:max-w-[350px]  md:max-w-[647px]  rounded-[32px] sm:mx-auto'>
            <Image src={hero} alt='hero' className='rounded-3xl' />
            <motion.div
              style={{ y: growY }}
              className='absolute bg-background rounded-[40px] p-8 flex flex-col gap-4 bottom-[75px] shadow-[80px_5px_162px_42px_hsla(227,100%,96%,0.6)] dark:shadow-[80px_5px_162px_42px_hsla(257,78%,18%,0.6)] -left-[118px]'
            >
              <div className='flex items-center gap-2 text-primary mb-2'>
                <BarChartIcon />
                <h4 className='display-xxs '>Grow our Company</h4>
              </div>
              <div className='text-primary flex items-center gap-4'>
                <span className='display-xs'>
                  <CountUp start={0} end={10.525} duration={2.5} decimals={3} />{' '}
                </span>
                <div>
                  <span className='px-4 py-2 rounded-full bg-secondary text-primary dark:text-muted'>
                    <CountUp start={0} end={15.2} duration={2.5} decimals={1} />
                    %
                  </span>
                </div>
              </div>
              <div className='flex gap-2'>
                <div className='flex gap-2'>
                  <motion.span
                    initial={{ width: '81px' }}
                    animate={{ width: '130px' }}
                    transition={{ duration: 2.25 }}
                    className='h-3 bg-primary rounded-full'
                  />
                  <motion.span
                    initial={{ width: '130px' }}
                    animate={{ width: '81px' }}
                    transition={{ duration: 2.25 }}
                    className='h-3 bg-muted rounded-full dark:bg-border'
                  />
                </div>
              </div>
              <div>
                <div className='flex gap-1 items-center my-2'>
                  {' '}
                  <span className='w-3 h-3 rounded-full bg-secondary'></span>{' '}
                  <span className='body-large text-muted-foreground font-extralight'>
                    Todays
                  </span>
                </div>
                <span className='display-xs ml-4 dark:text-primary font-bold '>
                  <CountUp start={0} end={7880} duration={2.5} separator='' />{' '}
                  Visitors
                </span>
              </div>
            </motion.div>
          </div>
        </AnimateBlur>
      </Container>
    </AnimateSlideUp>
  )
}
