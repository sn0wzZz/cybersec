'use client'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/logo.svg'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const navLinks = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/resources',
    label: 'Resources',
  },
  {
    href: '/about',
    label: 'About us',
  },
  {
    href: '/services',
    label: 'Services',
  },
  {
    href: '/contacts',
    label: 'Contacts',
  },
]

export default function Navigation() {
  const pathname = usePathname()
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const handleMenu = () => setMenuIsOpen((prevMenuIsOpen) => !prevMenuIsOpen)
  console.log(pathname)

  return (
    <header className='fixed  top-6 w-full z-50'>
      <div className=' mx-4 md:mx-8 2xl:mx-auto bg-background/70 max-w-[1440px] backdrop-blur-3xl backdrop-saturate-150 rounded-3xl py-4 px-6 flex justify-between items-center '>
        <nav className='flex  gap-16'>
          <Image src={logo} alt='cybersec.net' />
          <ul className='hidden lg:flex items-center gap-[42px]'>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={cn(
                  `${
                    pathname == link.href
                      ? 'text-primary font-medium'
                      : 'font-normal text-muted-foreground'
                  }`
                )}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button className=' hidden lg:flex'>Get Quote</Button>

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
          className={`absolute lg:hidden bg-background lg:bg-transparent lg:translate-x-0 px-4 right-0 w-full !ml-auto  h-screen lg:h-full top-0 z-10  transition-transform duration-300 ease-in -mt-6 ${
            !menuIsOpen ? 'translate-x-full' : 'translate-x-0'
          }   pt-52 xl:p-0 lg:pt-0 `}
        >
          <ul className='lg:hidden flex flex-col items-center gap-[42px] -mt-6'>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={cn(
                  `${
                    pathname == link.href
                      ? 'text-primary font-medium'
                      : ' font-normal text-primary'
                  }`
                )}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <Button>Get Quote</Button>
          </ul>
        </nav>
    </header>
  )
}
