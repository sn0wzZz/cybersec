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
      <div className='pt-[200px] bg-gradient-to-b from-[hsla(235,100%,98%,1)] from-5% to-background to-95%  dark:from-background dark:to-background '>
        <Content />
      </div>
    )
  return <div>Resource not found</div>
}
