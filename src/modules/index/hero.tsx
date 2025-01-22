'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import wave from '../../../public/hero-wave.svg'
import { Check, ChevronRight, TrendingUp } from 'lucide-react'
import Container from '@/components/container'
import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'
import CountUp from 'react-countup'
import memojie1 from '../../../public/home/memojie-1.png'
import memojie2 from '../../../public/home/memojie-2.png'
import memojie3 from '../../../public/home/memojie-3.png'
import memojie4 from '../../../public/home/memojie-4.png'
import user1 from '../../../public/home/user-1.png'
import user2 from '../../../public/home/user-2.png'
import user3 from '../../../public/home/user-3.png'
import user4 from '../../../public/home/user-4.png'
import CheckIcon from '@/components/icons/check'
import Check2Icon from '@/components/icons/check-2'

const memojies= [
memojie4,memojie3, memojie2, memojie1
]
const users = [
  { avatar: user1, progress:75 },
  { avatar: user2, progress:33 },
  { avatar: user3, progress:66 },
  { avatar: user4, progress:0 },
  
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-175, 1750]) 
  const cardY = useTransform(scrollYProgress, [0, 1], [475, -4000]) 

  return (
    <Container
      outer='bg-gradient-to-b from-[hsla(235,100%,98%,1)] from-5% to-background to-95%  dark:from-background dark:to-background   py-[175px] '
      className='relative flex flex-col lg:flex-row md:py-[150px]  gap-16 from- '
    >
      <div className='absolute inset-0 flex flex-col items-end '>
        <Image src={wave} alt='wave' className='bottom-0 ' />
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
          className='w-[512px] h-[256px] relative after:content-[""] -z-0 after:absolute after:inset-0 after:rounded-t-full after:bg-gradient-to-b from-background to-primary-muted dark:from-muted dark:to-background  after:z-20'
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className=' flex flex-col gap-8 items-start z-10  max-w-[647px]'
      >
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
      </motion.div>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ y: cardY }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
        className=' flex flex-col gap-8 items-center lg:items-start z-10  max-w-[647px] shadow-[18px_20px_0px_0px_60px_] dark:shadow-[0px_44px_64px_24px_hsla(240,6%,7%,0.5))] rounded-[32px]'
      >
        <div className='max-w-[519px] w-full p-6 dark:bg-card dark:border-t bg-gradient-to-b from-background  to-background/10  flex flex-col gap-4 rounded-[32px] relative'>
          {/* Users */}
          <div className='absolute bg-background dark:bg-card dark:border-t shadow-hero dark:shadow-[0px_44px_64px_24px_hsla(240,6%,7%,0.5))] flex p-6 rounded-3xl gap-1.5 md:-top-14 top-[240px] md:-right-6    left-8 sm:left-32 md:left-auto'>
            {users.map((user, i) => (
              <div
                key={i}
                className='h-[51px]  aspect-square relative bg-background rounded-full flex-center'
              >
                {user.progress===0&&<span className='absolute w-5 h-5  bg-white dark:text-muted top-0 -right-1 z-10 flex justify-center items-center rounded-full border border-white text-primary '> <Check2Icon className='h-3 w-3 '/></span>}
                <motion.div
                  initial={{ '--progress': 0 }}
                  animate={{ '--progress': user.progress }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                  style={{ '--progress': user.progress } as React.CSSProperties}
                  className={`absolute inset-0 rounded-full p-[2px] [background:conic-gradient(from_0deg,hsl(var(--input))_calc(var(--progress)*1%),hsl(var(--muted))_0)] dark:[background:conic-gradient(from_0deg,hsl(var(--muted))_calc(var(--progress)*1%),hsl(var(--input))_0)]`}
                >
                  <div className='w-full h-full bg-background rounded-full flex-center'>
                    <Image
                      src={user.avatar}
                      alt='user'
                      className='rounded-full'
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <span className='display-xxs text-accent'>Performance</span>
          <div className='flex gap-[105px] md:gap-[45px] lg:gap-[50px] flex-col md:flex-row bg-background rounded-[28px] p-2'>
            <div className=' min-w-[216px] max-w-[216px] w-full bg-muted p-5 rounded-3xl flex flex-col gap-3'>
              <p className='title-medium text-muted-foreground'>
                Total Stop attacks
              </p>
              <div>
                {/* Memojies */}
                <div className='flex -space-x-4'>
                  {memojies.map((memojie, i) => (
                    <div
                      key={i}
                      className='h-[41px] aspect-square bg-background rounded-full overflow-hidden flex-center border-2 border-muted dark:border-primary-item '
                    >
                      <Image src={memojie} alt='memojie' />
                    </div>
                  ))}
                </div>
                <p className='display-large text-accent mt-6'>
                  <CountUp
                    end={5256.0}
                    duration={1}
                    decimals={2}
                    separator=''
                  />
                </p>
              </div>
            </div>

            <div className=' p-5 flex flex-col gap-2.5 '>
              <p className='title-small text-muted-foreground'>Last month</p>
              <div className='flex gap-[40px] flex-col'>
                <div className='flex items-center text-accent display-xs gap-2'>
                  <TrendingUp />
                  <p>
                    <CountUp end={8.2} duration={1} decimals={2} />%
                  </p>
                </div>

                <Button>
                  <span className='title-medium'>Full Report</span>{' '}
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  )
}
