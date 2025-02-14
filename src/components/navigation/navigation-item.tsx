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

export type NavigationItem = {
  href?: string
  label: string
  submenus?: NavigationItem[]
}

// 🔹 Recursive function to check if a menu item or any of its submenus match the current path
function isMenuActive(item: NavigationItem, pathname: string): boolean {
  if (!item.href) return false

  // Direct match or starts with the item.href (fixes direct parent highlighting)
  if (pathname === item.href || pathname.startsWith(`${item.href}/`)) {
    return true
  }

  // Check submenus recursively
  return item.submenus
    ? item.submenus.some((submenu) => isMenuActive(submenu, pathname))
    : false
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

  const hasActiveSubmenu = item.submenus?.some((submenu) =>
    isMenuActive(submenu, pathname)
  )

  const isActive =
    isMenuActive(item, pathname) || hasActiveSubmenu

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
          href={item.href ?? ''}
          className={cn(
            'block p-2 hover:text-primary transition-colors text-base !font-[400] relative',
            'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-primary dark:after:bg-input',
            isActive
              ? 'text-primary font-medium'
              : 'text-muted-foreground dark:text-input'
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
        <PopoverTrigger asChild className='!ring-0 !outline-0'>
          <Link href={item.href ?? ''}>
            <button
              className={cn(
                'flex items-center gap-2 p-2 transition-colors w-full relative',
                'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-primary dark:after:bg-input',
                isActive
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground dark:text-input'
              )}
              onMouseEnter={() => {
                if (!isOpen) {
                  setActiveMenu(id)
                }
              }}
              onMouseLeave={handleClose}
            >
              {item.label}
              {level === 0 ? null : (
                <ChevronRight className='w-4 h-4 ml-auto' />
              )}
            </button>
          </Link>
        </PopoverTrigger>
        <PopoverContent
          side={level === 0 ? 'bottom' : 'right'}
          className='mx-2'
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
