'use client'
import Container from '@/components/container'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import service1 from '../../../public/services/service-1.png'
import service2 from '../../../public/services/service-2.png'
import service3 from '../../../public/services/service-3.png'
import { Globe, Network } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const services = [
  {
    title: 'Penetration tests',
    content: (
      <div className='flex flex-col gap-[42px] text-muted-foreground'>
        <p className='body-large'>
          Our organization has many years of experience in conducting
          penetration testing. We divide this service into several types,
          depending on the scope of the tests as well as the attack vectors.
        </p>
        <div className='flex flex-col md:flex-row gap-4 leading-[30px]'>
          <div className='flex flex-col gap-4'>
            <div className='p-[14px] w-max rounded-full border text-primary mb-6'>
              <Globe />
            </div>
            <h4 className='text-primary display-xs'>Web Penetration Test</h4>
            <p>
              This service is a combination of automated and manual testing (our
              policy is to prioritize the latter).
            </p>
          </div>
          <div className='flex flex-col gap-4 '>
            <div className='p-[14px] w-max rounded-full border text-primary mb-6'>
              <Network />
            </div>
            <h4 className='text-primary display-xs'>
              Network Penetration Test
            </h4>
            <p>
              Network penetration tests examine the security of an
              organization’s internal...
            </p>
          </div>
        </div>
      </div>
    ),
    image: service1,
  },
  {
    title: (
      <>
        Endpoint <br /> protection
      </>
    ),
    content: (
      <div className='flex flex-col gap-[42px] text-muted-foreground'>
        <p className='body-large'>
          Our organization has many years of experience in conducting
          penetration testing. We divide this service into several types,
          depending on the scope of the tests as well as the attack vectors.
        </p>
      </div>
    ),
    image: service2,
  },
  {
    title: (
      <>
        Endpoint <br /> protection
      </>
    ),
    content: (
      <div className='flex flex-col gap-[42px] text-muted-foreground'>
        <p className='body-large'>
          WAF protects your web applications by filtering, monitoring and
          blocking malicious HTTP/S traffic. It does this by adhering to a set
          of rules that help determine what traffic is malicious and what
          traffic is safe.
        </p>

        <ul className='flex flex-col gap-8'>
          <li className='flex gap-4 items-center'>
            <div className=' h-4 w-4  rounded-full border flex justify-center items-center'>
              {' '}
              <div className='w-[6px] h-[6px] m-1 bg-primary rounded-full'></div>{' '}
            </div>
            <p>Comprehensive security accreditations.</p>
          </li>
          <li className='flex gap-4 items-center'>
            <div className=' h-4 w-4  rounded-full border flex justify-center items-center'>
              {' '}
              <div className='w-[6px] h-[6px] m-1 bg-primary rounded-full'></div>{' '}
            </div>
            <p>Advised by top security experts.</p>
          </li>
          <li className='flex gap-4 items-center'>
            <div className=' h-4 w-4  rounded-full border flex justify-center items-center'>
              {' '}
              <div className='w-[6px] h-[6px] m-1 bg-primary rounded-full'></div>{' '}
            </div>
            <p>Fully deployed on Azure and complete data segregation.</p>
          </li>
        </ul>
      </div>
    ),
    image: service3,
  },
]

export default function Services() {
  const [isExpanded, setIsExpaned] = useState(false)
  return (
    <Container className='my-32'>
      <h3 className='display-large md:display-xl text-primary'>
        Cyber Security Services
      </h3>
      <ul>
        {services
          .slice(0, isExpanded ? services.length : 3)
          .map((service, i) => (
            <li
              key={i}
              className={cn(
                `flex flex-col animate-appear gap-8 mt-16 px-4 md:px-[80px] shadow-[0px_60px_154px_0px_hsla(225,100%,95%,0.6)] md:py-16 rounded-[50px] ${
                  i % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`
              )}
            >
              <div className='flex flex-col gap-4 justify-center max-w-[563px]'>
                <h4 className='md:display-large display-medium text-primary mb-8'>
                  {service.title}
                </h4>
                {service.content}
              </div>
              <div className='relative w-full h-[400px] rounded-[40px] overflow-hidden'>
                <Image
                  src={service.image}
                  alt={`service-${i + 1}`}
                  fill
                  className='object-cover'
                />
              </div>
            </li>
          ))}
      </ul>
      <div className='flex justify-center w-full mt-16'>
        <Button size={'lg'} onClick={() => setIsExpaned((cur) => !cur)}>
          {isExpanded ? 'Show Less' : 'Show More'}
        </Button>
      </div>
    </Container>
  )
}
