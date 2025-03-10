'use client'
import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import {} from '@faslin_kosta/trigani-api-client'
import { Block, IBaseCMSObject } from '@/lib/types'
import Link from 'next/link'

// const faq = [
//   {
//     q: '24/7 Monitoring and response from proven specialists',
//     a: '24/7 Monitoring and response from proven specialists',
//   },
//   {
//     q: '24/7 Monitoring and response from proven specialists',
//     a: '24/7 Monitoring and response from proven specialists',
//   },
//   {
//     q: '24/7 Monitoring and response from proven specialists',
//     a: '24/7 Monitoring and response from proven specialists',
//   },
//   {
//     q: '24/7 Monitoring and response from proven specialists',
//     a: '24/7 Monitoring and response from proven specialists',
//   },
// ]
export interface FAQProps extends IBaseCMSObject {
  question: string
  answer: string
  order: number
}

export default function FAQ({ faq, block }: { faq: FAQProps[], block: Block | undefined }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <Container className=' '>
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,

          ease: 'easeOut',
        }}
        className='bg-gradient-to-b from-[hsla(235,100%,98%,1)] from-5% to-background to-95%  dark:from-card dark:to-card dark:border-t py-[64px] px-4 md:px-[75px]  rounded-[42px] mt-16'
      >
        <div className='flex flex-col lg:flex-row gap-10 container mx-auto'>
          <h3 className=' display-large mg:display-xl text-primary'>
          {block?.title??"Frequently Asked Question"}
          </h3>
          <div className='flex flex-col justify-between gap-4'>
            <div dangerouslySetInnerHTML={{ __html: block?.description??"" }} />
            <Link href={block?.linkHref??'/'}>
            <Button className='gap-2 w-max' size={'lg'}>
              {block?.linkLabel?? 'Get Started for Free'} <ChevronRight className='h-4 w-4' />
            </Button>
            </Link>
          </div>
        </div>

        <ul className='mt-16 flex flex-col gap-4'>
          {faq
            .sort((a, b) => a.order - b.order)
            .map((item, index) => (
              <li
                key={index}
                className='bg-background dark:bg-muted  rounded-2xl p-6 hover:cursor-pointer '
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <div className='flex w-full justify-between items-center'>
                  <h4 className='display-xxs md:display-xs font-medium text-primary'>
                    {item.question}
                  </h4>
                  <button className=' flex justify-between items-center p-4 hover:bg-gradient-to-b from-primary to-primary-gradient border transition-all duration-100 bg-size-200 bg-pos-0 hover:bg-pos-100 ease-in hover:text-white dark:hover:text-muted rounded-full'>
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
                  <p className='text-foreground body-large py-2'>
                    {item.answer}
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </motion.div>
    </Container>
  )
}
