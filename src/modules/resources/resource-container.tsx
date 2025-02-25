'use client'
import Container from '@/components/container'

import Filters from '@/components/filters'
import Searchbar from '@/components/navigation/searchbar'
// import { useSearchParams } from 'next/navigation';
// import { useState } from 'react';
import ResourceCard from './resource-card'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { IBaseCMSObject } from '@/lib/types'
import slugify from 'slugify'

// const resources = [
//   {
//     id: 1,
//     tags: ['Security', 'Analytics'],
//     image: '/resources/resource-3.png',
//     title: 'Weekly Cybersecurity Report',
//     short:
//       'As your dedicated cybersecurity services provider, Cyberone equips you with timely and in-depth information about current cyber attacks.',
//     href: '/',
//   },
//   {
//     id: 2,
//     tags: ['SaaS', 'Analytics'],
//     image: '/resources/resource-4.png',
//     title: 'Weekly Cybersecurity Report',
//     short:
//       'As your dedicated cybersecurity services provider, CyberSec equips you with timely ',
//     href: '/',
//   },
//   {
//     id: 3,
//     tags: ['SaaS', 'Analytics'],
//     image: '/resources/resource-5.png',
//     title: 'Weekly Cybersecurity Report',
//     short:
//       'As your dedicated cybersecurity services provider, CyberSec equips you with timely ',
//     href: '/',
//   },
//   {
//     id: 4,
//     tags: ['SaaS', 'Analytics'],
//     image: '/resources/resource-6.png',
//     title: 'We has joined CyberHive initiative',
//     short:
//       'The initiative aims to analyze the maturity of the European cyber security market by...',
//     href: '/',
//   },
//   {
//     id: 5,
//     tags: ['SaaS', 'Analytics'],
//     image: '/resources/resource-7.png',
//     title: 'Weekly Cybersecurity Report',
//     short:
//       'As your dedicated cybersecurity services provider, Cyberone equips you with timely and...',
//     href: '/',
//   },
//   {
//     id: 6,
//     tags: ['SaaS', 'Analytics'],
//     image: '/resources/resource-8.png',
//     title: 'Weekly Cybersecurity Report',
//     short:
//       'As your dedicated cybersecurity services provider, Cyberone equips you with timely ',
//     href: '/',
//   },
//   {
//     id: 7,
//     tags: ['SaaS', 'Analytics'],
//     image: '/resources/resource-4.png',
//     title: 'Weekly Cybersecurity Report',
//     short:
//       'As your dedicated cybersecurity services provider, Cyberone equips you with timely ',
//     href: '/',
//   },
// ]

// const resourceFilters = [
//   { label: 'All Categories', value: 'all' },
//   // { label: 'SaaS', value: 'saas' },
//   // { label: 'Analytics', value: 'analytics' },
//   // { label: 'Security', value: 'security' },
// ]
export interface Category extends IBaseCMSObject {
  name: string
}
export interface Author extends IBaseCMSObject {
  name: string
  avatar: Image
}
export interface Image extends IBaseCMSObject {
  url: string
  mime: string
  name: string
  size: number
  folderId?:string
  formats: Format
}
export interface Format {
  url: string
  mime: string
  name: string
  size: number
  format: string
}
export interface CMSResource extends IBaseCMSObject {
  title: string
  categories: Category[]
  author: Author
  readTime: number
  summary: string
  content: string
  thumbnail: Image
  publishDate?: string
  slug: string
}

export default function ResourceContainer({
  resources,
  categories,
}: {
  resources: CMSResource[]
  categories: Category[]
}) {
  const searchParams = useSearchParams()
  const [selectedFilter, setSelectedFilter] = useState(
    searchParams.get('filter') || 'all'
  )
  const cmsCategories = categories.map((category) => ({
    label: category.name,
    value: slugify(category.name),
  }))

  const resourceFilters = [
    { label: 'All Categories', value: 'all' },
    ...cmsCategories,
  ]

  useEffect(() => {
    setSelectedFilter(searchParams.get('filter') || 'all')
  }, [searchParams])

  // Filter resources based on the selected category
  const filteredResources =
    selectedFilter === 'all'
      ? resources
      : resources.filter((resource) =>
          resource.categories
            .map((category) => slugify(category.name))
            .includes(selectedFilter)
        )

  return (
    <Container className='py-10 md:py-16'>
      <div className='flex flex-col lg:flex-row justify-between items-start  gap-8'>
        <h4 className='display-medium md:display-xl text-primary max-w-[521px] text-nowrap'>
          Here is our latest Resources{' '}
        </h4>
      </div>
      <div className='flex  justify-between mt-8 flex-col-reverse  gap-4 lg:flex-row'>
        <Filters
          filters={resourceFilters}
          paramName='filter'
          onFilterChange={setSelectedFilter}
        />
        <Searchbar />
      </div>
      <div className='flex flex-col md:flex-row mt-16 gap-[19px]'>
        <ul className='max-w-[797px] flex flex-col gap-8 h-full'>
          {filteredResources.slice(0, 3).map((resource, i) => (
            <ResourceCard key={`resource-${i + 1}`} resource={resource} />
          ))}
        </ul>
        <ul className='lg:max-w-[481px] flex flex-col gap-8 h-full'>
          {filteredResources.slice(3, resources.length).map((resource, i) => (
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
