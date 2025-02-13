import React from 'react'

const SearchIcon = ( props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    width='24'
    height='25'
    viewBox='0 0 24 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M11.5 21.332C16.7467 21.332 21 17.0787 21 11.832C21 6.58533 16.7467 2.33203 11.5 2.33203C6.25329 2.33203 2 6.58533 2 11.832C2 17.0787 6.25329 21.332 11.5 21.332Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22 22.332L20 20.332'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default SearchIcon
