import Container from '@/components/container'
import Image from 'next/image'
import wave from '../../../public/about/partners-wave.svg'
import partner1 from '../../../public/about/logo.svg'
import partner2 from '../../../public/about/logo-1.svg'
import partner3 from '../../../public/about/logo-2.svg'
import partner4 from '../../../public/about/logo-3.svg'
import partner5 from '../../../public/about/logo-4.svg'

const partners = [partner1, partner2, partner3, partner4, partner5]

export default function Partners() {
  return (
    <Container className='flex flex-col gap-16 '>
      <h4 className='mx-auto display-medium text-primary'>
        Trusted by 20,000+ customers across Europe
      </h4>

      <div className='flex flex-col gap-3 md:gap-0 dark:partners-filter'>
        <div className='overflow-scroll no-scrollbar '>
          <div className='flex justify-around gap-4 m-max'>
            {partners.map((partner, i) => (
              <Image
                key={`partner-${i + 1}`}
                src={partner}
                alt={`partner-${i + 1}`}
              />
            ))}
          </div>
        </div>
        <Image src={wave} alt='wave' />
      </div>
    </Container>
  )
}
