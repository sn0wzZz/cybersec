'use client'
import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Globe, Network } from 'lucide-react'
import { useState } from 'react'
// import service1 from '../../../public/services/service-1.png'
// import service2 from '../../../public/services/service-2.png'
// import service3 from '../../../public/services/service-3.png'
import { Block } from '@/lib/types'

// const services = [
//   {
//     title: 'Penetration tests',
//     content: (
//       <div className='flex flex-col gap-[42px] text-muted-foreground'>
//         <p className='body-large'>
//           Our organization has many years of experience in conducting
//           penetration testing. We divide this service into several types,
//           depending on the scope of the tests as well as the attack vectors.
//         </p>
//         <div className='flex flex-col md:flex-row gap-4 leading-[30px]'>
//           <div className='flex flex-col gap-4'>
//             <div className='p-[14px] w-max rounded-full border text-primary mb-6 dark:bg-primary-item'>
//               <Globe />
//             </div>
//             <h4 className='text-primary display-xs'>Web Penetration Test</h4>
//             <p>
//               This service is a combination of automated and manual testing (our
//               policy is to prioritize the latter).
//             </p>
//           </div>
//           <div className='flex flex-col gap-4 '>
//             <div className='p-[14px] w-max rounded-full border text-primary mb-6 dark:bg-primary-item'>
//               <Network />
//             </div>
//             <h4 className='text-primary display-xs'>
//               Network Penetration Test
//             </h4>
//             <p>
//               Network penetration tests examine the security of an
//               organization’s internal...
//             </p>
//           </div>
//         </div>
//       </div>
//     ),
//     image: service1,
//   },
//   {
//     title: (
//       <>
//         Endpoint <br /> protection
//       </>
//     ),
//     content: (
//       <div className='flex flex-col gap-[42px] text-muted-foreground'>
//         <p className='body-large'>
//           Our organization has many years of experience in conducting
//           penetration testing. We divide this service into several types,
//           depending on the scope of the tests as well as the attack vectors.
//         </p>
//       </div>
//     ),
//     image: service2,
//   },
//   {
//     title: (
//       <>
//         Endpoint <br /> protection
//       </>
//     ),
//     content: (
//       <div className='flex flex-col gap-[42px] text-muted-foreground'>
//         <p className='body-large'>
//           WAF protects your web applications by filtering, monitoring and
//           blocking malicious HTTP/S traffic. It does this by adhering to a set
//           of rules that help determine what traffic is malicious and what
//           traffic is safe.
//         </p>

//         <ul className='flex flex-col gap-8'>
//           <li className='flex gap-4 items-center'>
//             <div className=' h-4 w-4  rounded-full  flex justify-center items-center bg-border/40'>
//               {' '}
//               <div className='w-[6px] h-[6px] m-1 bg-primary dark:bg-primary-item rounded-full'></div>{' '}
//             </div>
//             <p>Comprehensive security accreditations.</p>
//           </li>
//           <li className='flex gap-4 items-center'>
//             <div className=' h-4 w-4  rounded-full  flex justify-center items-center bg-border/40'>
//               {' '}
//               <div className='w-[6px] h-[6px] m-1 bg-primary dark:bg-primary-item rounded-full'></div>{' '}
//             </div>
//             <p>Advised by top security experts.</p>
//           </li>
//           <li className='flex gap-4 items-center'>
//             <div className=' h-4 w-4  rounded-full  flex justify-center items-center bg-border/40'>
//               {' '}
//               <div className='w-[6px] h-[6px] m-1 bg-primary dark:bg-primary-item rounded-full'></div>{' '}
//             </div>
//             <p>Fully deployed on Azure and complete data segregation.</p>
//           </li>
//         </ul>
//       </div>
//     ),
//     image: service3,
//   },
// ]

