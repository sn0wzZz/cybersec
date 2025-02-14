'use client'

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';


export default function Logo() {
  const {theme} = useTheme()
  const resolvedTheme = theme || 'light'
  return (
    <Link href={'/'}>
      <Image
        src={resolvedTheme === 'light' ? '/logo.svg' : '/logo-dark.svg'}
        alt='cybersec.net'
        width={180}
        height={40}
      />
    </Link>
  )
}