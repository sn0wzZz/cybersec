'use client'

import { Moon, Sun } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
 const { theme, setTheme } = useTheme()
  return (
    <Select defaultValue={theme} onValueChange={setTheme}>
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
