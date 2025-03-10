import AnimateBlur from '@/components/animate-blur'
import Bullet from '@/components/bullet'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Category, CMSResource } from './resource-container'

// type Resource = {
//   id: number
//   tags: string[]
//   image: string
//   title: string
//   short: string
//   href?: string
// }

export default function ResourceCard({
  resource,
  compact,
}: {
  resource: CMSResource
  compact?: boolean
}) {
  return (
    <li>
      <AnimateBlur
        className={` p-[20px] bg-background dark:bg-card dark:border-t  rounded-[40px] h-full`}
      >
        <div
          className={`relative mb-[32px] ${
            compact ? 'h-[286px]' : 'h-[286px] lg:h-[493px]'
          }  w-full rounded-[30px] overflow-hidden`}
        >
          <Image
            src={resource.thumbnail.url}
            alt={resource.title}
            fill
            className='object-cover'
          />
        </div>
        <div className='ml-3'>
          <ul className='flex gap-6 mb-[30px]'>
            {resource.categories.map((category: Category) => (
              <li key={Math.random()} className='flex items-center gap-3'>
                <Bullet /> {category.name}
              </li>
            ))}
          </ul>
          <div className='flex flex-col gap-6'>
            <h5 className=' display-xxs md:display-small'>{resource.title}</h5>
            <p className='body-large text-muted-foreground-grey'>
              {resource.summary}
            </p>
          </div>
          <Link href={`/resources/${resource.slug}`}>
            <Button
              variant={'ghost'}
              className='gap-3 text-[20px] items-center my-[42px]'
            >
              Read more <ChevronRight className='h-4 w-4' />
            </Button>
          </Link>
        </div>
      </AnimateBlur>
    </li>
  )
}
