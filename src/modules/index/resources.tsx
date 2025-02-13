'use client'
import Container from '@/components/container'
import avatar2 from '../../../public/resources/avatar-2.png'
import resource2 from '../../../public/resources/resource-2.png'
import resource1 from '../../../public/resources/resource-1.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { CalendarIcon, Clock3 } from 'lucide-react'

const resources = [
  {title: 'Weekly Cybersecurity Report',
    date: '11.11.24',
    readTime: 10,
    image: resource1,
    author: {
      name: 'Slavi',
      position: 'UX/UI Designer',
      avatar: avatar2
    }
  },
  {title: 'Weekly Cybersecurity Report',
    date: '11.11.24',
    readTime: 10,
    image: resource2,
    author: {
      name: 'Slavi',
      position: 'UX/UI Designer',
      avatar: avatar2
    }
  },
  
]



export default function Resources() {
  return (
    <Container >
      <h4 className='display-large mg:display-xl text-primary mb-8 md:mb-16'>
        Resources
      </h4>
      <div className='overflow-x-scroll overflow-y-hidden '>
        <motion.ul
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='flex gap-6 w-max mb-16 '
        >
          {resources.map((resource, i) => (
            <li
              key={i}
              className='flex flex-col-reverse p-[18px] md:pr-[48px] gap-12  md:flex-row dark:border-t rounded-[40px] dark:bg-card'
            >
              <div className='relative  h-auto  md:h-[413px] rounded-[40px] aspect-square overflow-hidden'>
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className='object-cover'
                />
              </div>
              <div>
                <div className='w-[80px] h-[80px] flex-center rounded-full border border-input my-6'>
                  <span className='font-medium text-[20px] text-primary'>
                    0{i + 1}
                  </span>
                </div>
                <div className=' max-w-[200px] md:max-w-[350px] md:h-[200px] gap-8  flex justify-between flex-col'>
                  <h4 className='display-small text-primary'>
                    {resource.title}
                  </h4>

                  <hr className='border-dashed' />

                  <div className='flex gap-2.5 items-center '>
                    <div className='relative h-[50px] rounded-full aspect-square'>
                      <Image
                        src={resource.author.avatar}
                        alt={resource.author.name}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <h5 className='display-xxs text-primary'>
                        {resource.author.name}
                      </h5>
                      <p>{resource.author.position}</p>
                    </div>
                  </div>
                </div>
                <div className='w-full flex justify-end gap-4 mt-8 '>
                  <div className='flex items-center gap-2 text-primary'>
                    <div className='flex-center h-8 w-8 rounded-full bg-muted dark:bg-primary-item '>
                      <CalendarIcon className='h-4 w-4' />
                    </div>
                    <span className='body-medium'>{resource.date}</span>
                  </div>
                  <div className='flex items-center gap-2 text-primary'>
                    <div className='flex-center h-8 w-8 rounded-full bg-muted dark:bg-primary-item '>
                      <Clock3 className='h-4 w-4' />
                    </div>
                    <span className='body-medium'>
                      {resource.readTime} min read
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </Container>
  )
}
