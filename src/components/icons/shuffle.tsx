import React from 'react'

const ShuffleIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    width='25'
    height='24'
    viewBox='0 0 25 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props} // Allows passing additional props like className or style
  >
    <path
      d='M7.66666 8.34033H15.0667C15.9567 8.34033 16.6667 9.06031 16.6667 9.94031V11.7103'
      stroke='white'
      strokeWidth='1.4'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9.35666 6.66016L7.66666 8.34021L9.35666 10.0302'
      stroke='white'
      strokeWidth='1.4'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.6667 15.66H9.26666C8.37666 15.66 7.66666 14.9401 7.66666 14.0601V12.29'
      stroke='white'
      strokeWidth='1.4'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.9762 17.3403L16.6662 15.6602L14.9762 13.9702'
      stroke='white'
      strokeWidth='1.4'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12.1662 22C17.689 22 22.1662 17.5228 22.1662 12C22.1662 6.47715 17.689 2 12.1662 2C6.64332 2 2.16617 6.47715 2.16617 12C2.16617 17.5228 6.64332 22 12.1662 22Z'
      stroke='white'
      strokeWidth='1.4'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default ShuffleIcon
