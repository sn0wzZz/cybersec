import React from 'react'

const LinkedIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      width='17'
      height='16'
      viewBox='0 0 17 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M4.27377 2.66222C4.27377 3.3986 3.6759 3.99555 2.9384 3.99555C2.20089 3.99555 1.60303 3.3986 1.60303 2.66222C1.60303 1.92584 2.20089 1.32889 2.9384 1.32889C3.6759 1.32889 4.27377 1.92584 4.27377 2.66222ZM4.27377 5.66222V14.6622H1.60303V5.66222H4.27377ZM6.27686 5.66222H8.9476V6.22316C9.36527 6.07576 9.81474 5.99555 10.283 5.99555C12.4955 5.99555 14.2891 7.78642 14.2891 9.99555V14.6622H11.6183V9.99555C11.6183 9.25917 11.0205 8.66222 10.283 8.66222C9.54546 8.66222 8.9476 9.25917 8.9476 9.99555V14.6622H6.27686V9.99555V5.66222Z'
        fill='currentColor'
      />
    </svg>
  )
}

export default LinkedIcon
