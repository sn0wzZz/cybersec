import HeroReusable from '@/components/hero-reusable';
import ResourceView from '@/modules/resources/resource-view';


export default async function page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await (params)).id;
  return (
    <div className=' bg-gradient-to-b from-[hsla(235,100%,98%,1)] from-5% to-background to-95%  dark:from-background dark:to-background '>
      <HeroReusable
        title={`Read Blogs and insights with Saasmo ${id}`}
        image={'/resources/resource-4.png'}
        button={{ label: 'View Our more blogs' }}
      />
      <ResourceView />
    </div>
  )
}