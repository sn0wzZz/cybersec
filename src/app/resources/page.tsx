import HeroReusable from '@/components/hero-reusable'
import hero from '../../../public/resources/resource-1.png'

import ResourceContainer from '@/modules/resources/resource-container'
import { Suspense } from 'react'



export default function page() {
  return (
    <div className=' bg-gradient-to-b from-[hsla(235,100%,98%,1)] from-5% to-background to-95%  dark:from-background dark:to-background '>
      <HeroReusable
        title='Weekly Cybersecurity Report'
        image={hero}
        button={{ href: '/' }}
      />
      <Suspense fallback={<div>Loading...</div>}>

      <ResourceContainer />
      </Suspense>
    </div>
  )
}