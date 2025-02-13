'use client'

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';


export default function Logo() {
  const {theme} = useTheme()
  return (
    <Link href={'/'}>
      <Image
        src={theme === 'light'? '/logo.svg': '/logo-dark.svg'}
        alt='cybersec.net'
        width={180}
        height={40}
      />
    </Link>
  )
}