const ContentType1 = ({ service }: { service: Block | undefined }) => (
  <div className='flex flex-col gap-[42px] text-muted-foreground'>
    <div
      className='body-large'
      dangerouslySetInnerHTML={{ __html: service?.description ?? '' }}
    />
    <div className='flex flex-col md:flex-row gap-4 leading-[30px]'>
      <div className='flex flex-col gap-4'>
        <div className='p-[14px] w-max rounded-full border text-primary mb-6 dark:bg-primary-item'>
          <Globe />
        </div>
        <div
          className='[&_:is(h1,h2,h3,h4,h5,h6)]:text-primary [&_:is(h1,h2,h3,h4,h5,h6)]:display-xs [&_:is(h1,h2,h3,h4,h5,h6)]:mb-4'
          dangerouslySetInnerHTML={{ __html: service?.subDescription1 ?? '' }}
        />
      </div>
      <div className='flex flex-col gap-4 '>
        <div className='p-[14px] w-max rounded-full border text-primary mb-6 dark:bg-primary-item'>
          <Network />
        </div>
        <div
          className='[&_:is(h1,h2,h3,h4,h5,h6)]:text-primary [&_:is(h1,h2,h3,h4,h5,h6)]:display-xs [&_:is(h1,h2,h3,h4,h5,h6)]:mb-4'
          dangerouslySetInnerHTML={{ __html: service?.subDescription2 ?? '' }}
        />
      </div>
    </div>
  </div>
)
const ContentType2 = ({ service }: { service: Block | undefined }) => (
  <div className='flex flex-col gap-[42px] text-muted-foreground'>
    <div
      className="body-large [&_ul]:mt-[42px] [&_ul]:gap-8 [&_ul]:flex [&_ul]:flex-col 
  [&_li]:relative [&_li]:pl-8 [&_li]:flex [&_li]:items-center [&_li]:gap-4
  [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-1/2 [&_li]:before:-translate-y-1/2 
  [&_li]:before:w-4 [&_li]:before:h-4 [&_li]:before:rounded-full [&_li]:before:bg-border/40 
  [&_li]:after:content-[''] [&_li]:after:absolute [&_li]:after:left-1 [&_li]:after:top-1/2 [&_li]:after:-translate-y-1/2 
  [&_li]:after:w-1.5 [&_li]:after:h-1.5 [&_li]:after:rounded-full [&_li]:after:bg-primary [&_li]:after:dark:bg-primary-item"
      dangerouslySetInnerHTML={{ __html: service?.description ?? '' }}
    />
  </div>
)

export default function Services({block}: {block: Block[] | undefined}) {
  const [isExpanded, setIsExpaned] = useState(false)
  return (
    <Container className='my-32'>
      <h3 className='display-large md:display-xl text-primary'>
        Cyber Security Services
      </h3>
      <ul>
        {block?.sort((a,b) => a.folio-b.folio) ?.slice(0, isExpanded ? block.length : 3)?.map((service, i) => (
          <motion.li
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: i * 0.3,
              ease: 'easeOut',
            }}
            key={i}
            className={cn(
              `flex flex-col animate-appear gap-8 mt-16 py-8 px-8 md:px-[80px] shadow-[0px_60px_154px_0px_hsla(225,100%,95%,0.6)] dark:shadow-none dark:border-t dark:bg-card md:py-16 rounded-[50px] ${
                i % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`
            )}
          >
            <div className='flex flex-col gap-4 justify-center max-w-[563px]'>
              <h4 className='md:display-large display-medium text-primary mb-8'>
                {service.title}
              </h4>
              {service.subDescription1 &&
              service.subDescription2 &&
              service.subDescription1 !== '<p><br></p>' &&
              service.subDescription2 !== '<p><br></p>' ? (
                <ContentType1 service={service} />
              ) : (
                <ContentType2 service={service} />
              )}
            </div>
            <div className='relative w-full h-[400px] items-center flex rounded-[40px] overflow-hidden'>
              {/* <Image
                src={service.image}
                alt={`service-${i + 1}`}
                fill
                className='object-cover'
              /> */}
              <div
                className='object-fill absolute'
                dangerouslySetInnerHTML={{ __html: service.image }}
              />
            </div>
          </motion.li>
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
