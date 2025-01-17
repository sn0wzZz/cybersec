import { getResourceBySlug } from '@/lib/data'

export default async function page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  console.log('Service slug', slug)
  const resource = getResourceBySlug(slug.join('/'))
  const Content = resource?.content
  if (Content)
    return (
      <div className='pt-[200px] bg-section-gradient'>
        <Content />
      </div>
    )
  return <div>Resource not found</div>
}
