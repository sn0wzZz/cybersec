import Image, { StaticImageData } from 'next/image'
import Container from '../container'
import { Button } from '../ui/button'
import Link from 'next/link'
import wave from '../../../public/wave-white.svg'

export default function HeroReusable({
  title,
  image,
  button,
}: {
  title: string
  image: StaticImageData | string
  button: {
    label?: string 
    href?: string
  }
}) {
  return (
    <Container
      outer='bg-[hsl(236,100%,97%)]'
      className=' pt-[150px] pb-10  md:pt-[190px] md:pb-16 flex flex-col-reverse lg:flex-row justify-between gap-8 relative'
    >
      <div className='absolute inset-0 flex flex-col items-end top-[160px]'>
        <Image src={wave} alt='wave' className='bottom-0 ' />
      </div>
      <div className='flex flex-col gap-8 justify-between relative'>
        <h3 className='display-medium lg:display-xl max-w-[648px] text-primary'>
          {title}
        </h3>
        <Link href={button.href ?? ''} className='self-end lg:self-start'>
          {' '}
          <Button size={'lg'}>{button.label ?? 'View more'}</Button>
        </Link>
      </div>
      <div className='relative h-32 lg:h-[404px] lg:max-w-[607px] w-full rounded-[40px] overflow-hidden'>
        <Image src={image} alt={title} fill className='object-cover' />
      </div>
    </Container>
  )
}

