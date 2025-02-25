import HeroReusable from '@/components/hero-reusable'
import hero from '../../../public/resources/resource-1.png'

import ResourceContainer, {
  Category,
  CMSResource,
} from '@/modules/resources/resource-container'
import { Suspense } from 'react'
import { cybersec } from '@/lib/services/client'

export default async function page() {
  const { data: resources } = await cybersec.getRows('blogs', {
    populate: { categories: true, author: true, thumbnail: true },
  })
  const { data: categories } = await cybersec.getRows('blogCategories')

  console.log(resources)
  return (
    <div className=' bg-gradient-to-b from-[hsla(235,100%,98%,1)] from-5% to-background to-95%  dark:from-background dark:to-background '>
      <HeroReusable
        title='Weekly Cybersecurity Report'
        image={hero}
        button={{ href: '/' }}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <ResourceContainer
          resources={resources as unknown as CMSResource[]}
          categories={categories as unknown as Category[]}
        />
      </Suspense>
    </div>
  )
}
