'use client'

import React from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

interface Filter {
  label: string
  value: string
}

interface FiltersProps {
  filters: Filter[]
  paramName?: string
}

const Filters = ({ filters, paramName = 'filter' }: FiltersProps) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  // Set the default filter to 'all' if no filter is specified in the URL
  const currentFilter = searchParams.get(paramName) || 'all'

  const handleFilterChange = (filterValue: string) => {
    console.log('Filter changed to:', filterValue) // Debugging
    const params = new URLSearchParams(searchParams)

    // If the selected filter is 'all', remove the filter param from the URL
    if (filterValue === 'all') {
      params.delete(paramName)
    } else {
      params.set(paramName, filterValue)
    }

    // Update the URL without causing a full page reload
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className='max-w-[600px] overflow-x-scroll no-scrollbar'>
      <div className='flex gap-4 w-max'>
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => handleFilterChange(filter.value)}
            className={cn(
              'px-3 py-3.5 h-11 flex items-center rounded-[16px] border transition-colors duration-300',
              currentFilter === filter.value
                ? 'bg-primary-item text-white border-transparent'
                : 'bg-background dark:bg-card dark:text-primary'
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Filters
