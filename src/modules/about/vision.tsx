import Container from '@/components/container'
import vision1 from '../../../public/about/vision-1.png'
import Image from 'next/image'

const visions = [
  {
    title: (
      <h3>
        We had the vision to make cyber security as{' '}
        <span>easy as managing any other business </span>
      </h3>
    ),
    image: vision1,
  },
  {
    title: (
      <h3>
        We had the vision to make cyber security as{' '}
        <span>easy as managing any other business </span>
      </h3>
    ),
    image: vision1,
  },
]

export default function Vision() {
  return (
    <Container className=' py-[64px] px-4 md:px-[75px]  radius-[42px] mt-16 relative before:h-[716px] before:w-[716px] before:bg-[hsla(236,100%,97%,1)] before:absolute  before:right-[-133px] before:rounded-full before:-z-10 before:top-32 before:blur-[284px] overflow-hidden'>
      <div className=' flex flex-col gap-16'>
        <div className='flex flex-col lg:flex-row gap-10 justify-between lg:items-center'>
          <h3 className=' display-large mg:display-xl text-primary max-w-[589px]'>
            Here Our Vision & Mission
          </h3>
          <div className='flex flex-col justify-between gap-4 max-w-[521px]'>
            <p>
              As we couldn&apos;t find anything on the market that checked those
              boxes, we decided to build our own cyber security. Our tool is
              easy to set up, works within a few minutes, and scales along with
              the needs of every business.
            </p>
          </div>
        </div>
        <div className='overflow-x-scroll'>
          <ul className='flex  gap-10 w-max mb-8 md:mb-16'>
            {visions.map((vision, i) => (
              <li
                key={`vision-${i}`}
                className=' rounded-[50px] w-[350px] lg:w-[1290px] flex flex-col gap-10 lg:flex-row  md:items-center justify-between bg-background p-[30px]'
              >
                <div className='flex flex-col  gap-12'>
                  <div className='bg-secondary h-[80px] w-[80px] flex-center rounded-full font-medium text-2xl'>
                    0{i + 1}
                  </div>
                  <div className='display-medium lg:display-large text-primary max-w-[531px] [&_span]:text-input'>
                    {vision.title}
                  </div>
                </div>
                <div className='relative max-w-[350px] md:max-w-[526px] w-full lg:h-[509px] h-[300px] rounded-[40px] overflow-hidden'>
                  <Image
                    src={vision.image}
                    alt={`vision-${i + 1}`}
                    fill
                    className=' object-cover'
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}
