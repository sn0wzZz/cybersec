'use client'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/logo.svg'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useState } from 'react'

import NavigationItem from './navigation-item'
import { MenuProvider } from '@/context/navigation-context'
import ThemeToggle from './theme-toggle'

const navLinks = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About us',
  },

  {
    href: '/services',
    label: 'Services',
    submenus: [
      {
        href: '/services/passive-security',
        label: 'Passive Security',
        submenus: [
          {
            href: '/services/passive-security/endpoint-protection',
            label: 'Endpoint Protection',
          },
          {
            href: '/services/passive-security/siem-software',
            label: 'SIEM Software',
          },
          {
            href: '/services/passive-security/email-security-getaway',
            label: 'Email Security Getaway',
          },
          {
            href: '/services/passive-security/dns-filtering-gateway',
            label: 'DNS Filtering Gateaway',
          },
        ],
      },
      {
        href: '/services/proactive-security',
        label: 'Proactive Security',
        submenus: [
          {
            href: '/services/proactive-security/penetration-tests',
            label: 'Penetration Tests',
          },
          {
            href: '/services/proactive-security/vulnerability-assessment',
            label: 'Vulnerability Assessment',
          },
          {
            href: '/services/proactive-security/risk-assessment',
            label: 'Risk Assessment',
          },
        ],
      },
      {
        href: '/services/consulting-services',
        label: 'Consulting Services ',
        submenus: [
          {
            href: '/services/consulting-services/soc-as-a-service',
            label: 'SOC as a service',
          },
          {
            href: '/services/consulting-services/security-awareness-training',
            label: 'Security Awareness Training',
          },
          {
            href: '/services/consulting-services/information-security-policies',
            label: 'Information Security Policies',
          },
          {
            href: '/services/consulting-services/data-breach-investigation',
            label: 'Data Breach Investigation',
          },
        ],
      },
    ],
  },
  {
    href: '/resources',
    label: 'Resources',
  },
  {
    href: '/contacts',
    label: 'Contacts us',
  },
]



export default function Navigation() {
  const pathname = usePathname()
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const handleMenu = () => setMenuIsOpen((prevMenuIsOpen) => !prevMenuIsOpen)

  return (
    <MenuProvider>
      <header className='fixed  top-6  w-full z-50'>
        <div className=' mx-4 md:mx-8 2xl:mx-auto bg-background/70 max-w-[1440px] backdrop-blur-3xl backdrop-saturate-150 rounded-3xl py-4 px-6 flex justify-between items-center '>
          <nav className='flex  gap-16'>
            <Image src={logo} alt='cybersec.net' />
            <ul className='hidden lg:flex items-center gap-[42px]'>
              {navLinks.map((link, idx) => (
                <NavigationItem
                  key={link.href || idx}
                  item={link}
                  level={0}
                  id={`menu-${idx}`}
                />
              ))}
            </ul>
          </nav>

          <div className='lg:flex items-center gap-4 hidden '>
            <ThemeToggle />
            <Button className='hidden lg:flex'>Get Quote</Button>
          </div>
        </div>
        <button
          className='text-primary-50 w-10 h-10 block absolute top-6 right-10 md:right-14  focus:outline-none z-50  lg:hidden'
          onClick={handleMenu}
        >
          <span className='sr-only'>Open main menu</span>
          <div className='block w-5  left-1/2 top-1/2 transform translate-x-2/3 -translate-y-1/2'>
            <span
              aria-hidden='true'
              className={`block absolute h-0.5 w-5 bg-primary transform transition duration-300 ease-in-out ${
                menuIsOpen ? 'rotate-45' : '-translate-y-1.5 '
              }`}
            ></span>

            <span
              aria-hidden='true'
              className={`block absolute h-0.5 w-5 transform transition duration-300 ease-in-out bg-primary ${
                menuIsOpen ? '-rotate-45' : 'translate-y-1.5 '
              }`}
            ></span>
          </div>
        </button>
        <nav
          className={`absolute lg:hidden bg-background  px-4 w-full   h-[100dvh] -top-6 -bottom-6 z-10  transition-transform duration-300 ease-in  ${
            !menuIsOpen ? 'translate-x-full' : 'translate-x-0'
          }   pt-40 `}
        >
          <ul className='lg:hidden flex flex-col  gap-[42px] w-full'>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={cn(
                  `w-full  ${
                    pathname == link.href
                      ? 'text-primary-gradient font-medium'
                      : ' font-normal text-primary'
                  }`
                )}
              >
                <Link
                  href={link.href}
                  className=' display-small w-full flex'
                  onClick={() => setMenuIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <Button className='border !px-4 !py-3 w-max' size={'lg'}>
              <span className='display-xs'>Get Quote</span>
            </Button>
            <div className='mt-auto ml'>
              <ThemeToggle />
            </div>
          </ul>
        </nav>
      </header>
    </MenuProvider>
  )
}
