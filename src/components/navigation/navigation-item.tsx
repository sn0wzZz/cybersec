'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useMenu } from '@/context/navigation-context'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MouseEventHandler } from 'react'

type NavigationItem = {
  href: string
  label: string
  submenus?: NavigationItem[]
}

export default function NavigationItem({
  item,
  level = 0,
  id,
}: {
  item: NavigationItem
  level: number
  id: string
}) {
  const pathname = usePathname()
  const { activeMenu, setActiveMenu } = useMenu()
  const isOpen = activeMenu?.startsWith(id)

  const handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> = (
    e
  ) => {
    const relatedTarget = e.relatedTarget as HTMLElement
    if (!relatedTarget?.closest('[data-radix-popper-content-wrapper]')) {
      setActiveMenu(null)
    }
  }

  if (!item.submenus) {
    return (
      <li>
        <Link
          href={item.href}
          className={cn(
            'block p-2 hover:text-primary transition-colors text-base font-normal',
            pathname === item.href
              ? 'text-primary font-medium'
              : 'text-muted-foreground'
          )}
        >
          {item.label}
        </Link>
      </li>
    )
  }

  return (
    <li>
      <Popover open={isOpen}>
        <PopoverTrigger asChild className='ring-0 outline-0'>
          <button
            className='flex items-center gap-2 p-2 text-muted-foreground hover:text-primary transition-colors w-full'
            onMouseEnter={() => {
              if (!isOpen) {
                setActiveMenu(id)
              }
            }}
            onMouseLeave={handleClose}
          >
            {item.label}
            {level === 0 ? null : <ChevronRight className='w-4 h-4 ml-auto' />}
          </button>
        </PopoverTrigger>
        <PopoverContent
          side={level === 0 ? 'bottom' : 'right'}
          className=' mx-2'
          sideOffset={level === 0 ? 0 : 20}
          alignOffset={level === 0 ? 0 : -24}
          align='start'
          onMouseEnter={() => {
            if (!isOpen) {
              setActiveMenu(id)
            }
          }}
          onMouseLeave={handleClose}
        >
          <ul className='space-y-1'>
            {item.submenus.map((submenu, idx) => (
              <NavigationItem
                key={submenu.href || idx}
                item={submenu}
                level={level + 1}
                id={`${id}-${idx}`}
              />
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </li>
  )
}
