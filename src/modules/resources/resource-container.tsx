import Container from '@/components/container';

import { Input } from '@/components/ui/input';
import SearchIcon from '@/components/icons/search';

import ResourceCard from './resource-card'

const resources = [
  {
    id: 1,
    tags: ['Security', 'Analytics'],
    image: '/resources/resource-3.png',
    title: 'Weekly Cybersecurity Report',
    short:
      'As your dedicated cybersecurity services provider, Cyberone equips you with timely and in-depth information about current cyber attacks.',
    href: '/',
  },
  {
    id: 2,
    tags: ['SaaS', 'Analytics'],
    image: '/resources/resource-4.png',
    title: 'Weekly Cybersecurity Report',
    short:
      'As your dedicated cybersecurity services provider, CyberSec equips you with timely ',
    href: '/',
  },
  {
    id: 3,
    tags: ['SaaS', 'Analytics'],
    image: '/resources/resource-5.png',
    title: 'Weekly Cybersecurity Report',
    short:
      'As your dedicated cybersecurity services provider, CyberSec equips you with timely ',
    href: '/',
  },
  {
    id: 4,
    tags: ['SaaS', 'Analytics'],
    image: '/resources/resource-6.png',
    title: 'We has joined CyberHive initiative',
    short:
      'The initiative aims to analyze the maturity of the European cyber security market by...',
    href: '/',
  },
  {
    id: 5,
    tags: ['SaaS', 'Analytics'],
    image: '/resources/resource-7.png',
    title: 'Weekly Cybersecurity Report',
    short:
      'As your dedicated cybersecurity services provider, Cyberone equips you with timely and...',
    href: '/',
  },
  {
    id: 6,
    tags: ['SaaS', 'Analytics'],
    image: '/resources/resource-8.png',
    title: 'Weekly Cybersecurity Report',
    short:
      'As your dedicated cybersecurity services provider, Cyberone equips you with timely ',
    href: '/',
  },
  {
    id: 7,
    tags: ['SaaS', 'Analytics'],
    image: '/resources/resource-4.png',
    title: 'Weekly Cybersecurity Report',
    short:
      'As your dedicated cybersecurity services provider, Cyberone equips you with timely ',
    href: '/',
  },
]


export default function ResourceContainer() {
  return (
    <Container className='py-10 md:py-16' >
      <div className='flex flex-col lg:flex-row justify-between items-start  gap-8'>
        <h4 className='display-medium md:display-xl text-primary max-w-[521px]'>
          Here is our latest Resources{' '}
        </h4>
        <div className='flex bg-background items-center p-[14px] rounded-2xl w-full lg:max-w-[312px]'>
          <Input
            className='!border-0 !outline-0 !ring-0 shadow-none body-large placeholder:body-large w-full '
            placeholder='Search...'
          />
          <SearchIcon />
        </div>
      </div>
      <div className='flex flex-col md:flex-row mt-16 gap-[19px]'>
        <ul className='max-w-[797px] flex flex-col gap-8 h-full'>
          {resources.slice(0,3).map((resource, i) => (
            <ResourceCard key={`resource-${i + 1}`} resource={resource} />
          ))}
        </ul>
        <ul className='lg:max-w-[481px] flex flex-col gap-8 h-full'>
          {resources.slice(3,resources.length).map((resource, i) => (
            <ResourceCard
              key={`resource-${i + 1}`}
              resource={resource}
              compact
            />
          ))}
        </ul>
        
      </div>
    </Container>
  )
}