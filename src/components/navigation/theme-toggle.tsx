'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/context/theme-context'
import { Moon, Sun } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  // This useEffect ensures that we only render the component client-side
  useEffect(() => {
    setMounted(true)
  }, [])

  // If not mounted yet, return null to avoid SSR mismatch
  if (!mounted) return null

  return (
    <Select defaultValue={theme} onValueChange={toggleTheme}>
      <SelectTrigger className='w-16'>
        <SelectValue>
          {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className='min-w-[250px]'>
        <SelectItem value='light'>
          <div className='flex items-center gap-2'>
            <Sun size={16} />
            Light
          </div>
        </SelectItem>
        <SelectItem value='dark'>
          <div className='flex items-center gap-2'>
            <Moon size={16} />
            Dark
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
