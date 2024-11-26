'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function PerkItem({
  perk,
  index,
}: {
  perk: { tag: string; title: string; href: string }
  index: number
}) {
  const [isHovering, setIsHover] = useState(false)
  return (
    <Link
      href={perk.href}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      key={index}
      className='flex w-[454px] flex-col gap-6 items-start bg-gradient-to-b from-card via-card to-card rounded-[40px] px-[32px] pt-[76px] pb-[44px] hover:from-primary text-accent hover:text-white hover:via-primary-gradient hover:to-primary transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer'
    >
      <div className='flex flex-col gap-9'>
        <div className='flex gap-[42px]'>
          <p className='display-xxs text-muted-foreground'>00{index + 1}</p>
          <p
            className={cn(
              `title-small  max-w-[291px] ${
                isHovering ? 'text-[hsl(240_40%_86%)]' : 'text-accent'
              }`
            )}
          >
            {perk.tag}
          </p>
        </div>
        <h3 className='display-small max-w-[309px]'>{perk.title}</h3>
      </div>

      <Button
        className={cn(
          `title-medium rounded-full transition-all duration-300 mt-6 ${
            isHovering
              ? 'bg-transparent text-muted-foreground border-muted-foreground'
              : 'border-transparent text-accent'
          }`
        )}
        variant={'outline'}
      >
        Learn more <ChevronRight className='w-6 h-6' />
      </Button>
    </Link>
  )
}
