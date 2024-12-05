'use client'
import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'

const faq = [
  {
    q: '24/7 Monitoring and response from proven specialists',
    a: '24/7 Monitoring and response from proven specialists',
  },
  {
    q: '24/7 Monitoring and response from proven specialists',
    a: '24/7 Monitoring and response from proven specialists',
  },
  {
    q: '24/7 Monitoring and response from proven specialists',
    a: '24/7 Monitoring and response from proven specialists',
  },
  {
    q: '24/7 Monitoring and response from proven specialists',
    a: '24/7 Monitoring and response from proven specialists',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <Container className='bg-section-gradient py-[64px] px-4 md:px-[75px]  radius-[42px] mt-16'>
      <div className=''>
        <div className='flex flex-col lg:flex-row gap-10'>
          <h3 className=' display-large mg:display-xl text-primary'>Frequently Asked Question</h3>
          <div className='flex flex-col justify-between gap-4'>
            <p>
              Our team can assist you with the monitoring and maintenance of
              your current security systems as well as the implementation of new
              information security solutions.
            </p>
            <Button className='gap-2 w-max' size={'lg'}>
              Get Started for Free <ChevronRight className='h-4 w-4' />
            </Button>
          </div>
        </div>

        <div className='mt-16 flex flex-col gap-4'>
          {faq.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl p-6 hover:cursor-pointer '
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <div className='flex w-full justify-between items-center'>
                <h4 className='display-xxs md:display-xs font-medium text-primary'>
                  {item.q}
                </h4>
                <button className=' flex justify-between items-center p-4 hover:bg-gradient-to-b from-primary to-primary-gradient border transition-all duration-100 bg-size-200 bg-pos-0 hover:bg-pos-100 ease-in hover:text-white rounded-full'>
                  <div className='relative w-6 h-6'>
                    <div
                      className={cn(
                        'absolute top-1/2 left-1/2 w-4 h-0.5 bg-current -translate-x-1/2 -translate-y-1/2 transition-transform duration-300',
                        activeIndex === index ? 'rotate-0 ' : 'rotate-90'
                      )}
                    />
                    <div
                      className={cn(
                        'absolute top-1/2 left-1/2 w-4 h-0.5 bg-current -translate-x-1/2 -translate-y-1/2 transition-transform duration-300'
                      )}
                    />
                  </div>
                </button>
              </div>
              <div
                className={cn(
                  'transition-all duration-300 overflow-hidden',
                  activeIndex === index ? 'max-h-[500px] ' : 'max-h-0'
                )}
              >
                <p className='text-muted-foreground body-large py-2'>
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
