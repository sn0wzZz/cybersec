'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

interface Filter {
  label: string
  value: string
}

interface FiltersProps {
  filters: Filter[]
  paramName?: string
  onFilterChange: (filterValue: string) => void // New callback
}

const Filters = ({
  filters,
  paramName = 'filter',
  onFilterChange,
}: FiltersProps) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  // Get the current filter from the URL or default to 'all'
  const currentFilter = searchParams.get(paramName) || 'all'
  const [selectedFilter, setSelectedFilter] = useState(currentFilter)

  useEffect(() => {
    setSelectedFilter(currentFilter)
  }, [currentFilter])

  const handleFilterChange = (filterValue: string) => {
    setSelectedFilter(filterValue)
    onFilterChange(filterValue) // Pass the selected filter to the parent

    const params = new URLSearchParams(searchParams)
    if (filterValue === 'all') {
      params.delete(paramName)
    } else {
      params.set(paramName, filterValue)
    }

    // Update the URL without reloading
    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    })
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
              selectedFilter === filter.value
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
