import React from 'react'

const FacebookIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      width='10'
      height='14'
      viewBox='0 0 10 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M9.59413 0.24585H7.7885C5.46695 0.24585 3.58496 2.12784 3.58496 4.44939V13.7458H6.58955V4.08656C6.58955 3.62225 6.96594 3.24585 7.43025 3.24585H9.59413V0.24585Z'
        fill='currentColor'
      />
      <path
        d='M0.580078 8.49585H3.58466H6.58925H9.59383V5.49585H6.58925H3.58466H0.580078V8.49585Z'
        fill='currentColor'
      />
    </svg>
  )
}

export default FacebookIcon
