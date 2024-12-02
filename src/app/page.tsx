import Directive from '@/modules/index/directive'
import FAQ from '@/modules/index/faq'
import Hero from '@/modules/index/hero'
import Resources from '@/modules/index/resources'
import Services from '@/modules/index/services'
import Solutions from '@/modules/index/solutions'

export default function Home() {
  return (
    <div className=''>
      <Hero />
      <Directive />
      <Solutions />
      <Services />
      <Resources />
      <FAQ />
    </div>
  )
}
