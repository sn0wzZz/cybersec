import HeroReusable from '@/components/hero-reusable'
import { cybersec } from '@/lib/services/client'
import { CMSResource } from '@/modules/resources/resource-container'
import ResourceView from '@/modules/resources/resource-view'

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  const { data: resourceData } = await cybersec.getRows('blogs', {
    populate: { thumbnail: true, author: { avatar: true }, categories: true },
    formatOptions: { richText: 'html' },
    filter: { slug: { $eq: slug } },
  })

  const { data: additionalResourcesData } = await cybersec.getRows('blogs', {
    populate: { thumbnail: true, author: { avatar: true }, categories: true },
    formatOptions: { richText: 'html' },
    filter: {
      slug: {
        $ne: slug,
      },
    },
  })
  const resource = resourceData as unknown as CMSResource[]
  const additionalResources =
    additionalResourcesData as unknown as CMSResource[]

  return (
    <div className=' bg-gradient-to-b from-[hsla(235,100%,98%,1)] from-5% to-background to-95%  dark:from-background dark:to-background '>
      <HeroReusable
        title={resource.at(0)?.title ?? ''}
        image={resource.at(0)?.thumbnail.url ?? ''}
        button={{ label: 'View Our more blogs' }}
      />
      <ResourceView
        data={resource.at(0)}
        additionalResources={additionalResources}
      />
    </div>
  )
}
