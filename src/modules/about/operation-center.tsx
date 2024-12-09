import Container from '@/components/container'
import operation1 from '../../../public/about/operation-1.png'
import operation2 from '../../../public/about/operation-2.png'
import operation3 from '../../../public/about/operation-3.png'
import operation4 from '../../../public/about/operation-4.png'
import Image from 'next/image'
import { Star } from 'lucide-react'
import Bullet from '@/components/bullet'

const operations = [operation1, operation2, operation3, operation4]

export default function OperationCenter() {
  return (
    <Container className='flex flex-col'>
      <div className='bg-perk-gradient p-10 md:p-[64px]  rounded-[42px] mt-16 flex flex-col items-center gap-16'>
        <h3 className='display-large md:display-xl text-primary-foreground max-w-[613px] text-center'>
          Sequrity Operation Center
        </h3>
        <div className='overflow-x-scroll w-full white-scrollbar'>
          <div className='flex gap-4 md:gap-[60px] w-max mb-16'>
            {operations.map((operation, i) => (
              <div
                key={`operation-${i}`}
                className='relative rounded-[40px] overflow-hidden w-[275px] aspect-square'
              >
                <Image
                  src={operation}
                  alt={`operation-${i}`}
                  fill
                  className='object-cover'
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=' self-center flex flex-col xl:flex-row mt-[150px] gap-24  justify-center'>
        <div className='w-[310px] h-[303px] bg-muted rounded-[50px] p-6 flex flex-col justify-between items-start relative'>
          <div className='h-[84px] aspect-square bg-background flex-center rounded-full'>
            <Star className='text-primary fill-primary' />
          </div>
          <div className='flex flex-col gap-[11px]'>
            <span className='display-xs'>Founded</span>
            <h4 className=' display-large text-primary'>2023</h4>
          </div>

          <div className='-right-3 top-[125px] rotate-45 absolute border-t border-[50px] border-r border-muted hidden xl:block -z-10'></div>
          <div className='-right-[108px] top-[150px] absolute h-[3px] w-[108px] bg-muted hidden xl:block -z-10'></div>

          <div className='right-[125px] -bottom-3 rotate-45 absolute border-t border-[50px] border-r border-muted xl:hidden block -z-10'></div>
          <div className='right-[150px] -bottom-[108px] absolute w-[3px] h-[108px] bg-muted xl:hidden block -z-10'></div>
        </div>
        <div className='w-[310px] h-[303px] -rotate-[13deg] bg-secondary rounded-[50px] p-6 flex flex-col justify-between items-start relative'>
          <div className='h-[84px] aspect-square bg-background flex-center rounded-full'>
            <Star className='text-primary fill-primary' />
          </div>
          <div className='flex flex-col gap-[11px]'>
            <span className='display-xs'>Complete our project</span>
            <h4 className=' display-large text-primary'>1000+</h4>
          </div>

          <div className='-right-3 top-[125px] rotate-45 absolute border-t border-[50px] border-r border-secondary hidden xl:block -z-10'></div>
          <div className='-right-[108px] top-[150px] absolute h-[3px] w-[108px] bg-secondary hidden xl:block -z-10'></div>

          <div className='right-[125px] -bottom-3 rotate-45 absolute border-t border-[50px] border-r border-secondary -z-10 xl:hidden block'></div>
          <div className='right-[150px] -bottom-[108px] absolute w-[3px] h-[108px] bg-secondary -z-10 xl:hidden block'></div>
        </div>
        <div className='w-[310px] h-[303px] rotate-[4deg] bg-muted rounded-[50px] p-6 flex flex-col justify-between items-start relative'>
          <div className='h-[84px] aspect-square bg-background flex-center rounded-full'>
            <Star className='text-primary fill-primary' />
          </div>
          <div className='flex flex-col gap-[11px]'>
            <span className='display-xs'>Clients Satisfaction</span>
            <h4 className=' display-large text-primary'>99%</h4>
          </div>

          {/* <div className='-right-3 top-[125px] rotate-45 absolute border-t border-[50px] border-r border-muted hidden xl:block'></div>
          <div className='-right-[108px] top-[150px] absolute h-[3px] w-[108px] bg-muted hidden xl:block -z-10'></div>

          <div className='right-[125px] -bottom-3 rotate-45 absolute border-t border-[50px] border-r border-muted xl:hidden block'></div>
          <div className='right-[150px] -bottom-[108px] absolute w-[3px] h-[108px] bg-muted xl:hidden block -z-10'></div> */}
        </div>
      </div>

      <div className='bg-section-gradient p-8 md:p-16 rounded-[50px] mt-16 flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <Bullet />
          <h4 className='display-small text-primary'>Our mission </h4>
        </div>
          <p className='body-large text-muted-foreground ml-8'>
            With each passing year, cybersecurity is becoming an integral part
            of every company’s business processes. Whether you handle critical
            information or not, your company can become the target of a targeted
            or random hacker attack. Building information security in your
            company is not a one-time action, but a long and complex process.
            Our specialists will try to simplify this process for you.
            <br />
            <br />
            Malicious hackers can not only exfiltrate company data and assets,
            but also have access to vast sums of money, confidential financial
            documents, contracts and customer databases. They also often manage
            to gain complete remote control over the company’s networks and
            systems. This practically means that they can penetrate anywhere,
            steal and manipulate documents, as well as block all company
            activities. <br />
            <br /> Our mission is to effectively counter any individuals who
            attempt to commit unauthorized access, as well as any other
            malicious actions against our customers’ assets. The implementation
            of innovative security systems, as well as the constant process of
            monitoring and protecting our customers, is priority #1 for us.
          </p>
      </div>
    </Container>
  )
}
