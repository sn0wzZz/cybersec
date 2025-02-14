import Link from 'next/link';
import Container from '../container';
import Logo from '../logo';

const links = [
  {
    name: 'Main Pages',
    links: [
      {
        label: 'Home page',
        href: '/',
      },
      {
        label: 'About',
        href: '/',
      },
      {
        label: 'Features',
        href: '/',
      },
      {
        label: 'Pricing',
        href: '/',
      },
      {
        label: 'Contact',
        href: '/',
      },
      {
        label: 'Reviews',
        href: '/',
      },
    ],
  },

  {
    name: 'Resources',
    links: [
      {
        label: 'Blog',
        href: '/',
      },
      {
        label: 'Blog Details',
        href: '/',
      },
      {
        label: 'Career',
        href: '/',
      },
      {
        label: 'Career Detials',
        href: '/',
      },
      {
        label: 'Integration',
        href: '/',
      },
      {
        label: 'Integration Detials',
        href: '/',
      },
    ],
  },
  {
    name: 'Utility pages',
    links: [
      {
        label: 'Log In ',
        href: '/',
      },
      {
        label: 'Sign Up',
        href: '/',
      },
      {
        label: 'Licenses ',
        href: '/',
      },
      {
        label: 'Changelog',
        href: '/',
      },
    ],
  },
]

export default function Footer() {
  return (
    <Container as='footer' className=' py-16'>
      <div className='flex flex-col md:flex-row justify-between mb-[48px] gap-16 '>
        <div className='flex justify-center flex-col gap-4'>
          <Logo />
          <span className=' body-medium'>Lorem ipsum text</span>
        </div>
        <div className='flex gap-[42] justify-between'>
          {links.map((link, i) => (
            <div key={i} className='w-[153px]'>
              <h5 className='title-medium mb-8'>{link.name}</h5>
              <ul className='flex flex-col gap-6 body-medium text-muted-foreground '>
                {link.links.map((link) => (
                  <li key={link.label}>
                    {' '}
                    <Link href={link.href} className='hover:underline'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className='border-white' />
      <div className='flex flex-col md:flex-row gap-4 justify-between mt-[48px] text-muted-foreground px-4'>
        <div>
          <span>&copy; 2024 - Cybersec</span>
        </div>
        <ul className='flex gap-8 '>
          <li className='list-disc hover:underline'>
            <Link href={'/'}>Legal Notice</Link>
          </li>
          <li className='list-disc hover:underline'>
            <Link href={'/terms'}>Terms Corporate</Link>
          </li>
          <li className='list-disc hover:underline'>
            <Link href={'/'}>Privacy</Link>
          </li>
        </ul>
      </div>
    </Container>
  )
}