import { Button } from '@/components/ui/button'
import Image from 'next/image'
import wave from '../../../public/hero-wave.svg'
import circle from '../../../public/hero-circle.svg'
import { ChevronRight, TrendingUp } from 'lucide-react'
import Container from '@/components/container'

export default function Hero() {
  return (
    <Container outer='bg-section-gradient py-[175px] ' className='relative flex flex-col lg:flex-row md:py-[150px]  gap-16'>
        <div className='absolute inset-0 flex flex-col items-end'>
          <Image src={wave} alt='wave' className='bottom-0 ' />
          <Image src={circle} alt='circle' className='right-0' />
        </div>
        <div className=' flex flex-col gap-8 items-start z-10  max-w-[647px]'>
          <h1 className='display-xl text-accent'>
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
        <div className=' flex flex-col gap-8 items-start z-10  max-w-[647px] shadow-[18px_20px_0px_0px_60px_hsla(235,28%,80%,0.2)] rounded-[32px]'>
          <div className='max-w-[519px] w-full p-6 bg-background flex flex-col gap-4 rounded-[32px] relative'>
            <div className='absolute bg-background shadow-[0px_44px_64px_24px_hsla(235,28%,80%,0.2)] flex p-6 rounded-3xl gap-1.5 md:-top-14 md:-right-6   top-[230px]'>
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
            <div className='flex gap-[105px] lg:gap-[75px] flex-col lg:flex-row'>
              <div className='max-w-[216px] w-full bg-muted p-5 rounded-3xl flex flex-col gap-3'>
                <p className='title-medium text-muted-foreground'>
                  Total Stop attacks
                </p>
                <div>
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
