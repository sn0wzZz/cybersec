'use client'

import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import { Clock3, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import { useIntersectionObserver } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const aditionalResources = [
  {
    tag: ['Article'],
    title: 'Weekly Cybersecurity Report 40',
    href: '/',
    image: '/resources/resource-9.png',
  },
  {
    tag: ['Article'],
    title: 'Weekly Cybersecurity Report 35',
    href: '/',
    image: '/resources/resource-5.png',
  },
  {
    tag: ['Article'],
    title: 'Weekly Cybersecurity Report 41',
    href: '/',
    image: '/resources/resource-4.png',
  },
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }
}

export default function ResourceView() {
  const [activeSection, setActiveSection] = useState<string>('p-1')
  const [readingProgress, setReadingProgress] = useState(0)

  const useSection = (sectionId: string) => {
    const [ref, entry] = useIntersectionObserver({
      threshold: 0.5,
      root: null,
      rootMargin: '-300px 0px',
    })

    useEffect(() => {
      if (entry?.isIntersecting) {
        setActiveSection(sectionId)
      }
    }, [entry?.isIntersecting, sectionId])

    return ref
  }

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight
    const progress = (window.scrollY / totalHeight) * 100
    setReadingProgress(progress)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const section1Ref = useSection('p-1')
  const section2Ref = useSection('p-2')
  const section3Ref = useSection('p-3')

  return (
    <Container className='py-16 ' outer='bg-section-gradient-2'>
      <div className='rounded-[40px] bg-background py-8 px-4 md:p-16'>
        <div className='flex flex-col lg:flex-row justify-between gap-8'>
          <div className='flex flex-col gap-3'>
            <span className='body-large text-muted-foreground-gray'>
              Posted by:
            </span>
            <div className='flex  items-center gap-4'>
              <div className='relative h-[53px] w-[53px] rounded-full  overflow-hidden'>
                <Image
                  src={'/resources/avatar-2.png'}
                  alt={'name'}
                  fill
                  className='object-cover'
                />
              </div>
              <span className='display-xxs text-primary '>Slavi Slavchev</span>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-2 md:gap-[80px] justify-between'>
            <div className='flex flex-col gap-3'>
              <span className='body-large text-muted-foreground-gray'>
                Published:
              </span>

              <span className=' display-xxs text-primary'>Nov 8, 2024</span>
            </div>
            <div className='flex flex-col gap-3'>
              <span className='body-large text-muted-foreground-gray'>
                Categories:
              </span>

              <span className=' display-xxs text-primary'>Cybersecurity</span>
            </div>
            <div className='flex flex-col gap-3'>
              <span className='body-large text-muted-foreground-gray'>
                Read time:
              </span>

              <span className=' display-xxs text-primary'>10 min</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-8 justify-between my-8 md:my-16'>
          <p className='display-xxs text-primary max-w-[740px]'>
            As your dedicated cybersecurity services provider, CyberSec equips
            you with timely and in-depth information about current cyber
            attacks. Discover a weekly cybersecurity report of the latest
            exploits and breaches shaping the ever-evolving cybersecurity
            landscape.
          </p>
          <div>
            <span className='display-xxs text-primary '>Social Share:</span>
            <div className='mt-4 flex gap-[20px]'>
              <Button variant={'icon'} className=''>
                <Facebook className='fill-primary ' />
              </Button>
              <Button variant={'icon'} className=''>
                <Instagram className='fill-primary stroke-muted' />
              </Button>
              <Button variant={'icon'} className=''>
                <Twitter className='fill-primary' />
              </Button>
              <Button variant={'icon'} className=''>
                <Linkedin className='fill-primary' />
              </Button>
            </div>
          </div>
        </div>
        <hr />
        <div className=' mt-10 md:mt-16 flex flex-col xl:flex-row  gap-12'>
          {/* Progress */}
          <div className='max-w-[310px] w-full hidden xl:block'>
            <div className='sticky top-32'>
              <div className='bg-primary-gradient rounded-[40px] p-[38px] flex flex-col gap-8  '>
                <span className='display-xs text-background max-w-[105px] '>
                  Table of Contents
                </span>
                <div>
                  <div
                    onClick={() => scrollToSection('p-1')}
                    className={`cursor-pointer transition-all duration-300 eas-out pb-6 border-l border-spacing-y-20 border-dashed relative before:absolute before:-top-4 before:-left-4 before:h-8 before:w-8 before:bg-primary before:rounded-full before:border before:border-primary-gradient after:absolute after:-top-1 after:-left-1 after:h-2 after:w-2 after:bg-secondary after:rounded-full ${
                      activeSection === 'p-1' ? 'opacity-100' : 'opacity-50'
                    }`}
                  >
                    <p className='ml-8 pb-[30px] title-medium text-primary-foreground border-b border-dashed'>
                      Before hard working then grow your business
                    </p>
                  </div>
                  <div
                    onClick={() => scrollToSection('p-2')}
                    className={` cursor-pointer transition-all duration-300 eas-out pb-6 border-l border-spacing-y-20 border-dashed relative before:absolute before:-top-4 before:-left-4 before:h-8 before:w-8 before:bg-primary before:rounded-full before:border before:border-primary-gradient after:absolute after:-top-1 after:-left-1 after:h-2 after:w-2 after:bg-secondary after:rounded-full ${
                      activeSection === 'p-2' ? 'opacity-100' : 'opacity-50'
                    }`}
                  >
                    <p className='ml-8 pb-[30px] title-medium text-primary-foreground border-b border-dashed'>
                      Before hard working then grow your business
                    </p>
                  </div>
                  <div
                    onClick={() => scrollToSection('p-3')}
                    className={` cursor-pointer transition-all duration-300 eas-out pb-6 border-l border-spacing-y-20 border-dashed relative before:absolute before:-top-4 before:-left-4 before:h-8 before:w-8 before:bg-primary before:rounded-full before:border before:border-primary-gradient after:absolute after:-top-1 after:-left-1 after:h-2 after:w-2 after:bg-secondary after:rounded-full ${
                      activeSection === 'p-3' ? 'opacity-100' : 'opacity-50'
                    }`}
                  >
                    <p className='ml-8 pb-[30px] title-medium text-primary-foreground border-b border-dashed'>
                      Before hard working then grow your business
                    </p>
                  </div>
                </div>
              </div>

              <div className='w-full mt-[56px] h-[2px] bg-muted rounded-full'>
                <div
                  className='h-[2px] bg-primary rounded-full transition-all duration-200 relative ease-out '
                  style={{ width: `${readingProgress}%` }}
                />
              </div>
              <div className='w-full flex justify-center gap-2 items-center mt-6'>
                <Clock3 className='w-4 h-4 text-primary' />
                <span>10 min read</span>
              </div>
            </div>
          </div>
          {/* Article */}
          <div className='flex flex-col gap-10 md:gap-28 '>
            <div className='flex flex-col gap-6'>
              <h5
                className='display-xxs md:display-small text-primary'
                ref={section1Ref}
                id='p-1'
              >
                01.Weekly Cybersecurity Report | Week 34, 2024
              </h5>
              <p className='body-large text-muted-foreground'>
                As your dedicated cybersecurity services provider, equips you
                with timely and in-depth information about current cyber
                attacks. Discover a weekly cybersecurity report of the latest
                exploits and breaches shaping the ever-evolving cybersecurity
                landscape.
              </p>
            </div>
            <div className='flex flex-col gap-6'>
              <h5
                className='display-xxs md:display-small text-primary'
                ref={section2Ref}
                id='p-2'
              >
                02.What is 360 feedback?
              </h5>
              <p className='body-large text-muted-foreground'>
                The company detected suspicious activity on its IT systems on
                August 17, and by August 19 it had confirmed that several
                servers and business processes were affected by the attack.{' '}
                <br /> In response to this breach, the company isolated the
                affected systems and shut down some of them as a precaution. The
                company also brought in external cyber security experts to
                assist in the investigation and return of operations to normal.{' '}
                <br /> <br /> So far, the company has not determined whether
                this incident has a significant financial impact, but estimates
                indicate that it is a ransomware attack. <br /> No attack group
                has yet claimed responsibility for the attack, but the group is
                apparently waiting for progress in negotiations before going
                public <br /> <br />
                The phones and computers of employees in the city of Flint,
                Michigan, which has a population of about 80,000, were disrupted
                by a ransomware attack that began on Wednesday. <br /> <br /> A
                timetable has not yet been set for restoring the systems, and
                the city can only accept cash or check payments for water, sewer
                and tax bills, as the online and credit card systems are down 
              </p>
            </div>
            <div className='max-w-[996px] h-[230px] md:h-[476px] relative rounded-[32px] overflow-hidden my-8'>
              {' '}
              <Image
                src={'/resources/resource-4.png'}
                alt='image'
                fill
                className='object-cover'
              />
            </div>
            <div className='bg-quote-gradient rounded-[40px] p-8 flex flex-col gap-4'>
              <svg
                width='43'
                height='28'
                viewBox='0 0 43 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0 0.832031H18.3264V15.772L10.9774 27.742H1.84185L9.15398 15.772H0V0.832031Z'
                  fill='#1E0A52'
                />
                <path
                  d='M24.5576 0.832031H42.884V15.772L35.535 27.742H26.3995L33.7116 15.772H24.5576V0.832031Z'
                  fill='#1E0A52'
                />
              </svg>

              <p className='body-large text-primary'>
                {' '}
                A never-before-seen “backdoor” known as Msupedge is targeting
                victims in Taiwan using a unique communication technique. 
              </p>
            </div>
            <div className='flex flex-col gap-6'>
              <h5
                className='display-xxs md:display-small text-primary'
                ref={section3Ref}
                id='p-3'
              >
                Toyota confirmed that its network was breached after a threat
                actor leaked a 240GB
              </h5>
              <p className='body-large text-muted-foreground'>
                The issue is limited in scope and is not a multi-system issue,”
                Toyota said when asked to verify the threat actor’s claims.{' '}
                <br /> The company added that it is “dealing with those affected
                and will provide assistance if necessary”, but has not yet
                provided information on when it discovered the breach, how the
                attacker gained access and how many people the data was exposed
                to in the incident. <br /> <br />
                The issue is limited in scope and is not a multi-system issue,”
                Toyota said when asked to verify the threat actor’s claims.{' '}
                <br /> The company added that it is “dealing with those affected
                and will provide assistance if necessary”, but has not yet
                provided information on when it discovered the breach, how the
                attacker gained access and how many people the data was exposed
                to in the incident. 
              </p>
            </div>
          </div>
          {/* More resources */}
          <div className='xl:max-w-[280px] w-full'>
            <div className=' rounded-[40px] flex flex-col gap-8  '>
              <span className='display-xxs  '>Additional Resources</span>

              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-1 gap-4 w-full'>
                {aditionalResources.map((resource, i) => (
                  <Link
                    href={resource.href}
                    key={`res-${i + 1}`}
                    className='flex bg-background justify-between w-full rounded-3xl px-4 py-3 shadow-[20px_24px_64px_0px_hsla(225,100%,95%,0.5)]'
                  >
                    <div className='flex flex-col justify-between items-start max-w-[112px]'>
                      <div className='shadow-[0px_8px_18px_0px_hsla(225,100%,95%,0.5)] bg-background title-small py-2 px-3 rounded-xl border'>
                        {resource.tag}
                      </div>

                      <h6 className='title-medium text-primary'>
                        {resource.title}
                      </h6>
                    </div>
                    <div className='relative h-[109px] w-[112px] rounded-[20px] overflow-hidden'>
                      <Image
                        src={resource.image}
                        alt='image'
                        fill
                        className='object-cover'
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
