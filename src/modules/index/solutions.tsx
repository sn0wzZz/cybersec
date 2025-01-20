'use client'
import Container from '@/components/container'
import Image from 'next/image'
import map from '../../../public/map.svg'
import integration from '../../../public/integration.svg'
import wave from '../../../public/wave.svg'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ShuffleIcon from '@/components/icons/shuffle'

import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Solutions() {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], [-1000, 1000])
  return (
    <Container className='mt-16'>
      <div
        ref={ref}
        className='bg-section-gradient py-[100px] md:py-[175px] relative rounded-[60px] overflow-hidden'
      >
        <h3 className='display-large md:display-xl text-primary text-center '>
          Security and <br /> protection solutions
        </h3>
        <h4 className='title-medium text-[hsl(240_17%_45%)] text-center mt-[100px] '>
          Expertise and quality
        </h4>
        {/* <div className=' absolute max-w-[309px] w-full h-[309px] bg-[hsl(257_69%_60%)] blur-[154px]  rounded-full top-[380px] right-[140px] '></div> */}
        <motion.div
          style={{ x }}
          className='absolute max-w-[309px] w-full h-[309px] bg-[hsl(257_69%_60%)] blur-[154px] rounded-full top-[380px] right-[140px]'
        />
        <div className='relative bg-background mt-[60px] mx-4 md:mx-16 rounded-[60px] lg:h-[671px] gap-10 grid grid-cols-1 lg:grid-cols-2 overflow-hidden'>
          <div className='lg:max-w-[318px] w-full h-[108px] flex flex-col justify-between z-10 lg:row-start-2 lg:col-start-2 lg:ml-auto lg:mr-10  mx-8 lg:mx-auto mt-8 lg:mt-0  '>
            <div className='flex gap-4 my-3 py-3'>
              <div className=' h-8 w-8  rounded-full border flex justify-center items-center'>
                {' '}
                <div className='w-[12px] h-[12px] m-2 bg-secondary rounded-full'></div>{' '}
              </div>
              <p className='body-small text-muted-foreground'>
                Penetration tests simulate real scenarios of malicious attacks
                against web
              </p>
            </div>
            <div className='flex gap-4  pb-3 '>
              <div className=' h-8 w-8  rounded-full border flex justify-center items-center'>
                {' '}
                <div className='w-[12px] h-[12px] m-2 bg-primary rounded-full'></div>{' '}
              </div>
              <p className='body-small text-muted-foreground'>
                Penetration tests simulate real scenarios of malicious attacks
                against
              </p>
            </div>
          </div>

          <div className='bg-background w-full lg:max-w-[386px] h-[268px] px-[26px] py-[29px] rounded-3xl flex flex-col justify-between relative  z-10 lg:row-start-3 lg:row-span-2 mx-auto'>
            <div className='flex gap-4 items-center '>
              <div className='h-[51px] w-[51px] bg-secondary rounded-full'></div>
              <div>
                <h5 className='title-medium text-primary'>Data Geteway</h5>
                <p className='body-small text-muted-foreground'>London, UK</p>
              </div>
            </div>
            <Button className='gap-3 w-full'>
              View More <ChevronRight />
            </Button>
          </div>

          <div className='bg-background lg:max-w-[386px] w-full h-[280px] px-[26px] py-[29px] rounded-3xl flex flex-col justify-between z-10 relative lg:row-start-4 lg:col-start-2 mx-auto '>
            <h5 className='title-medium text-primary'>
              Security and protection solutions
            </h5>
            <div className='flex gap-4 border-b my-3 py-3'>
              <div className=' h-4 w-4  rounded-full border flex justify-center items-center'>
                {' '}
                <div className='w-[6px] h-[6px] m-1 bg-primary rounded-full'></div>{' '}
              </div>
              <p className='body-small text-muted-foreground'>
                Penetration tests simulate real scenarios of malicious attacks
                against web applications and systems, as well as internal and
                public network infrastructure.
              </p>
            </div>
            <div className='flex gap-4  pb-3'>
              <div className=' h-4 w-4  rounded-full border flex justify-center items-center'>
                {' '}
                <div className='w-[6px] h-[6px] m-1 bg-primary rounded-full'></div>{' '}
              </div>
              <p className='body-small text-muted-foreground'>
                A cloud-based system that provides complete security with
                comprehensive visibility of computers and servers, as well as
                flawless protection against multiple threats.
              </p>
            </div>
          </div>

          <div className='absolute w-full h-full inset-0'>
            <Image
              src={map}
              alt='map'
              className='absolute bottom-0 top-20 left-40 right-40'
            />
            <Image
              src={integration}
              alt='integration pins'
              className='absolute top-[10%] left-[26%] max-h-[500px] '
            />
          </div>
        </div>
      </div>

      <div className='bg-gradient-to-b from-primary to-primary-gradient p-8 md:p-16 rounded-[60px] flex flex-col items-center justify-center gap-10 relative '>
        <Image
          src={wave}
          alt='wave'
          className='absolute  top-10 right-0 max-w-[807px] rotate-[6] '
        />

        <div className='w-full border-b border-white/20 '>
          <h3 className='display-medium text-background mb-[56px]'>
            Security and <br />
            protection solutions
          </h3>
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center w-full gap-10  mt-[56px]'>
          <div className='flex flex-col gap-4 w-[168px]'>
            <h4 className='display-medium text-background !dark:text-popover'>
              15,000+
            </h4>
            <p className='display-xxs text-input'>Customers</p>
          </div>
          <div className=' w-[52px] h-[52px] rounded-full flex-center bg-[hsl(257_69%_60%)]'>
            <ShuffleIcon className='h-6 w-6' />
          </div>
          <div className='flex flex-col gap-4 w-[168px]'>
            <h4 className='display-medium text-background !dark:text-popover'>
              8000+
            </h4>
            <p className='display-xxs text-input'>Interactions</p>
          </div>
          <div className=' w-[52px] h-[52px] rounded-full flex-center bg-[hsl(257_69%_60%)]'>
            <ShuffleIcon className='h-6 w-6' />
          </div>
          <div className='flex flex-col gap-4 w-[168px]'>
            <h4 className='display-medium text-background !dark:text-popover'>
              30000+
            </h4>
            <p className='display-xxs text-input !dark:text-popover'>
              Hour save
            </p>
          </div>
          <div className=' w-[52px] h-[52px] rounded-full flex-center bg-[hsl(257_69%_60%)]'>
            <ShuffleIcon className='h-6 w-6' />
          </div>
          <div className='flex flex-col gap-4 w-[168px]'>
            <h4 className='display-medium text-background'>99.5%</h4>
            <p className='display-xxs text-input'>
              Total <br />
              engagement
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
