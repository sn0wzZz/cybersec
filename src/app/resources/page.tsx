import HeroReusable from '@/components/hero-reusable'
import hero from '../../../public/resources/resource-1.png'

import ResourceContainer from '@/modules/resources/resource-container'



export default function page() {
  return (
    <div>
      <HeroReusable title='Weekly Cybersecurity Report' image={hero} button={{href: '/'}} />
      <ResourceContainer />
    </div>
  )
}