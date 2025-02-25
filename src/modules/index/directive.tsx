'use client'

import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import { Block, Perk } from '@/lib/types'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import PerkItem from './perk-item'

// const perks = [
//   {
//     tag: 'Get expert advice on how to protect your business',
//     title: 'We are your trusted partner',
//     href: '/',
//   },
//   {
//     tag: 'Get expert advice on how to protect your business',
//     title: 'We are your trusted partner',
//     href: '/',
//   },
//   {
//     tag: 'Get expert advice on how to protect your business',
//     title: 'We are your trusted partner',
//     href: '/',
//   },
// ]

export default function Directive({
  block,
  perks,
}: {
  block: Block | undefined
  perks: Perk[] | undefined
}) {
  const textRef = useRef(null)
  const playerRef = useRef(null)
  const perksRef = useRef(null)

  const title = block?.title
  const description = block?.description
  const linkHref = block?.linkHref
  const linkLabel = block?.linkLabel

  const { scrollYProgress: textProgress } = useScroll({
    target: textRef,
    offset: ['start end', 'end end'],
  })

  const { scrollYProgress: playerProgress } = useScroll({
    target: playerRef,
    offset: ['start end', 'end end'],
  })

  const { scrollYProgress: perksProgress } = useScroll({
    target: perksRef,
    offset: ['start end', 'end end'],
  })

  const textX = useTransform(textProgress, [0, 1], [-500, 0])
  const playerX = useTransform(playerProgress, [0, 1], [1000, 0])
  const perksY = useTransform(perksProgress, [0, 1], [500, 0])

  return (
    <Container as='section' className='flex flex-col gap-4 overflow-x-hidden'>
      <div className='flex flex-col lg:flex-row gap-6 justify-between'>
        <motion.div
          ref={textRef}
          style={{ x: textX }}
          className='flex flex-col gap-6 items-start'
        >
          <h2 className='display-large md:display-xl text-accent max-w-[707px]'>
            {title}
          </h2>
          <div
            className='body-large text-foreground max-w-[550px]'
            dangerouslySetInnerHTML={{ __html: description ?? '' }}
          />

          <Link href={linkHref ?? ''} target='_blank'>
            <Button className='title-medium ' variant={'outline'} size={'lg'}>
              {linkLabel ?? 'Learn more'} <ChevronRight className='w-6 h-6' />
            </Button>
          </Link>
        </motion.div>
        <motion.div
          ref={playerRef}
          style={{ x: playerX }}
          className='w-full max-w-[550px] aspect-video flex-center bg-muted rounded-3xl overflow-hidden'
        >
          <iframe
            width='100%'
            height='100%'
            src={linkHref}
            title='YouTube video'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </motion.div>
      </div>
      <motion.div
        ref={perksRef}
        style={{ y: perksY }}
        className='overflow-x-scroll no-scrollbar'
      >
        <div className='flex gap-[20px] mt-[75px] w-max'>
          {perks?.sort(((a,b) => a.order-b.order)).map((perk, i) => (
            <PerkItem key={i} perk={perk} index={i} />
          ))}
        </div>
      </motion.div>
    </Container>
  )
}
