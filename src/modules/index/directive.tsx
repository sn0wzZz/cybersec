
import Container from '@/components/container';
import { Button } from '@/components/ui/button';
import { ChevronRight, Play } from 'lucide-react';
import PerkItem from './perk-item';

const perks = [
  {
    tag: 'Get expert advice on how to protect your business',
    title: "We are your trusted partner",
    href: '/'
  },
  {
    tag: 'Get expert advice on how to protect your business',
    title: "We are your trusted partner",
    href: '/'
  },
  {
    tag: 'Get expert advice on how to protect your business',
    title: "We are your trusted partner",
    href: '/'
  },
]

export default function Directive() {

  return (
    <Container as='section' className='flex flex-col gap-4'>
      <div className='flex flex-col lg:flex-row gap-6 justify-between'>
        <div className='flex flex-col gap-6 items-start'>
          <h2 className='display-large md:display-xl text-accent max-w-[707px]'>
            Everything about the NIS2 Directive
          </h2>
          <p className='body-large text-muted-foreground max-w-[550px]'>
            The new EU directive NIS 2 raises the bar for cyber security and
            affects many sectors of public life. It is not just about legal
            compliance, but also has a major focus in technology. It highlights
            the strong involvement of management in building a cyber resilient
            organisation.
          </p>
          <Button className='title-medium ' variant={'outline'} size={'lg'}>
            Learn more <ChevronRight className='w-6 h-6' />
          </Button>
        </div>
        <div className='w-full max-w-[550px] aspect-video flex-center bg-muted rounded-3xl'>
          <Play className='w-16 h-16 text-primary' />
        </div>
      </div>
      <div className='overflow-x-scroll no-scrollbar'>
        <div className='flex gap-[20px] mt-[75px] w-max'>
          {perks.map((perk, i) => (
            <PerkItem key={i} perk={perk} index={i} />
          ))}
        </div>
      </div>
    </Container>
  )
}