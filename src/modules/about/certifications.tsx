import Container from '@/components/container'
import cert1 from '../../../public/about/cert-1.png'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const certifications = [
  {
    value: 'ccna',
    label: 'CCNA',
    content: {
      title: 'Cisco Certified Network Associate',
      image: cert1,
    },
  },
  {
    value: 'pnpt',
    label: 'PNPT',
    content: {
      title: 'Practical Network Penetration Tester',
      image: cert1,
    },
  },
  {
    value: 'ecppt',
    label: 'eCPPT',
    content: {
      title: 'eLearnSecurity Certified Professional Penetration Tester',
      image: cert1,
    },
  },
  {
    value: 'csfpc',
    label: 'CSFPC',
    content: {
      title: 'eLearnSecurity Certified Professional Penetration Tester',
      image: cert1,
    },
  },
  {
    value: 'cnss',
    label: 'CNSS',
    content: {
      title: 'eLearnSecurity Certified Professional Penetration Tester',
      image: cert1,
    },
  },
]

export default function Certifications() {
  return (
    <Container className=' py-[64px] px-4 md:px-[75px]  radius-[42px] mt-16'>
      <div className=' flex flex-col gap-16'>
        <div className='flex flex-col lg:flex-row gap-10 justify-between lg:items-center'>
          <h3 className=' display-large mg:display-xl text-primary max-w-[589px]'>
            What certifications?
          </h3>
          <div className='flex flex-col justify-between gap-4 max-w-[521px]'>
            <p>
              CCNA, PNPT, eCCPT, eWPT, eJPT, CSFPC, CNSS, ISO 27001 ISA, CEH,
              eCTPX, LPIC-1, OSCP
            </p>
          </div>
        </div>
        <div className='bg-section-gradient rounded-[50px] p-4 md:p-[50px] w-full'>
          <Tabs defaultValue='ccna' className=''>
            <TabsList className=' overflow-x-scroll no-scrollbar w-full'>
              <div className=' flex flex-row w-full justify-between'>

              {certifications.map((cert) => (
                <TabsTrigger key={cert.value} value={cert.value}>
                  {cert.label}
                </TabsTrigger>
              ))}
              </div>
            </TabsList>
            {certifications.map((cert, i) => (
              <TabsContent key={cert.value} value={cert.value}>
                <div className=' bg-background rounded-[50px] w-[1190] flex flex-col gap-10 lg:flex-row  md:items-center justify-between p-[30px]'>
                  <div className='flex flex-col  gap-12'>
                    <div className='bg-secondary h-[80px] w-[80px] flex-center rounded-full font-medium text-2xl'>
                      0{i + 1}
                    </div>
                    <div className='display-medium lg:display-large text-primary max-w-[531px] [&_span]:text-input'>
                      {cert.content.title}
                    </div>
                  </div>
                  <div className='relative max-w-[350px] md:max-w-[526px] w-full lg:h-[509px] h-[300px] rounded-[40px] overflow-hidden'>
                    <Image
                      src={cert.content.image}
                      alt={`vision-${i + 1}`}
                      fill
                      className=' object-cover'
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </Container>
  )
}
